const Router = Express.Router();
const BodyParser = require("body-parser");

Router.use(BodyParser.urlencoded({ extended: true }));
Router.use(BodyParser.json());

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

Router.get(
  /^\/newsletter(\/.*)?/,
  (req, res) => {
    const version = req.params[0].slice(1);
    // res.send(`hello ${version}`);
    res.sendFile(`${__basedir}/0.jpg`);
  }
);

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
