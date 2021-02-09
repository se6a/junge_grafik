const $iconTooltip = get$snippet("icon-tooltip");

module.exports = (data) => {
  const id    = data?.id || Math.round(Math.random() * 10000);
  const required = data?.required ? "--required" : "";

  const $toolTip = data?.tooltip ? $iconTooltip(data.tooltip) : "";

  const html = splitTemp/*html*/`
    <div class="formField Text ${required}">

      <label class="label" for="${id}">
        ${data.label.de}
        ${$toolTip}
      </label>

      <div class="inputBox">
        <input
          id="${id}"
          class="input Text"
          type="text"
          name="fields[${data?.name}]"
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
