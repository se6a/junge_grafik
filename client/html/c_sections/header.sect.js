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
      display: flex;
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
      flex-grow: 1;
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
      padding-left: var(--size-S);
      width: calc(2 * var(--size-XL));
      display: inline-block;
    }

    .HEADER .logo .innerBox {
      margin-bottom: 0;
    }

    .HEADER .logo > span:last-child .line {
      border: none;
    }

    .HEADER .logo:focus {
      outline: none;
      background-color: var(--gray);
    }

    .--safari.--size-lg .HEADER .textUnderlined.innerBox,
    .--safari.--size-md .HEADER .textUnderlined.innerBox {
      margin-bottom: -1px;
    }
  `;

  return ["header.sect", html, css];
};
