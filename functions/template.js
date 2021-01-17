const Template = function(template) {
  return new Template.init(template)
}

function $template(name) {
  this.name = name
  this.raw = null
  this.isCompiled = false
  this.isCollected = false
  this.cssList = {}
  this.css = null
  this.html = null
}

Template.init = function(template) {
  this.name = template[0]
  this.raw = template
  this.isCompiled = false 
  this.css = null
  this.html = null
  this.cssList = {}

  this._run()
}

Template.prototype = {
  _run() {
    new Promise((resolve) => {
      this.html = this._compile_rc(this.raw)
      this._joinCss()
      this._injectCss()
      this._removeWhitespace()
      resolve()
    }).then(() => this.isCompiled = true)
  }

,	_compile_rc(template) {
    let compiled = ""

    if (Array.isArray(template[1])) {
      const strings = template[1][0]
      const variables = template[1][1]

      compiled = variables.reduce((comp, _variable, i) => {
        return (
          comp
          + (Array.isArray(_variable)
              ?	this._compile_rc(_variable)
              : _variable
            )
          + strings[i +1]
        )
      }, strings[0])
    
    } else {
      compiled = template[1]
    }

    this._extractCss(template)

    return compiled
  }

,	_extractCss(template) {
    if (template[2]
    &&	! this.cssList[template[0]])
      this.cssList[template[0]] = template[2]
  }

,	_joinCss() {
  	this.css = ""
    Object.keys(this.cssList).forEach((_key) => {
      this.css += this.cssList[_key]
    })
  }

, _injectCss() {
    this.html = this.html.replace(
      "<inject-css>"
    , `<style>${this.css}</style>`
    )
  }

, _removeWhitespace() {
    this.html = removeWhitespace_(this.html)
  }
}

Template.init.prototype = Template.prototype

module.exports = Template