const $dropDownIcon = get$snippet("icon-dropdown");

module.exports = (data) => {
  const required = data?.required ? "--required" : "";
  const html = splitTemp/*html*/`
    <div class="formField Select ${required}" onclick="selectOption(this, event)">
      <label class="label">
        ${data?.label}
      </label>
      <div class="inputBox">
        <input
          class="input Select"
          type="text"
          placeholder="Select one"
          value=""
          name="${data?.label}"
          readonly="readonly"
        >
        ${$dropDownIcon()}
      </div>
      <ul class="Select options" role="listbox">
        <li class="option" role="option" data-value="Option 1">Option 1</li>
        <li class="option" role="option" data-value="Option 2">Option 2</li>
        <li class="option" role="option" data-value="Option 3">Option 3</li>
        <li class="option" role="option" data-value="Option 4">Option 4</li>
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
