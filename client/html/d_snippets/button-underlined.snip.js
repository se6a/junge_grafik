const BareButton = getSnippet("button-bare");
const Underlined = getSnippet("text-underlined");

module.exports = (button) => {
  const label = button.label instanceof Object
              ? lang`${button.label}`
              : button.label;
  button.label = Underlined(label);
  button.classes = button.classes
                 ? button.classes + " UnderlinedButton"
                 : "UnderlinedButton";

  const html = ["", BareButton(button), ""];

  const css = /*css*/`
    .UnderlinedButton {
      display: block;
      height: auto;
      width: 100%;
      border: none;
      font-size: var(--fontSize-XL);
      line-height: var(--lineHeight-XL);
      padding: var(--size-M) 0 0 0;
    }

    .UnderlinedButton .text {
      padding: var(--size-M);
    }

    .UnderlinedButton:hover {
      background-color: var(--white);
      color: var(--colorKey);
    }

    .UnderlinedButton:focus{
      z-index: 10;
    }
  `;

  return ["button-underlined.snip", html, css];
};
