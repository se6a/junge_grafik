const Tooltip = getSnippet("tooltip");

module.exports = ({ name, label, required, tooltip }) => {
  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField TextShort ${required}">

      <header class="header">
        <label class="label">
          ${label?.de}
        </label>
        ${Tooltip(tooltip)}
      </header>

      <div class="inputBox">
        <input
          class="input Text"
          type="text"
          name="fields[${name}]"
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

  return ["input-text-short.snip", html, css];
};
