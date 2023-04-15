const DropDownIcon = getSnippet("icon-dropdown");
const Tooltip = getSnippet("tooltip");

function SelectOptions(options = []) {
    return options.reduce(
        (list, _option) =>
            list +
            /*html*/ `
      <li class="option" role="option" data-id="${_option.id}">
        ${lang`<span>${_option}</span>`}
      </li>
      `,
        ""
    );
}

module.exports = ({
    id = makeId(),
    name,
    label,
    placeholder = "",
    required,
    options = [],
    tooltip,
    zindex,
}) => {
    zindex = zindex ? `style="z-index: ${zindex}"` : "";
    required = required ? "--required" : "";

    const noneOption = required
        ? ""
        : /*html*/ `
                    <li class="option" role="option" data-id="">
                      none
                    </li>
                  `;

    const html = splitTemp/*html*/ `
    <div class="formField Select ${required}" ${zindex}>
      <div class="header">
        <label class="label" for="${id}">
          ${lang`<span>${label}</span>`}
        </label>
        ${Tooltip(tooltip)}
      </div>

      <div class="Select inputBox outer">
        <div
          class="Select inputBox inner"
          onclick="selectOption(this, event.target)"
          onmouseleave="blurField(event)"
          onblur="validateSelection(this)"
          tabindex="0"
          data-placeholder="${placeholder}"
        >
          <span class="input Select">
            <span class="placeholder">
              ${placeholder}
            </span>
          </span>

          <input
            id="${id}"
            class="Select hiddenInput"
            type="text"
            value=""
            name="fields[${name}]"
            tabindex="-1"
            onchange="() => console.log('change')"
            ${required ? 'required="required"' : ""}
          />

          ${DropDownIcon()}

          <ul
            class="Select options"
            role="listbox"
          >
            ${noneOption}
            ${SelectOptions(options)}
          </ul>

        </div>
      </div>

    </div>
  `;

    const css = /*css*/ `
    .formField.Select {
      position: relative;
      z-index: 100;
      width: 100%;
    }

    .formField.Select .inputBox.outer {
      height: var(--fieldSize-M);
    }

    .formField.Select .inputBox.inner {
      position: absolute;
      width: 100%;
      background-color: var(--white);
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
      background-color: var(--white);
      border-color: var(--colorKey);
    }

    .Select.options {
      cursor: pointer;
      display: none;
      border: var(--borderFull) solid var(--colorKey);
      border-top: 0;
      max-height: 40vh;
      overflow-y: auto;
    }

    .Select > .option {
      padding: var(--size-S) var(--size-S);
      display: flex;
      align-items: center;
    }

    .Select > .option > * {
      pointer-events: none;
    }

    .Select .icon {
      transition: transform 100ms ease;
    }

    .Select > .option:hover,
    .Select > .option.--selected {
      background-color: var(--violetBright);
    }

    .Select.inputBox.inner:focus-within .options {
      display: block;
      background-color: var(--colorKey);
      color: var(--white);
    }

    .Select.inputBox.inner:focus-within .icon {
      transform: rotate(180deg);
    }

    input.Select {
      outline: none;
      pointer-events: none;
    }
  `;

    return ["input-select.snip", html, css];
};
