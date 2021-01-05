const Express = require("express")
const Router = Express.Router()
const $site = require("../html/site")

const data = {
  title: "testing this"
, content: "Alle jahre wieder"
, date: "4.1.21"
}

Router.get("/", (req, res) => {
  const page = req.baseUrl.replace("/page/", "") || "home"
  console.log(page)
  res.send($site(page, data))
})

module.exports = Router