const $dropDownIcon = get$snippet("icon-dropdown");

module.exports = (data) => {
  const required = data?.required ? "--required" : "";
  const html = splitTemp/*html*/`
    <div class="formField select ${required}">
      <label class="label">
        ${data?.label}
      </label>
      <div class="inputBox">
        <input class="input select" type="text" placeholder="select one" value="" readonly="readonly">
        ${$dropDownIcon()}
      </div>
      <ul class="select options" role="listbox">
        <li class="option" role="option">Option 1</li>
        <li class="option" role="option">Option 2</li>
        <li class="option" role="option">Option 3</li>
        <li class="option" role="option">Option 4</li>
      </ul>
    </div>
  `;

  const css = /*css*/`
    .formField.select {
      position: relative;
    }

    .input.select,
    .select.options {
      cursor: pointer;
    }

    .select.options {
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

    .select > .option {
      width: 100%;
      padding: var(--spacing-S);
      height: var(--spacing-L);
    }

    .select > .option:hover {
      background-color: var(--gray);
    }

    .select:hover .options {
      display: flex;
    }
  `;

  return ["input-select.snip", html, css];
};
