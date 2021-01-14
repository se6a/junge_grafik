"use strict"
/*  Environment & Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const ENV = require("./env.json")

/*  Server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const Express = require("./node_modules/express")
const Server = Express()


/*  Live Reload Server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const LiveReload = require("livereload")
const LRServer = LiveReload.createServer()
const ConnectLRServer = require("connect-livereload")

LRServer.watch("./client")
Server.use(ConnectLRServer())

function html(strings, ...variables) {
  return "dude"
}

let test2 = "stuff"
let test = html`<div>${test2}${test2}${test2}${test2}${test2}${test2}</div>`

/*  Body Parser
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const BodyParser = require("./node_modules/body-parser")

Server.use(BodyParser.urlencoded( {extended: true} ))
Server.use(BodyParser.json())


/*  Routes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
Server.use("/api", require("./routes/router-api"))
Server.use("/page|/", require("./routes/router-site"))


/*  Static Files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
Server.use(
  Express.static(
    "./client"
  , { dotfiles: "ignore"
    , index: false
    }
  )
)


/*  Start Server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
Server.listen(
  ENV.port
, () => console.log(`Listening on port ${ENV.port}.`)
)