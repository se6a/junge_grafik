const Tooltip = getSnippet("tooltip");

module.exports = ({ name, label, required, tooltip, maxchars = 500 }) => {
  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Text ${required}">

      <header class="header">
        <label class="label">
          ${label?.de}
        </label>
        ${Tooltip(tooltip)}
        <span class="selected">
          <span class="count">0</span>
          <span class="max">/${maxchars}</span>
        </span>
      </header>

      <div class="inputBox">
        <textarea
          class="input Text"
          name="fields[${name}]"
          data-max=${maxchars}
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
