const Router = Express.Router();
const BodyParser = require("body-parser");

Router.use(BodyParser.urlencoded({ extended: true }));
Router.use(BodyParser.json());

const buildResponse = require("../functions/templating");

/*  Routes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
Router.get(/^\/(index\/?)?$/, resetUrl, buildResponse, send);

Router.get(
  /^\/2021-\d+$/,
  (req, res, next) => {
    const [, year, projectId] = req.url.match(/\/(\d{4})-(\d+)/);
    req.url = `/project?id=${projectId}`;
    req.query.id = projectId;
    next();
  },
  buildResponse,
  send
);

function buildRoutes() {
  Server.cache.viewsByName.forEach((_view) => {
    Router.get(`/${_view}*`, buildResponse, send);
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

module.exports = init();
