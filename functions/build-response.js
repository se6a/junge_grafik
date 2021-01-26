/*/////////////////////////////////////////////////////////////////////////////

  RESPONSE_
  v1.2021.01.20-01

///////////////////////////////////////////////////////////////////////////////

*******************************************************************************
  INDEX
*******************************************************************************

  DESCRIPTION
  ^ Templating
    Template-Array
    Split-Template
  REQUIRED
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


  Example for joined Template:

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
}


/*  Functions
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
Response_.init.prototype =
Response_.prototype = {
  async build(req) {
    await this._assembleRaw(req)
    await this._stringify()
    await this._removeWhitespace()

    return this
  }
  
, async _assembleRaw(req) {
    const pageTemp = get$page("main")
    this.raw = await pageTemp(req)
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

  Module Access

******************************************************************************/

async function buildResponse(req, res, next) {
  const response = Response_(req, res)
  await response.build(req)
  res.locals = response

  next()
}

module.exports = buildResponse