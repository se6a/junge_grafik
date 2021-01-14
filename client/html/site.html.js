module.exports = () => /*html*/ `
<!DOCTYPE html>
<html>

  <head>
    <meta char="utf8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Junge Grafik</title>

    <link rel="stylesheet" href="css/global.css">
    <script type="text/javascript" src="js/main.js"></script>

  </head>
  <body>

    ${$view()}

  </body>
</html>
`

const $view = () => {
  let $view = ""

  try {
    $view = require(`./views/home.view`)()
  } catch(error) {
    $view = "error 404"
  }

  return $view
}