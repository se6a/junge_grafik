const Router     = Express.Router();
const FormParser = require("multer")();
const fetch      = require("node-fetch");
const FormData   = require("form-data");
const log4js     = require("log4js");

log4js.configure({
  appenders: {
    submitErrors: {
      type: "file",
      filename: "./_logs/project-submit.log"
    }
  },
  categories: {
    default: {
      appenders: ["submitErrors"],
      level: "error"
    }
  }
});

const logger = log4js.getLogger("submitErrors");

Router.post(
  "/email",
  FormParser.single("e-mail"),
  (req, res) => {
    const formdata = req.body;
    const email = formdata.fields["e-mail"];

    res.sendStatus(200);
  }
);

Router.post(
  "/newproject",
  FormParser.array("files"),
  Express.raw(),
  prepareEntry,
  rebuildForm,
  sendForm,
  buildFileForm,
  sendFiles
);

function prepareEntry(req, res, next) {
  const originalForm = req.body.fields;

  res.locals.originalForm = req.body;
  res.locals.entry = {
    contestant: {
      firstname: originalForm.vorname,
      lastname: originalForm.familienname
    },
    year: new Date().getFullYear()
  };

  next();
}

function rebuildForm(req, res, next) {
  const formdata = res.locals.originalForm;
  const newForm = new FormData();

  for (const _key in formdata) {
    const _content = formdata[_key];

    if (_content !== null && typeof(_content) === "object") {
      for (const __key in _content) {
        const __content = _content[__key];
        const _newkey   = `${_key}[${__key}]`;
        newForm.append(_newkey, `${__content}`);
      }
    }
    else {
      newForm.append(_key, _content);
    }
  }

  newForm.append("action[einreichung]", "submit");

  res.locals.newForm = newForm;

  next();
}

async function sendForm(req, res, next) {
  await fetch(
    "https://api.jungegrafik.ch/symphony/api/entries/einreichungen/?auth-token=02701d93&format=json",
    {
      method: "POST",
      body: res.locals.newForm
    }
  )

    .then(async (raw) => {
      const formRes = await raw.json();
      return formRes.response;
    })

    .then((formRes) => {
      if (formRes._result === "success") {
        res.locals.entry.id = formRes._id;
      }
      else {
        throw Error(formRes.message.value);
      }
    })

    .then(() => next())

    .catch((error) => failed(res, req, "sendForm", error));
}

function buildFileForm(req, res, next) {
  const fileForm = new FormData();

  fileForm.append("action[reprografie]", "submit");

  req.files.forEach((_file, i) => {
    fileForm.append(`fields[${i}][einreichung]`, res.locals.entry.id);
    fileForm.append(`fields[${i}][datei]`, _file.buffer, renameFile(_file, i, res.locals.entry));
    fileForm.append(`fields[${i}][originaldateiname]`, _file.originalname);
  });

  res.locals.fileForm = fileForm;

  next();
}

async function sendFiles(req, res, next) {
  const url = "https://api.jungegrafik.ch/symphony/api/entries/reprografien/?auth-token=02701d93";

  const options = {
    method: "POST",
    body: res.locals.fileForm
  };

  await fetch(url, options)

    .then((fileRes) => fullfilled(res))

    .catch((error) => failed(res, req, "sendFiles", error));
}

function fullfilled(res) {
  console.log("successfull submit");

  res.body = "fullfilled";
  res.sendStatus(200);
}

function failed(res, req, position, error) {
  console.log(position, error);
  logger.error(req.body, req.files, "\n\n\n\n");
  res.status(500).send(position);
}

function renameFile(file, i, entry) {
  const ext = file.mimetype.split("/")[1];
  const { year, contestant, id } = entry;
  const { firstname, lastname } = contestant;
  const newName = `${year}-${id}-`
                + `${firstname}-${lastname}-`
                + `${i + 1}.${ext}`;

  return newName;
}

module.exports = Router;
