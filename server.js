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

require("./functions/tools")
global.splitTemp = (strings, ...variables) => [strings, variables]


/*  Require Template
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
global.get$element = (name) => get$template(`a_elements/${name}.elem.js`)
global.get$component = (name) => get$template(`b_components/${name}.comp.js`)
global.get$section = (name) => get$template(`c_sections/${name}.sect.js`)
global.get$view = (name) => get$template(`d_views/${name}.view.js`)


global.get$template = (path) => {
    let $temp = ""

    try {
      $temp = require(`${__dirname}/client/html/${path}`)
    } catch(error) {
      $temp = "error 404"
    }

    return $temp
}


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