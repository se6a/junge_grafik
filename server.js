"use strict"

const fs = require("fs")
const Express = require("./node_modules/express")
const Server = Express()
const env = require("./env.json")


/*  Routes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
Server.use("/api", require("./routes/router-api"))
Server.use("/page|/", require("./routes/router-site"))


/*  Static Files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
Server.use(
  Express.static(
    "./assets"
  , { dotfiles: "ignore"
    , index: false
    }
  )
)


/*  Start Server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
Server.listen(
  env.port
, () => console.log(`Listening on port ${env.port}.`)
)