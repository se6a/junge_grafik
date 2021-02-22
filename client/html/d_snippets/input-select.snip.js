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

module.exports = (field) => {
  const required = field?.required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Select ${required}" onclick="selectOption(this, event)">
      <div class="header">
        <label class="label">
          ${field?.label.de}
        </label>
        ${Tooltip(field)}
      </div>

      <div class="inputBox">
        <input
          class="input Select"
          type="text"
          placeholder="Select one"
          value=""
          name="fields[${field?.name}]"
          readonly="readonly"
          ${required ? "required=required" : ""}
        />
        ${DropDownIcon()}
      </div>

      <ul class="Select options" role="listbox">
        ${SelectOptions(field?.options)}
      </ul>

    </div>
  `;

  const css = /*css*/`
    .formField.Select {
      position: relative;
    }

    .formField.Select .icon.Dropdown {
      position: absolute;
      align-self: center;
      right: var(--spacing-S);
    }

    .input.Select,
    .Select.options {
      cursor: pointer;
    }

    .Select.options {
      background-color: white;
      display: none;
      flex-direction: column;
      width: 100%;
      height: inherit;
      position: absolute;
      border: 2px solid black;
      border-top: 0;
      z-index: 100;
      display: none;
    }

    .Select > .option {
      width: 100%;
      padding: var(--spacing-S);
      height: var(--spacing-L);
    }

    .Select > .option:hover,
    .Select .option.--selected {
      background-color: var(--gray);
    }

    .Select:hover .options {
      display: flex;
    }
  `;

  return ["input-select.snip", html, css];
};
