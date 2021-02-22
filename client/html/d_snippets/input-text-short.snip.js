const Tooltip = getSnippet("tooltip");

module.exports = (field) => {
  const required = field?.required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Text ${required}">

      <header class="header">
        <label class="label">
          ${field?.label.de}
        </label>
        ${Tooltip(field)}
      </header>

      <div class="inputBox">
        <input
          class="input Text"
          type="text"
          name="fields[${field?.name}]"
          ${required ? "required" : ""}
        />
      </div>

    </div>
  `;

  const css = /*css*/`
    .formField textarea {
      min-height: calc(5 * var(--spacing-M));
      resize: vertical;
    }
  `;

  return ["input-text.snip", html, css];
};
