const https = require("https")

async function getData(path = "sections") {
  return new Promise(
    (resolve, reject) => {
      let response = ""

      https.get(
        { host: "api.jungegrafik.ch"
        , path: `/symphony/api/${path}?auth-token=02701d93&format=json`
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
  const $intro = get$section("intro")

  const path = req.query.get || "sections"

  const data = await getData(req.query.get)

  const html = splitTemp/*html*/`
    <main class="VIEW Test">
      <br>
      <h3>/symphony/api/${path}?auth-token=02701d93&format=json</h3>
      <br>
        Siehe console...
      <script>
        const symphdata = ${data || "{}"};
        console.group("Response");
        console.dir(symphdata.response || null);
        console.groupEnd();
      </script>

    </main>
  `

  const css = /*css*/`
    :root {
      --mainColor: var(--orange)
    }
  `

  return ["test", html, css]
}