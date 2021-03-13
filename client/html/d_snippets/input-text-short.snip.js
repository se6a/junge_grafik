const Tooltip = getSnippet("tooltip");

module.exports = (data) => {
  let {
    name,
    id = "",
    label,
    required,
    tooltip,
    type,
    subType,
    attr = "",
    maxlength = "40"
  } = data;

  type = type
       ? `type="${type}"`
       : `type="text"`;

  subType = subType
          ? subType[0].toUpperCase() + subType.slice(1)
          : "";

  maxlength = maxlength
            ? `maxlength="${maxlength}"`
            : "";

  id = id ? `id="${id}"` : "";

  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField TextShort ${subType} ${required}">

      <header class="header">
        <label class="label">
          ${lang`<span>${label}</span>`}
        </label>
        ${Tooltip(tooltip)}
      </header>

      <div class="inputBox">
        <input
          ${id}
          class="input TextShort ${subType}"
          name="fields[${name}]"
          ${type}
          ${attr}
          ${maxlength}
          ${required ? "required" : ""}
        />
      </div>

    </div>
  `;

  const css = /*css*/`
    .formField textarea {
      min-height: calc(5 * var(--size-M));
      resize: vertical;
    }
  `;

  return ["input-text-short.snip", html, css];
};
