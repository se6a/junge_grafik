const Tooltip = getSnippet("tooltip");

module.exports = ({ name, label, required, tooltip, maxlength = 500 }) => {
  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Text ${required}">

      <header class="header">
        <label class="label">
          ${lang`<span>${label}</span>`}
        </label>
        ${Tooltip(tooltip)}
        <span class="selected">
          <span class="count">0</span>
          <span class="max">/${maxlength}</span>
        </span>
      </header>

      <div class="inputBox">
        <textarea
          class="input Text"
          name="fields[${name}]"
          data-max=${maxlength}
          ${required ? "required" : ""}
        ></textarea>
      </div>

    </div>
  `;

  const css = /*css*/`
    .formField.Text {
      grid-column: 1/3;
    }

    .formField.Text .selected {
      margin-left: auto;
      display: flex;
    }

    .formField textarea {
      min-height: calc(7 * var(--spacing-M));
      resize: vertical;
    }
  `;

  return ["input-text.snip", html, css];
};
