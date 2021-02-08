const $iconTooltip = get$snippet("icon-tooltip");

module.exports = (data) => {
  const id    = data?.id || Math.round(Math.random() * 10000);
  const type  = data?.type || "Text";
  const required = data?.required ? "--required" : "";
  const input = (type === "textarea")
                ? /*html*/`
                    <textarea id="${id}" class="input Text" name="fields[${data?.name}]">
                    </textarea>
                  `
                : /*html*/`
                    <input id="${id}" class="input Text" type="text" name="fields[${data?.name}]"/>
                  `;
  const $toolTip = data?.tooltip ? $iconTooltip(data.tooltip) : "";

  const html = splitTemp/*html*/`
    <div class="formField Text ${required}">
      <label class="label" for="${id}">
        ${data.label}
        ${$toolTip}
      </label>
      <div class="inputBox">
        ${input}
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
