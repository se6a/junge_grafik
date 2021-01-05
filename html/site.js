module.exports = (name, data) => /*html*/ `
<!DOCTYPE html>
<html>

  <head>
    <meta char="utf8">
    <title>Junge Grafik</title>

    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/main.js"></script>

  </head>
  <body>

    ${view(name, data)}

  </body>
</html>
`

function view(name, data) {
  let $view = ""

  try {
    $view = require(`./views/${name}`)(data)
  } catch(error) {
    $view = "error 404"
  }

  return $view
}

const header = () => require("./components/header.js")
const footer = () => require("./components/footer.js")