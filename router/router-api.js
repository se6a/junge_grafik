const Router     = Express.Router();
const FormParser = require("multer")();
const fetch      = require("node-fetch");
const FormData   = require("form-data");

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
      lastname: originalForm.nachname
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
  const url = "https://api.jungegrafik.ch/symphony/api/entries/einreichungen/?auth-token=02701d93";

  const options = {
    method: "POST",
    body: res.locals.newForm
  };

  // Post Request to Symphony and receiving the ID of the new entry:
  res.locals.entry.id = await fetch(url, options)
    .then(async (symphResRaw) => {
      const text = await symphResRaw.text();
      // console.log("RAW", text);
      const entryId = text.match(/id="(\d+)"/)[1];
      return entryId;
    })
    .catch((error) => console.log(error));

  next();
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
    .then(async (resp2) => console.log("RESP 2", await resp2.text()))
    .catch((error) => console.log(error));
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
