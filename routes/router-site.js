const Express = require("express")
const Router = Express.Router()
const $site = require("../client/html/site.frm")
const Template = require("../functions/template.js")

Router.get("/", async (req, res) => {
  const raw = $site(res)
  const Temp = await Template(raw)
  res.send(Temp.html)
})

module.exports = Router