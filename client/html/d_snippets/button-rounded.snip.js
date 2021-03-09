const BareButton = getSnippet("button-bare");

module.exports = (button) => {
  const label = button.label instanceof Object
              ? lang`<span>${button.label}</span>`
              : button.label;
  button.label = `<label class="label">${label}</label>`;
  button.classes = button.classes
                 ? button.classes + " RoundedButton"
                 : "RoundedButton";

  // lang`<span>${button.label}</span>

  const html = ["", BareButton(button), ""];

  const css = /*css*/`
    .button.RoundedButton {
      width: auto;
      border-radius: calc(var(--buttonSize-M) / 2);
      height: var(--buttonSize-M);
      background-color: white;
    }

    .button.RoundedButton:hover {
      background-color: var(--colorKey);
      color: var(--white);
    }
  `;

  return ["button-rounded.snip", html, css];
};
