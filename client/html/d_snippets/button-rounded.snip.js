const e = getJs("event-handler");

module.exports = (button) => {
  const html = splitTemp/*html*/`
    <button
      type=${button.type || "submit"}
      class="button RoundedButton"
      ${e.onclick(button.onclick)}
      ${e.onsubmit(button.onsubmit)}
    >
      ${button.label}
    </button>
  `;

  const css = /*css*/`
    .button.RoundedButton {
      width: auto;
      border: var(--borderFull) solid currentColor;
      border-radius: calc(var(--circle-L) / 2);
      height: var(--circle-L);
      background-color: white;
      padding: var(--spacing-S);
      position: relative;
    }

    .RoundedButton {
      outline: none;
    }
    
    .RoundedButton:hover::after {
      content: "";
      border: var(--borderHover) solid currentColor;
      border-radius: calc(var(--circle-L) / 2);
      position: absolute;
      box-sizing: border-box;
      height: var(--circle-L);
      left: calc(var(--borderFull) * -1);
      right: calc(var(--borderFull) * -1);
    }
    
    .RoundedButton:focus::after {
      content: "";
      border: var(--borderFocus) solid currentColor;
      border-radius: calc(var(--circle-L) / 2);
      position: absolute;
      box-sizing: border-box;
      height: var(--circle-L);
      left: calc(var(--borderFull) * -1);
      right: calc(var(--borderFull) * -1);
    }
  `;

  return ["button-rounded.snip", html, css];
};
