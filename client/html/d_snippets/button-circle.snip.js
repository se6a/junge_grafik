const ButtonBare = require("./button-bare.snip");

const BareButton = getSnippet("button-bare");

module.exports = (button) => {
  button.label = "";
  button.classes = button.classes
                 ? button.classes + " CircleButton"
                 : "CircleButton";

  const html = ["", BareButton(button), ""];

  const css = /*css*/`
    .CircleButton {
      display: flex;
      border: none;
      width: auto;
      height: auto;
      margin-left: auto;
      padding: 0;
    }

    .CircleButton:hover,
    .CircleButton:focus {
      background-color: inherit;
    }

    .CircleButton:hover .icon,
    .CircleButton:focus .icon {
      background-color: var(--colorKey);
      color: var(--white);
      border-color: var(--colorKey);
    }
  `;

  return ["button-circle.snip", html, css];
};
