const Underlined = getSnippet("text-underlined");

module.exports = () => {
  const $navigation = require("./navigation.sect.js");

  const html = splitTemp/*html*/`
    <header class="HEADER">

      <a class="logo" href="/home">
        <span>
          ${Underlined(`<span class="first">Junge</span><span class="second">Grafik</span>`)}
        </span>
        <span>
          ${Underlined(`<span class="first">Jeune</span><span class="second">Graphisme</span>`)}
        </span>
        <span>
          ${Underlined(`<span class="first">Giovane</span><span class="second">Grafica</span>`)}
        </span>
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
      border: var(--borderHalf) solid currentColor;
      top: 0;
      left: 0;
    }

    .HEADER .logo {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      border: var(--borderHalf) solid currentColor;
    }

    .HEADER .logo > span {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex-grow: 1;
    }

    .HEADER .logo .first {
      padding-left: var(--size-M);
      width: calc(2 * var(--size-XL));
      display: inline-block;
    }

    .HEADER .logo .innerBox {
      margin-bottom: -1px;
    }

    .HEADER .logo > span:last-child .line {
      border: none;
    }

    .--size-md .HEADER {
      grid-template-columns: 40% 60%;
  }

    .--size-sm .HEADER {
        grid-template-columns: auto var(--headerHeight);
    }
  `;

  return ["header.sect", html, css];
};
