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


/*  Global Functions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
require("./functions/tools")
global.__basedir = __dirname


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