const Router = Express.Router();
const FormParser = require("multer")();
const fetch = require("node-fetch");
const FormData = require("form-data");
const log4js = require("log4js");

const apiUrl = "https://2023.jungegrafik.ch/symphony/api";
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

/* Newsletter Subscriber
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
Router.post(
    "/email",
    FormParser.single("e-mail"),
    prepareSubscriber,
    rebuildForm,
    sendNewsletterForm
);

async function prepareSubscriber(req, res, next) {
    res.locals.originalForm = req.body;

    next();
}

async function sendNewsletterForm(req, res, next) {
    await fetch("https://api.jungegrafik.ch/newsletter/opt-in/", {
        method: "POST",
        body: res.locals.newForm,
    })
        .then(async (rawRes) => {
            const symphonyRes = await rawRes.json();

            if (symphonyRes.ergebnis === "success") res.sendStatus(200);
            else throw Error("Something went wrong.");
        })

        .catch((error) => {
            console.log(error);
            res.sendStatus(400);
        });
}

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

    const test = {};

    // for (const _key in formdata) {
    //     const _content = formdata[_key];

    //     if (_content !== null && typeof _content === "object") {
    //         for (const __key in _content) {
    //             if (__key.includes("entstehungsjahr")) continue;
    //             const __content = _content[__key];
    //             const _newkey = `${_key}[${__key}]`;
    //             newForm.append(_newkey, `${__content}`);
    //             test[_newkey] = __content;
    //         }
    //     } else {
    //         if (_key.includes("entstehungsjahr")) continue;

    //         newForm.append(_key, _content);
    //         test[_key] = _content;
    //     }
    // }

    // newForm.append("fields[einreichedatum][start][]", "now");
    // console.log(test);

    newForm.append("fields[einreichedatum][start][]", "now");
    newForm.append("geschlecht", "440");
    newForm.append("geburtsjahr", "1990");
    newForm.append("vorname", "TEST");
    newForm.append("familienname", "TEST");
    newForm.append("strasse-nummer", "TEST");
    newForm.append("postleitzahl-ort", "TEST");
    newForm.append("e-mail", "wyss.sebastian@gmail.com");
    newForm.append("mobile", "0774641842");
    newForm.append("link-portfolio", "");
    newForm.append("link-instagram-profil", "");
    newForm.append("projekttitel", "sdgfsdfsadf");
    newForm.append("entstehungsjahr", "2023");
    newForm.append("tag-1", "Editorial design");
    newForm.append("tag-2", "");
    newForm.append("tag-3", "");
    newForm.append("entstehungsort", "3950");
    newForm.append("projektbeschrieb", "sadfsadfsadfsadf");
    newForm.append("ausbildungsniveau", "685");
    newForm.append("ausbildungsjahr", "3");
    newForm.append("name-ausbildungsinstitution", "4093");
    newForm.append("name-lehrbetrieb", "");
    newForm.append("kanton-des-ausbildungsortes", "416");
    newForm.append("dozenten", "sdafsadfsadfsa");
    newForm.append("weitere-gestalter", "");
    newForm.append("link-videomaterial", "");
    newForm.append("link-projektwebsite-prototyp", "");
    newForm.append("sprache", "699");

    res.locals.newForm = newForm;

    next();
}

async function sendEntryForm(req, res, next) {
    await fetch(
        `${apiUrl}/entries/einreichungen/?auth-token=${token}&format=json`,
        {
            method: "POST",
            body: res.locals.newForm,
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
        `${api}/entries/einreichungen/${res.locals.entry.id}/?fields=projekt-id&auth-token=${token}&format=json`,
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
    formdata.append("action[einreichung-bestaetigung]", "Abschicken");

    await fetch(`${apiUrl}/mailings/einreichung-bestaetigung/`, {
        method: "POST",
        body: formdata,
    })
        .then(async (rawRes) => {
            const body = await rawRes.json();

            if (body.mailversand && body.mailversand === "passed") {
                fullfilled(res);
            } else {
                throw Error(body);
            }
        })

        .catch((error) => failed(res, req, "triggerConfirmationEmail", error));
}

function fullfilled(res) {
    res.body = "fullfilled";
    res.sendStatus(200);
}

function failed(res, req, position, error) {
    console.log(position, error);
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

module.exports = Router;
