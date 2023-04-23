const Underlined = getSnippet("text-underlined");
const Button = getSnippet("button");

module.exports = () => {
    const $navigation = require("./navigation.sect.js");

    const html = splitTemp/*html*/ `
    <header class="HEADER">

      <a class="logo" href="/home">
        <span>
          ${Underlined(
              `<span class="first">Junge</span><span class="second">Grafik</span>`
          )}
        </span>
        <span>
          ${Underlined(
              `<span class="first">Jeune</span><span class="second">Graphisme</span>`
          )}
        </span>
        <span>
          ${Underlined(
              `<span class="first">Giovane</span><span class="second">Grafica</span>`
          )}
        </span>
      </a>

      ${Button({
          classes: "BigButton",
          type: "link",
          label: "Submit!",
          href: `${ENV.host}/submit`,
      })}

      ${$navigation()}

    </header>
  `;

    const css = /*css*/ `
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
      display: none;
    }

    body.--maybeSafari .HEADER .logo .line {
      margin-top: -1px;
    }

    body:not(.--maybeFirefox) .HEADER .logo > span {
      margin-bottom: -1px;
    }

    .HEADER .logo:focus {
      outline: none;
      background-color: var(--gray);
    }

    .--safari.--size-lg .HEADER .textUnderlined.innerBox,
    .--safari.--size-md .HEADER .textUnderlined.innerBox {
      margin-bottom: -1px;
    }

    .HEADER .button.BigButton {
      background-color: var(--yellow);
      border-width: var(--borderHalf);
      width: calc(var(--headerHeight) * 3);
      justify-content: center;
    }

    .--size-sm .HEADER .button.BigButton {
      display: none;
    }

    .ViewWinners .button.BigButton {
      background-color: var(--darkViolet);
      color: var(--white);
      pointer-events: none;
    }
  `;

    return ["header.sect", html, css];
};
