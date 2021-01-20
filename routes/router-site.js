const Express = require("express")
const Router = Express.Router()
const buildResponse = require("../functions/build-response")

Router.get("/", buildResponse, send)

function send(req, res) {
  res.send(res.locals.html)
}

module.exports = Router