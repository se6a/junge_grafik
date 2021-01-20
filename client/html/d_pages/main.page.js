module.exports = () => {
  const $view = get$view("home")

  const html = splitTemp/*html*/`
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
        <inject-css>

        ${$view()}

      </body>
    </html>
  `

  const css = /*css*/`
  `

  return ["site", html, css] 
}