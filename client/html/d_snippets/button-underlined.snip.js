const BareButton = getSnippet("button-bare");
const Underlined = getSnippet("text-underlined");

module.exports = (button) => {
  const label = button.label instanceof Object
              ? lang`<span>${button.label}</span>`
              : button.label;
  button.label = Underlined(label);
  button.classes = button.classes
                 ? button.classes + " UnderlinedButton"
                 : "UnderlinedButton";

  const html = ["", BareButton(button), ""];

  const css = /*css*/`
    .button.UnderlinedButton {
      border: none;
      padding: 0;
      display: inline-flex;
      width: auto;
      vertical-align: top;
      margin: calc(1em / 10.5) 0;
    }

    .--S.UnderlinedButton {
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
    }

    .--M.UnderlinedButton {
      font-size: var(--fontSize-M);
      line-height: var(--lineHeight-M);
    }

    .--L.UnderlinedButton {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
    }

    .--XL.UnderlinedButton {
      font-size: var(--fontSize-XL);
      line-height: var(--lineHeight-XL);
    }

    .button.UnderlinedButton .line {
      visibility: hidden;
    }

    .button.UnderlinedButton:hover,
    .button.UnderlinedButton:focus {
      background-color: transparent;
      color: var(--colorKey);
    }

    .button.UnderlinedButton:hover .line,
    .button.UnderlinedButton:focus .line {
      visibility: visible;
    }

  `;

  return ["button-underlined.snip", html, css];
};
