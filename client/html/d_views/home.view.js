module.exports = () => {

  const $header = get$section("header")
  const $footer = get$section("footer")
  const $article = get$section("article")

  const html = splitTemp/*html*/ `
    <div class="PAGE">

      ${$header()}

      <main class="CONTENT autoRows">
        ${$article()}
      </main>

      ${$footer()}

    </div>
  `

  const css = /*css*/ `
    .PAGE {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      margin: 0 auto;
      border: 1px solid black;
      position: relative;
      font-family: FeixenSans;
    }

    .CONTENT {
      min-height: calc(100vh - 78px);
      background-color: var(--pageColor);
    }
  `

  return ["home", html, css]
}