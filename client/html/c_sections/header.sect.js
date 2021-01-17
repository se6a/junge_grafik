module.exports = () => {
  const $navigation = require("./navigation.sect.js")

  const html = splitTemp/*html*/`
    <header class="HEADER">

      <div class="title">
        <ul>
          <li><span>Junge</span><span>Grafik</span></li>
          <li><span>Jeune</span><span>Graphisme</span></li>
          <li><span>Giovane</span><span>Grafica</span></li>
        </ul>
      </div>

      ${$navigation()}

    </header>
  `

  const css = /*css*/`
    .HEADER {
      height: var(--headerHeight);
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }

    .HEADER .title li {
      padding: 0 30px;
      border: 1px solid black;
    }

    .HEADER .title ul {
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: 1fr;
      grid-auto-rows: 1fr;
      height: 100%;
    }

    .HEADER .title li {
      display: inline;
    }

    .HEADER .title li span {
      width: 8em;
      display: inline-block;
      vertical-align: sub;
    }
  `

  return ["header", html, css]
}