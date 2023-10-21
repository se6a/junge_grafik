const Router = Express.Router();
const BodyParser = require("body-parser");

Router.use(BodyParser.urlencoded({ extended: true }));
Router.use(BodyParser.json());

const buildResponse = require("../functions/templating");

/*  Routes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Redirect /index to home
Router.get(/^\/(index\/?)?$/, resetUrl, buildResponse, send);

//Winners
Router.get(
    /^\/winners\/?(\d{4})?\/?(\d*)?/,

    (req = {}, res, next) => {
        const { params } = req;
        const year = params[0] || 2023;
        const projectNumber = params[1] || "";
        req.locals = { year, projectNumber };

        if (projectNumber)
            res.redirect("/project?id=" + year + "-" + projectNumber);

        next();
    },
    buildResponse,
    send
);

// Project 2021 Backwards Compatibility
Router.get(
    /^\/(2021-\d+)$/,
    ({ params, query, ...req }, res, next) => {
        const projectId = params[0];
        req.url = `/project?id=${projectId}`;
        query.id = projectId;
        if (projectId) res.redirect("/project?id=" + projectId);
        next();
    },
    buildResponse,
    send
);

// Error handling middleware
// Router.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send("Something broke!");
// });

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
