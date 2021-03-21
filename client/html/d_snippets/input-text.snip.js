const Tooltip = getSnippet("tooltip");

module.exports = ({
  id = makeId(),
  name,
  label,
  required,
  tooltip,
  minlength = 1,
  maxlength = 500
}) => {
  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Text ${required}" onclick="instanciateTextInput(this)">

      <header class="header">
        <label class="label" for="${id}">
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
          id="${id}"
          class="input Text textarea"
          name="fields[${name}]"
          minlength="${minlength}"
          maxlength="${maxlength}"
          onblur="validate(this)"
          onpaste="validate(this)"
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
