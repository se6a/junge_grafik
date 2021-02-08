/*/////////////////////////////////////////////////////////////////////////////

  TEMPLATING
  v1.2021.01.20-01

/////////////////////////////////////////////////////////////////////////////*/

/******************************************************************************
  INDEX
*******************************************************************************

  DESCRIPTION
  ^ Templating
    Template-Array
    Split-Template
  TEMPLATING
  ^ Build
    build
    _assembleRaw
    _flatten_rc
    _stringifyCss
    _injectCss
    _get$template
  ^ Access
    ^ Globals
      splitTemp
      $attr
      get$snippet
      get$section
      get$view
      get$site
      get$template
    ^ Module Exports
      buildResponse

******************************************************************************/

/******************************************************************************

  Description

*******************************************************************************

  Templating
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Html is compiled from a template-array which can contain many nested
  template-arrays itself.

  Template-Array
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
    Every template-array contains three items:
    [NAME, TEMPLATE, CSS]

      NAME as string
        The name of the template

      TEMPLATE
        as string
        or split-template (description further down)

      CSS as string
        Styles for the template

  Example for assembled Template:

    [                                         Template-Array
      "page"                                  | Name
    , [                                       | Template
        "<div class='page'>"                  |   String
      , [                                     |   Nested Template-Array
          "section"                           |   | Name
        , [                                   |   | Template
            "<div class='section'>"           |   |   String
          , [                                 |   |   Nested Template-Array
              "text"                          |   |   | Name
            , "<p>Hi there.</p>"              |   |   | Template
            , "p { color: green; }"           |   |   | Css
            ]                                 |   |
          , "</div>"                          |   |   String
          ]                                   |   |
        , ".section { color: blue; }"         |   | Css
        ]                                     |
      , "</div>"                              |   String
      ]                                       |
    , ".page { color: red; }"                 | Css
    ]

  Example for joined Template:

      <style>
        .page { color: red; }
        .section { color: blue; }
        p { color: green; }
      </style>

      <div class="page">
        <div class="section">
          <p>Hello there!</p>
        </div>
      </div>

  Split-Template
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
    A template-literal like

      `<div>${var1}<strong>${var2}${var3}</strong> ${var4}</div>`

    will be split up into it's parts made from it's strings and variables.

      [ "<div>"
      , "this is a "
      , "<strong>"
      , "temp"
      , "late"
      , "</strong> "
      , "string"
      , "</div>"
      ]

    This will be joined as:
      "<div>this is a <strong>template</strong> string</div>"

*/

/******************************************************************************

  Templating

******************************************************************************/

/*  Build
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
async function build(req) {
  const raw = await _assembleRaw(req);
  let [html, cssList] = _flatten_rc(raw);
  const css = _stringifyCss(cssList);
  html = removeWhitespace_(
    _injectCss(html, css));

  return { raw, cssList, css, html };
}

function _assembleRaw(req) {
  const data = {
    viewName: req.url.slice(1),
    view:     {}
  };

  const $site = get$site("main");
  const raw = $site(data);

  return raw;
}

function _flatten_rc(raw, css = {}) {
  const _name = raw[0];
  const _temp = raw[1];
  const _css  = raw[2] || "";

  let joined = "";
  css[_name] = _css;

  if (Array.isArray(_temp))
    for (let i = 0; i < _temp.length; i++) {
      const _tempPart = _temp[i];
      if (Array.isArray(_tempPart))
        joined += _flatten_rc(_tempPart, css)[0];
      else
        joined += _tempPart;
    }
  else
    joined += _temp;

  return [joined, css];
}

function _stringifyCss(cssList) {
  return Object.keys(cssList).reduce(
    (total, _key) => (total += cssList[_key]), "");
}

function _injectCss(html, css) {
  return html.replace("<inject-css />", `<style>${css}</style>`);
}

function _get$template(path) {
  let $temp;

  try {
    $temp = require(`${__basedir}/client/html/${path}`);
  } catch (error) {
    $temp = () => "error 404";
    console.log(error);
  }

  return $temp;
};

/******************************************************************************

  Access

******************************************************************************/

/*  Global Functions
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
global.splitTemp = (strings, ...variables) => {
  const splitted = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i] !== "")
      splitted.push(strings[i]);
    if (variables[i])
      splitted.push(variables[i]);
  }

  return splitted;
};

global.$attr = (data) => {
  const attr = [];

  if (data.class)
    attr.push(`class="${data.class}"`);

  if (data.style)
    attr.push(`style="${data.style}"`);

  if (data.attr) {
    if (Array.isArray(data.attr))
      data.attr = data.attr.join(" ");
    attr.push(data.attr);
  }

  if (attr.length > 0)
    attr.unshift("");

  return attr.join(" ");
};

global.get$site = (name) => _get$template(`a_sites/${name}.site.js`);
global.get$view = (name) => _get$template(`b_views/${name}.view.js`);
global.get$section = (name) => _get$template(`c_sections/${name}.sect.js`);
global.get$snippet = (name) => _get$template(`d_snippets/${name}.snip.js`);

/*  Modules
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
async function buildResponse(req, res, next) {
  res.locals.built = await build(req);
  next();
}

module.exports = buildResponse;
