const https = require("https")

async function getData(path = "symphony/api/sections") {
  return new Promise(
    (resolve, reject) => {
      let response = ""

      https.get(
        { host: "api.jungegrafik.ch"
        , path: `/${path}?auth-token=02701d93&format=json`
        , header: {"Content-Type": "application/json"}
        }
      , (connection) => {
          connection.on("data", (chunk) => response += chunk)
          connection.on("end", () => resolve(response))
        }
      ).on("error", (error) => reject(error))
    }
  )
}

module.exports = async (req) => {
  const data = await getData(req.query.get)
  const view = req.route.path === "/"
                || req.route.path === "index"
                ? "home"
                : req.route.path
  
  const $header = get$section("header")
  const $footer = get$section("footer")
  const $menu   = get$section("menu")
  const $view   = get$view(view)

  const html = splitTemp/*html*/`
    <!DOCTYPE html>
    <html>

      <head>
        <meta char="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Junge Grafik</title>

        <link rel="stylesheet" href="css/global.css">
        <script defer type="text/javascript" src="js/main.js"></script>

        <inject-css>
      </head>

      <body>
        ${$header()}
        ${$view(data)}
        ${$footer()}
      </body>

    </html>
  `

  const css = /*css*/`
    .VIEW, .MENU {
      display: flex;
      flex-direction: column;
      min-height: calc(100vh - 78px);
      margin: 0 auto;
      position: relative;
    }

    .VIEW {
      background-color: var(--mainColor);
      display: flex;
      flex-direction: column;
    }
  `

  return ["site", html, css] 
}