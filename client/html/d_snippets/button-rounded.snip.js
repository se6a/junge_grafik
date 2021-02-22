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
      border: 2px solid black;
      border-radius: calc(var(--circle-L) / 2);
      height: var(--circle-L);
      background-color: white;
      padding: var(--spacing-S);
    }
  `;

  return ["button-rounded.snip", html, css];
};
