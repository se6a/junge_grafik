const BareButton = getSnippet("button-bare");

module.exports = (button) => {
  const label = button.label instanceof Object
              ? lang`${button.label}`
              : button.label;
  button.label = `<label class="label">${label}</label>`;

  const html = ["", BareButton(button), ""];

  const css = /*css*/`
  `;

  return ["button.snip", html, css];
};
