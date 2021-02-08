module.exports = (data = {}) => {
  const required = data.required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Checkbox">
      <input class="input Checkbox" ${data.attr}${onchange(data.callback)}type="checkbox">
      <span class="checkmark"></span>
    </div>
  `;

  const css = /*css*/`
    .input.Checkbox {
      background-color: var(--white);
      width: var(--circle-S);
      height: var(--circle-S);
      margin: 0.2em 1em 0.2em 0.2em;
      display: block;
      border: 2px solid black;
      border-radius: 50%;
    }

    .input.Checkbox::after {
      content: "";
      width: 0.3em;
      height: 0.5em;
      margin: 0.35em 0 0 0.4em;
      border: solid black;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      transform-origin: top right;
      display: none;
    }

    .input.Checkbox:checked::after {
      display: block;
    }
  `;

  function onchange(callback) {
    return (callback
              ? /*html*/` onchange="this.checked ? ${callback} : null" `
              : ""
            );
  }

  return ["input-checkbox.snip", html, css];
};
