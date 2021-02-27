const DropDownIcon = getSnippet("icon-dropdown");
const Tooltip = getSnippet("tooltip");

function SelectOptions(options = []) {
  return options.reduce(
    (list, _option) => list + /*html*/`
      <li class="option" role="option" data-id="${_option.id}">
        ${_option.de}
      </li>
      `,
      ""
    );
}

module.exports = ({ name, label, required, zindex, options, tooltip, placeholder }) => {
  zindex = zindex ? `style="z-index: ${zindex}"` : "";
  required = required ? "--required" : "";
  placeholder = placeholder?.de
                  ? placeholder.de
                  : "select one";

  const html = splitTemp/*html*/`
    <div class="formField Select ${required}" ${zindex}>
      <div class="header">
        <label class="label">
          ${label?.de}
        </label>
        ${Tooltip(tooltip)}
      </div>

      <div class="inputBox outer">
        <div
          class="inputBox inner"
          onclick="selectOption(this, event)"
          onmouseleave="blurField(event)"
          tabindex="0"
          data-placeholder="${placeholder}"
        >

          <input
            class="Select hiddenInput"
            type="text"
            value=""
            name="fields[${name}]"
            readonly="readonly"
            tabindex="-1"
            ${required ? "required=required" : ""}
          />

          <span class="input Select">
            <span class="placeholder">${placeholder}</span>
          </span>

          ${DropDownIcon()}

          <ul
            class="Select options"
            role="listbox"
          >
            ${SelectOptions(options)}
            ${
              required
                ? ""
                : /* html */`
                  <li class="option" role="option" data-id="">
                    Keines
                  </li>   
                `
            }
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

    .formField.Select * {
      cursor: pointer;
    }

    .formField.Select .inputBox.outer {
      height: var(--spacing-L);
    }

    .formField.Select .inputBox.inner {
      position: absolute;
      width: 100%;
      background-color: white;
      min-height: 100%;
      display: block;
    }

    .formField.Select .icon.Dropdown {
      position: absolute;
      right: var(--spacing-S);
      top: var(--spacing-S);
      pointer-events: none;
    }

    .Select.options {
      display: none;
      border: var(--borderFull) solid currentColor;
      border-top: 0;
    }

    .Select > .option {
      padding: var(--spacing-S);
      height: var(--spacing-L);
    }

    .Select > .option:hover,
    .Select .option.--selected {
      background-color: var(--gray);
    }

    .Select.input {
      outline: none;
      pointer-events: none;
    }

    .Select .inputBox.inner:focus-within {
      outline: calc(var(--borderFocus) - var(--borderFull))
               solid
               currentColor;
    }

    .inputBox.inner:focus-within .options {
      display: block;
    }
  `;

  return ["input-select.snip", html, css];
};
