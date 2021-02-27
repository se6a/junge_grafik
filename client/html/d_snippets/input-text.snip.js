const Tooltip = getSnippet("tooltip");

module.exports = ({ name, label, required, tooltip }) => {
  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Text ${required}">

      <header class="header">
        <label class="label">
          ${label?.de}
        </label>
        ${Tooltip(tooltip)}
      </header>

      <div class="inputBox">
        <textarea
          class="input Text"
          name="fields[${name}]"
          ${required ? "required" : ""}
        >
        </textarea>
      </div>

    </div>
  `;

  const css = /*css*/`
    .formField.Text {
      grid-column: 1/3;
    }

    .formField textarea {
      min-height: calc(7 * var(--spacing-M));
      resize: vertical;
    }
  `;

  return ["input-text.snip", html, css];
};
