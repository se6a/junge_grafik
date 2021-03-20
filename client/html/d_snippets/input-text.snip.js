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
          class="input Text textarea"
          name="fields[${name}]"
          data-max=${maxlength}
          onblur="validate(this)"
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

    .formField.Text .textarea {
      min-height: calc(7 * var(--size-M));
      resize: vertical;
      padding-top: var(--size-S);
      padding-bottom: var(--size-S);
    }

    .--size-md .formField.Text .textarea,
    .--size-sm .formField.Text .textarea {
      min-height: calc(7 * var(--size-L));
    }
  `;

  return ["input-text.snip", html, css];
};
