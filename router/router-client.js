const Express = require("express");
const Router = Express.Router();
const buildResponse = require("../functions/templating");

/*  Routes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
Router.get(
  /^\/(index\/?)?$/,
  resetUrl,
  buildResponse,
  send
);

function buildRoutes() {
  Server.cache.viewsByName
    .forEach((_view) => {
      Router.get(
        `/${_view}`,
        buildResponse,
        send
      );
    });
}

/*  Middleware
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function resetUrl(req, res, next) {
  req.url = "/home";
  next();
}

function send(req, res) {
  res.send(res.locals.built.html);
}

/*  Initialize
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function init() {
  buildRoutes();
  return Router;
}

module.exports = init;

module.exports = init();
