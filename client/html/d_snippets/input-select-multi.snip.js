const DropDownIcon = getSnippet("icon-dropdown");
const Tooltip = getSnippet("tooltip");
const CircleButton = getSnippet("button-circle");

function SelectOptions(options = []) {
  const done = options.reduce((all, _option) => {
    all.push(
      ...splitTemp/*html*/ `
          <li class="option" role="option" data-id="${_option.id}">
            ${lang`<span>${_option}</span>`}
          </li>
        `
    );
    return all;
  }, []);

  return ["SelectOptions.fn", done, ""];
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

  const html = splitTemp/*html*/ `
    <div class="formField SelectMulti ${required}" ${zindex}>
      <div class="header">
        <label class="label" for="${id}">
          ${lang`<span>${label}</span>`}
        </label>
        ${Tooltip(tooltip)}
      </div>

      <div class="SelectMulti inputBox outer">
        <div
          class="SelectMulti inputBox inner"
          onclick="handleMultiSelectEvent(this, event.target)"
          tabindex="0"
          data-is-open="0"
          data-placeholder="${placeholder}"
        >
          <span class="input SelectMulti">
          </span>

          <input
            id="${id}"
            class="SelectMulti hiddenInput"
            type="text"
            data-value="[]"
            tabindex="-1"
            multiple="multiple"
            ${required ? 'required="required"' : ""}
          />

          ${CircleButton({
            id: "",
            classes: "SelectDropDown",
            icon: DropDownIcon(),
          })}

          <ul
            class="SelectMulti options"
            role="listbox"
          >
            ${SelectOptions(options)}
          </ul>

        </div>
      </div>

    </div>
  `;

  const css = /*css*/ `
    .formField.SelectMulti {
      position: relative;
      z-index: 100;
      width: 100%;
    }

    .formField.SelectMulti .inputBox.outer {
      min-height: var(--fieldSize-M);
    }

    .formField.SelectMulti .inputBox.inner {
      position: relative;
      width: 100%;
      background-color: var(--white);
      display: block;
    }

    .formField.SelectMulti .button.SelectDropDown {
      position: absolute;
      right: var(--size-XS);
      top: calc((var(--fieldSize-M) - var(--iconSize-M)) / 2);
    }

    .formField.SelectMulti .icon.Dropdown {
      pointer-events: none;
    }

    .SelectMulti.input {
      align-items: center;
      cursor: pointer;
      background-color: var(--white);
      border-color: var(--colorKey);
      display: flex;
      flex-wrap: wrap;
      gap: var(--size-XS);
      padding: var(--size-XS);
      padding-right: calc(var(--size-XS) + var(--iconSize-M))
    }

    .SelectMulti.options {
      cursor: pointer;
      display: none;
      border: var(--borderFull) solid var(--colorKey);
      border-top: 0;
      max-height: 40vh;
      min-height: 10vh;
      overflow-y: auto;
      position: absolute;
      width: 100%;
    }

    .SelectMulti > .option {
      padding: 0 var(--size-S);
      height: var(--fieldSize-M);
      display: flex;
      align-items: center;
    }

    .SelectMulti > .option > * {
      pointer-events: none;
    }

    .SelectMulti .icon {
      transition: transform 100ms ease;
    }

    .SelectMulti > .option:hover {
      background-color: var(--violetBright);
    }

    .SelectMulti > .option.--selected {
      display: none;
    }

    // .SelectMulti.inputBox.inner:focus-within .options {
    //   display: block;
    //   background-color: var(--colorKey);
    //   color: var(--white);
    //   border: 2px solid var(--colorKey);
    //   border-top: unset;
    // }

    .SelectMulti.inputBox.inner[data-is-open="1"] .options {
      display: block;
      background-color: var(--colorKey);
      color: var(--white);
      border: 2px solid var(--colorKey);
      border-top: unset;
    }

    .SelectMulti.inputBox.inner[data-is-open="1"] .icon.Dropdown {
      transform: rotate(180deg);
    }

    input.SelectMulti {
      outline: none;
      pointer-events: none;
    }

    .input.SelectMulti > .selectedItem {
      font-size: var(--fontSize-M);
      display: flex;
      align-items: center;
      border: var(--borderFull) solid currentColor;
      border-radius: var(--size-M);
      height: var(--size-M);
      padding-left: var(--size-S);
      transition: color 200ms ease, background-color 200ms ease;
      max-width: calc(100% - var(--size-S));
    }

    .selectedItem * {
      pointer-events: none;
    }

    .selectedItem > .Name {
      white-space: nowrap;
      overflow: hidden;
    }

    .selectedItem > .button {
      height: var(--size-M);
      width: var(--size-M);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 100ms;
    }

    .selectedItem .icon.Close {
      height: inherit;
      width: inherit;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: width 100ms, height 100ms;
    }

    .selectedItem .icon.Close > .line {
      transform: rotate(45deg);
      width: 40%;
      position: absolute;
    }

    .selectedItem .icon.Close > .line:first-child {
      transform: rotate(-45deg);
    }

    .inputBox > .selectedItem > p {
      vertical-align: middle;
      display: inline;
    }

    .selectedItem:hover {
      background-color: var(--colorKey);
    }

    .selectedItem:hover > * {
      color: var(--white);
    }

    .selectedItem .button:focus {
      outline: 0;
    }

    .selectedItem .button:hover > .icon.Close {
      width: 120%;
      height: 120%;
    }

    .selectedItem .button:focus > .icon.Close {
      width: 150%;
      height: 150%;
    }
  `;

  return ["input-select.snip", html, css];
};
