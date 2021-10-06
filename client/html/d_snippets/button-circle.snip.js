const BareButton = getSnippet("button-bare");

module.exports = (button) => {
  button.label = "";
  button.classes = button.classes
    ? button.classes + " CircleButton"
    : "CircleButton";

  const html = ["", BareButton(button), ""];

  const css = /*css*/ `
    .button.CircleButton {
      display: flex;
      border: none;
      width: auto;
      height: auto;
      margin-left: auto;
      padding: 0;
    }

    .button.CircleButton:hover,
    .button.CircleButton:focus {
      background-color: inherit;
    }

    .button.CircleButton:hover .icon,
    .button.CircleButton:focus .icon {
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
