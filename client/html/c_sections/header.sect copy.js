const $underlined = get$snippet("text-underlined");

module.exports = () => {
  const $navigation = require("./navigation.sect.js");

  const html = splitTemp/*html*/`
    <header class="HEADER">

      <!--<a class="logo" href="/home">
        <ul>
          <li><span>Junge</span><span>Grafik</span></li>
          <li><span>Jeune</span><span>Graphisme</span></li>
          <li><span>Giovane</span><span>Grafica</span></li>
        </ul>
      </a>-->

      <a class="logo" href="/home">
        <span>${$underlined("Junge Grafik")}<span>
      </a>

      ${$navigation()}
    </header>
  `;

  const css = /*css*/`
    .HEADER {
      height: var(--headerHeight);
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
      position: fixed;
      z-index: 1000;
      background-color: white;
      border: 1px solid black;
      top: 0;
      left: 0;
    }

    .HEADER .logo li {
      padding: 0 30px;
      border: 1px solid black;
    }

    .HEADER .logo ul {
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: 1fr;
      grid-auto-rows: 1fr;
      height: 100%;
    }

    .HEADER .logo li {
      display: inline;
    }

    .HEADER .logo li span {
      width: 8em;
      display: inline-block;
      vertical-align: sub;
    }

    @media screen and (max-width: 1024px) {
      .HEADER {
        grid-template-columns: 40% 60%;
      }
    }

    @media screen and (max-width: 500px) {
      .HEADER {
        grid-template-columns: auto var(--headerHeight);
      }

      .HEADER .NAVIGATION > a {
        display: none;
      }
    }
  `;

  return ["header.sect", html, css];
};
