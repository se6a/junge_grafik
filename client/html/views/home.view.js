const $header = require("../components/header.comp.js")
const $footer = require("../components/footer.comp.js")
const $article = require("../components/article.comp.js")

const style = /*css*/ `

.PAGE {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
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


module.exports = () => /*html*/ `
<style>${style}</style>

<div class="PAGE">

  ${$header()}

  <main class="CONTENT autoRows">
    ${$article()}
  </main>

  ${$footer()}

</div>

`