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
        <span>${$underlined("<span class=\"first\">Junge</span><span class=\"second\">Grafik</span>")}</span>
        <span>${$underlined("<span class=\"first\">Jeune</span><span class=\"second\">Graphisme</span>")}</span>
        <span>${$underlined("<span class=\"first\">Giovane</span><span class=\"second\">Grafica</span>")}</span>
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
      font-size: var(--fontSize-M);
      line-height: var(--lineHeight-M);
      position: fixed;
      z-index: 1000;
      background-color: white;
      border: 1px solid black;
      top: 0;
      left: 0;
    }

    .HEADER .logo {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      border: 1px solid black;
    }

    .HEADER .logo > span {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex-grow: 1;
    }

    .HEADER .logo .first {
      padding-left: var(--spacing-M);
      width: calc(2 * var(--spacing-XL));
      display: inline-block;
    }

    .HEADER .logo .innerBox {
      margin-bottom: -1px;
    }

    .HEADER .logo > span:last-child .line {
      border: none;
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
