const Express = require("express")
const Router = Express.Router()
const $site = require("../client/html/site.html")

Router.get("/", render)

function render(req, res) {
  res.send($site(res))
}

module.exports = Router