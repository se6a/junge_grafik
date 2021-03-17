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

    .button.CircleButton:hover,
    .button.CircleButton:focus {
      background-color: transparent;
      border: 0;
    }
  `;

  return ["button-circle.snip", html, css];
};
