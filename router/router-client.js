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

// Router.get(
//   /^\/newsletter(\/.*)?/,
//   (req, res) => {
//     let version;

//     if (req.params.length) {
//       version = req.params[0].slice(1);
//     }
//     console.log(version);
//     // res.send(`hello ${version}`);
//     res.download(`${__basedir}/client/media/newsletter/jungegrafik-newsletter-2021-03.pdf`);
//   }
// );

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
