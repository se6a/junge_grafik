const Tooltip = getSnippet("tooltip");

module.exports = (data) => {
  let {
    name,
    id = makeId(),
    label,
    required,
    tooltip,
    type,
    subType,
    attr = "",
    maxlength = "150"
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

  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField TextShort ${subType} ${required}">

      <header class="header">
        <label class="label" for="${id}">
          ${lang`<span>${label}</span>`}
        </label>
        ${Tooltip(tooltip)}
      </header>

      <div class="inputBox">
        <input
          id="${id}"
          class="input TextShort ${subType}"
          name="fields[${name}]"
          ${type}
          onblur="validate(this)"
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
