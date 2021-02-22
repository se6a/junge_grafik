const Router     = Express.Router();
const FormParser = require("multer")();
const request    = require("request");
const fetch      = require("node-fetch");
const FormData   = require("form-data");
const fs         = require("fs");
const Stream     = require("stream");

Router.post(
  "/newproject",
  FormParser.array("files"),
  Express.raw(),
  sendForm,
  sendFiles
);

function rebuildFormdata(formdata) {
  const newForm = {};

  for (const _key in formdata) {
    const _content = formdata[_key];
    let _newkey;

    if (_content !== null && typeof(_content) === "object") {
      for (const __key in _content) {
        const __content = _content[__key];
        const _newkey   = `${_key}[${__key}]`;
        newForm[_newkey] = `${__content} ${Math.round(Math.random() * 10000)}`;
      }
    }
    else {
      newForm[_key] = _content;
    }
  }

  return newForm;
}

async function sendForm(req, res, next) {
  const url = "https://api.jungegrafik.ch/symphony/api/entries/einreichungen/?auth-token=02701d93";
  const newForm = new FormData();
  const originalForm = req.body;

  newForm.append("action[einreichung]", "submit");
  newForm.append("fields[projekttitel]", "6805");

  const options = {
    method: "POST",
    body: newForm
  };

  // Post Request to Symphony and receiving the entry of the new entry:
  res.locals.entryId = await fetch(url, options)
    .then(async (symphResRaw) => {
      return (await symphResRaw.text()
                ).match(/id="(\d+)"/)[1];
    })
    .catch((error) => console.log(error));

  next();
}

async function sendFiles(req, res, next) {
  const url = "https://api.jungegrafik.ch/symphony/api/entries/reprografien/?auth-token=02701d93";
  const newForm = new FormData();

  // const file = req.files[0].buffer;
  const file = fs.readFileSync("F:\\Aktuelle Projekte\\junge_grafik\\dev\\client\\media\\test-img.jpg");

  console.log("FILE", file);
  newForm.append(`action[reprografien]`, "submit");
  newForm.append(`fields[einreichung][0]`, res.locals.entryId);
  newForm.append("fields[datei][0]", file, "image_file.jpg");

  console.log("FORM", newForm);
  console.log("ENTRY", res.locals.entryId);

  const options = {
    method: "POST",
    body: newForm
  };

  await fetch(url, options)
    .then(async (resp2) => console.log("RESP 2", await resp2.text()))
    .catch((error) => console.log(error));
}

module.exports = Router;
