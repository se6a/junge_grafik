global.splitTemp = (strings, ...variables) => {
  const splitted = []

  for (let i = 0; i < strings.length; i++) {
    strings[i] !== ""
      ? splitted.push(strings[i]) : null
    variables[i]
      ? splitted.push(variables[i]) : null
  }

  return splitted
}

global.get$snippet = (name) => get$template(`a_snippets/${name}.snip.js`)
global.get$section = (name) => get$template(`b_sections/${name}.sect.js`)
global.get$view = (name) => get$template(`c_views/${name}.view.js`)
global.get$page = (name) => get$template(`d_pages/${name}.page.js`)

global.get$template = (path) => {
    let $temp = ""

    try {
      $temp = require(`${__basedir}/client/html/${path}`)
    } catch(error) {
      $temp = "error 404"
    }

    return $temp
}