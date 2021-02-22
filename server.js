"use strict";

/*  Necessities
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
global.__basedir = __dirname;
require("./functions/tools");
const fs = require("fs");

/*  Environment & Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
global.ENV = require("./.env.json");

/*  Server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
global.Express = require("./node_modules/express");
global.Server = Express();

/*  Live Reload Server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
if (ENV.environment === "local")
{ const LiveReload      = require("livereload");
  const LRServer        = LiveReload.createServer();
  const ConnectLRServer = require("connect-livereload");

  LRServer.watch("./client");
  Server.use(ConnectLRServer());
}

/*  Cache
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
async function cacheViews() {
  const views = await fs.readdirSync(
    `${__basedir}/client/html/b_views`);

  Server.cache.viewsByName = views.map(
    (_view) => _view.replace(".view.js", ""));
}

/*  Static Files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function staticFiles() {
  Server.use(
    Express.static(
      `${__basedir}/client`,
      {
        dotfiles: "ignore",
        index:    false
      }
    )
  );
}

/*  Router
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
async function loadRouter() {
  Server.use("/api/", require("./router/router-api"));
  Server.use("/", await require("./router/router-client"));
}

/*  Start Server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
async function start() {
  staticFiles();
  await cacheViews();
  loadRouter();

  Server.listen(
    ENV.port,
    () => console.log(`Listening on port ${ENV.port}.`)
  );
};

start();
