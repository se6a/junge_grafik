const Router = Express.Router();
const FormParser = require("multer")();
const fetch = require("node-fetch");
const FormData = require("form-data");
const log4js = require("log4js");

const hostUrl = "https://2023.jungegrafik.ch";
const apiUrl = `${hostUrl}/symphony/api`;
const token = "440e38e8";

log4js.configure({
    appenders: {
        submitErrors: {
            type: "file",
            filename: "./_logs/project-submit.log",
        },
    },
    categories: {
        default: {
            appenders: ["submitErrors"],
            level: "error",
        },
    },
});

const logger = log4js.getLogger("submitErrors");

/* Project Entry
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
Router.post(
    "/newproject",
    FormParser.array("files"),
    Express.raw(),
    prepareEntry,
    rebuildForm,
    sendEntryForm,
    getProjectId,
    buildFileForm,
    sendFiles,
    triggerConfirmationEmail
);

function prepareEntry(req, res, next) {
    const originalForm = req.body.fields;

    res.locals.originalForm = req.body;
    res.locals.entry = {
        contestant: {
            firstname: originalForm.vorname,
            lastname: originalForm.familienname,
        },
        year: new Date().getFullYear(),
    };

    next();
}

function rebuildForm(req, res, next) {
    const formdata = res.locals.originalForm;
    const newForm = new FormData();

    const entstehungsOrtIds = {
        schule: 3949,
        betrieb: 3950,
    };

    let entstehungsOrt = entstehungsOrtIds.schule;

    for (const _key in formdata) {
        const _content = formdata[_key];
        if (_content !== null && typeof _content === "object") {
            for (const __key in _content) {
                const __content = _content[__key];
                const _newkey = `${_key}[${__key}]`;

                if (__key === "name-lehrbetrieb" && __content) {
                    const chars = __content.match(/[a-z]/gi);
                    if (chars.length > 3)
                        entstehungsOrt = entstehungsOrtIds.betrieb;
                }

                newForm.append(_newkey, `${__content}`);
            }
        }
    }

    newForm.append("fields[entstehungsort]", entstehungsOrt);
    newForm.append("fields[einreichedatum][start][]", "now");

    res.locals.newForm = newForm;

    next();
}

async function sendEntryForm(req, res, next) {
    const newForm = res.locals.newForm;
    debugLog(newForm);

    await fetch(
        `${apiUrl}/entries/einreichungen/?auth-token=${token}&format=json`,
        {
            method: "POST",
            body: newForm,
        }
    )
        .then(async (rawRes) => {
            const body = await rawRes.json();

            if (body.response._result === "success") {
                res.locals.entry.id = body.response._id;
                next();
            } else {
                throw Error(body.response.message.value);
            }
        })

        .catch((error) => failed(res, req, "sendEntryForm", error));
}

async function getProjectId(req, res, next) {
    await fetch(
        `${apiUrl}/entries/einreichungen/${res.locals.entry.id}/?fields=projekt-id&auth-token=${token}&format=json`,
        {
            method: "GET",
        }
    )
        .then(async (rawRes) => {
            const body = await rawRes.json();

            if (
                typeof parseInt(body.response.entry["projekt-id"].value) ===
                "number"
            ) {
                res.locals.entry.projectId =
                    body.response.entry["projekt-id"].value;
                next();
            } else {
                throw Error(body.response.message.value);
            }
        })

        .catch((error) => failed(res, req, "getProjectId", error));
}

function buildFileForm(req, res, next) {
    const fileForm = new FormData();

    fileForm.append("action[reprografie]", "submit");

    req.files.forEach((_file, i) => {
        fileForm.append(`fields[${i}][einreichung]`, res.locals.entry.id);
        fileForm.append(
            `fields[${i}][datei]`,
            _file.buffer,
            renameFile(_file, i, res.locals.entry)
        );
        fileForm.append(`fields[${i}][originaldateiname]`, _file.originalname);
    });

    res.locals.fileForm = fileForm;

    next();
}

async function sendFiles(req, res, next) {
    const url = `${apiUrl}/entries/reprografien/?auth-token=${token}&format=json`;

    const options = {
        method: "POST",
        body: res.locals.fileForm,
    };

    await fetch(url, options)
        .then(async (rawRes) => {
            const body = await rawRes.json();
            let errors = [];

            if (body.response.entry) {
                errors = body.response.entry
                    .map((_file) => _file._result)
                    .filter((_result) => _result === "error");
            } else if (body.response._result === "error") {
                errors = "error";
            }

            if (errors.length === 0) {
                next();
            } else {
                throw Error(body.response.message.value);
            }
        })

        .catch((error) => failed(res, req, "sendFiles", error));
}

async function triggerConfirmationEmail(req, res, next) {
    const formdata = new FormData();
    formdata.append("id", res.locals.entry.id);
    formdata.append("action[einreichung-bestaetigung]", "submit");

    await fetch(`${hostUrl}/mailings/einreichung-bestaetigung/`, {
        method: "POST",
        body: formdata,
    })
        .then(async (rawRes) => {
            try {
                const body = rawRes?.json
                    ? await rawRes.json()
                    : rawRes?.text
                    ? await rawRes.text()
                    : rawRes;

                if (rawRes.status > 400 || body.mailversand !== "passed") {
                    throw body;
                }

                fullfilled(res);
            } catch (err) {
                throw Error(
                    JSON.stringify({ error: err, res: rawRes }, null, 4)
                );
            }
        })

        .catch((error) => failed(res, req, "triggerConfirmationEmail", error));
}

function fullfilled(res) {
    res.body = "fullfilled";
    res.sendStatus(200);
}

function failed(res, req, position, error) {
    console.error(position, error);
    logger.error(req.body, req.files, error, "\n\n\n\n");
    res.status(500).send(position);
}

function renameFile(file, i, entry) {
    const ext = file.mimetype.split("/")[1];
    const { year, contestant, projectId } = entry;
    const { firstname, lastname } = contestant;
    const newName =
        `${year}-${projectId}-` +
        `${firstname}-${lastname}-` +
        `${i + 1}.${ext}`;

    return newName;
}

function debugLog(form) {
    const fields = {};
    const streams = [...form._streams];

    for (let i = 0; i < streams.length; i += 3) {
        const entry = streams[i];
        const key = entry.match(/name="([^"]*)/)?.[1] || null;
        const value = streams?.[i + 1];
        if (value === null || key === null) continue;
        fields[key] = value;
    }
}

module.exports = Router;
