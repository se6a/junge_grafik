const DropDownIcon = getSnippet("icon-dropdown");
const Tooltip = getSnippet("tooltip");

function SelectOptions(options = []) {
  return options.reduce(
    (list, _option) => list + /*html*/`
      <li class="option" role="option" data-id="${_option.id}">
        ${lang`<span>${_option}</span>`}
      </li>
      `,
      ""
    );
}

module.exports = (data) => {
  const zindex      = data.zindex ? `style="z-index: ${data.zindex}"` : "";
  const required    = data.required ? "--required" : "";
  const placeholder = data.placeholder?.de || "select one";

  const html = splitTemp/*html*/`
    <div class="formField Select ${required}" ${zindex}>
      <div class="header">
        <label class="label">
          ${lang`<span>${data.label}</span>`}
        </label>
        ${Tooltip(data.tooltip)}
      </div>

      <div class="inputBox outer">
        <div
          class="inputBox inner"
          onclick="selectOption(this, event)"
          onmouseleave="blurField(event)"
          tabindex="0"
          data-placeholder="${placeholder}"
        >
          <span class="input Select">
            <span class="placeholder">${placeholder}</span>
          </span>

          <input
            class="Select hiddenInput"
            type="text"
            value=""
            name="fields[${data.name}]"
            tabindex="-1"
            ${required ? 'required="required"' : ""}
          />

          ${DropDownIcon()}

          <ul
            class="Select options"
            role="listbox"
          >
            ${
              required
                ? ""
                : /* html */`
                  <li class="option" role="option" data-id="">
                    none
                  </li>
                `
            }
            ${SelectOptions(data.options)}
          </ul>

        </div>
      </div>

    </div>
  `;

  const css = /*css*/`
    .formField.Select {
      position: relative;
      z-index: 100;
      width: 100%;
    }

    .formField.Select .inputBox.outer {
      height: inherit;
    }

    .formField.Select .inputBox.inner {
      position: absolute;
      width: 100%;
      background-color: white;
      display: block;
    }

    .formField.Select .icon.Dropdown {
      position: absolute;
      right: var(--size-S);
      top: calc((var(--fieldSize-M) - var(--iconSize-M)) / 2);
      pointer-events: none;
    }

    .Select.input {
      align-items: center;
      cursor: pointer;
    }

    .Select.options {
      cursor: pointer;
      display: none;
      border: var(--borderFull) solid currentColor;
      border-top: 0;
      max-height: 40vh;
      overflow-y: auto;
    }

    .Select > .option {
      padding: 0 var(--size-S);
      height: var(--fieldSize-M);
      display: flex;
      align-items: center;
    }

    .Select > .option > * {
      pointer-events: none;
    }

    .Select > .option:hover,
    .Select > .option.--selected {
      background-color: var(--gray);
    }

    .Select .inputBox.inner:focus-within {
      outline: calc(var(--borderFocus) - var(--borderFull))
               solid
               currentColor;
    }

    .inputBox.inner:focus-within .options {
      display: block;
    }

    input.Select {
      outline: none;
      pointer-events: none;
    }
  `;

  return ["input-select.snip", html, css];
};
