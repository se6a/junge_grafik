/*/////////////////////////////////////////////////////////////////////////////

  RESPONSE_
  v1.2021.01.20-01

///////////////////////////////////////////////////////////////////////////////

*******************************************************************************
INDEX
*******************************************************************************

  Documentation
  Required
    templating.js
  Response_
  ^ INITIALIZATION
    init
  ^ FUNCTIONS
    build
    _assembleRaw
    _stringify
    _flatten_rc
    _stringifyCss
    _injectCss
    _removeWhitespace
  MODULE ACCESS
  ^ buildResponse_

*******************************************************************************




*******************************************************************************

  Documentation

*******************************************************************************


  Templating and Compiling
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Html is compiled from a template-array which can contain many nested 
  template-arrays itself.

  Template-Array
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
    Every template-array contains three items:
    [NAME, TEMPLATE, CSS]

      NAME
      string
        The name of the template

      TEMPLATE
      string
        Simple template as string.
      or split-template
        [STRINGS, VARIABLES]
        split-templates is a template that is split up
        in its strings and variables with splitTemp``
        (look up "javascript tagged template strings")

      CSS
      string
        Specific styling for the template


  SPLIT-TEMP
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
    A template-string like

      `<div>${var1}<strong>${var2}${var3}</strong> ${var4}</div>`

    would be split up into its parts of strings and variables.
    (Note the empty string created to separate var2 and var3)
      [ "<div>"
      , "this is a "
      , "<strong>"
      , "temp"
      , ""
      , "late"
      , "</strong> "
      , "string"
      , "</div>"
      ]

    This split-temp will be joined as:
      "<div>this is a <strong>template</strong> string</div>"


  Raw template structure example:
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
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
            , "p {color=green}"               |   |   | Css
            ]                                 |   |
          , "</div>"                          |   |   String
          ]                                   |   |
        , ".section {color=blue}"             |   | Css
        ]                                     |
      , "</div>"                              |   String
      ]                                       |
    , ".page {color=red}"                     | Css
    ]

    Compiled
      <style>
        .page {color=red}
        .section {color=blue}
        p {color=green}
      </style>

      <div class="page">
        <div class="section">
          <p>Hello there!</p>
        </div>
      </div>


*/

/******************************************************************************

  Required

******************************************************************************/

require("../functions/templating.js")




/******************************************************************************

  Response_

******************************************************************************/

/*  Instantiate
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
function Response_(req, res) {
  return new Response_.init(req, res)
}

Response_.init = function(req, res) {
  this.raw     = null
  this.cssList = null
  this.css     = null
  this.html    = null

  this.build(req)
}


/*  Functions
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
Response_.init.prototype =
Response_.prototype = {
  build(req) {
    this._assembleRaw(req)
      ._stringify()
      ._removeWhitespace()

    return this
  }
  
, _assembleRaw() {
    this.raw = get$page("main")()

    return this
  }

, _stringify() {
    const flat = this._flatten_rc(this.raw)
    this.html = flat[0]
    this.cssList = flat[1]
    this._stringifyCss()
    this._injectCss()

    return this
  }

, _flatten_rc(raw, css = {}) {
      const _name = raw[0]
      const _temp = raw[1]
      const _css = raw[2] || ""

      let joined = ""
      css[_name] = _css

      if (Array.isArray(_temp))
      { for (let i = 0; i < _temp.length; i++) {
          const _tempPart = _temp[i]
          if (Array.isArray(_tempPart)) {
            joined += this._flatten_rc(_tempPart, css)[0]
          } else {
            joined += _tempPart
          }
        }
      } else {
        joined += _temp
      }

    return [joined, css]
  }

, _stringifyCss() {
    this.css = Object.keys(this.cssList).reduce(
      (total, _key) => total += this.cssList[_key], "")

    return this
  }

, _injectCss() {
    this.html = this.html.replace(
      "<inject-css>", `<style>${this.css}</style>`)

    return this
  }

, _removeWhitespace() {
    this.html = removeWhitespace_(this.html)

    return this
  }
}




/******************************************************************************

  MODULE ACCESS

******************************************************************************/

function buildResponse(req, res, next) {
  const response = Response_(req, res)
  res.locals = response
  next()
}

module.exports = buildResponse