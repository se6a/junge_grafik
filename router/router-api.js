const Router = Express.Router();
const FormParser = require("multer")();
const fetch = require("node-fetch");
const FormData = require("form-data");
const log4js = require("log4js");

const token = "440e38e8";
const apiUrl = "https://2023.jungegrafik.ch/symphony/api";
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
    rebuildForm
    // sendNewsletterForm
);

async function prepareSubscriber(req, res, next) {
    res.locals.originalForm = req.body;

    next();
}

// async function sendNewsletterForm(req, res, next) {
//     await fetch(`${apiUrl}/newsletter/opt-in/`, {
//         method: "POST",
//         body: res.locals.newForm,
//     })
//         .then(async (rawRes) => {
//             const symphonyRes = await rawRes.json();

//             if (symphonyRes.ergebnis === "success") res.sendStatus(200);
//             else throw Error("Something went wrong.");
//         })

//         .catch((error) => {
//             console.log(error);
//             res.sendStatus(400);
//         });
// }

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

    newForm.append("fields[einreichedatum][start][]", "now");

    for (const _key in formdata) {
        const _content = formdata[_key];
        if (_key.includes("entstehungsjahr")) continue;

        if (_content !== null && typeof _content === "object") {
            for (const __key in _content) {
                if (__key.includes("entstehungsjahr")) continue;

                const __content = _content[__key];
                const _newkey = `${_key}[${__key}]`;
                newForm.append(_newkey, `${__content}`);
            }
        } else {
            newForm.append(_key, _content);
        }
    }

    res.locals.newForm = newForm;

    next();
}

function getFormDataFields(formData) {
    const fields = {};

    // Iterate through the internal "_streams" array of the FormData instance
    for (let i = 0; i < formData._streams.length; i += 2) {
        const keyValuePair = formData._streams[i];

        // Check if the current element is a string (key-value pairs are stored as strings)
        if (typeof keyValuePair === "string") {
            const keyMatch = keyValuePair.match(/name="(.+?)"/);

            // If a key is found in the string, extract it and get the corresponding value
            if (keyMatch) {
                const key = keyMatch[1];
                const value = formData._streams[i + 1];

                // If the value is a function, call it to get the string representation
                if (typeof value === "function") {
                    fields[key] = value.toString();
                } else {
                    fields[key] = value;
                }
            }
        }
    }

    return fields;
}

async function sendEntryForm(req, res, next) {
    const newForm = res.locals.newForm;
    const fields = getFormDataFields(newForm);

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
                const fieldsAsStr = JSON.stringify(fields, null, 4);
                throw Error(body.response.message.value + "\n\n" + fieldsAsStr);
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
