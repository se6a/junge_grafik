const Icon = getSnippet("icon-circle-m");
const e = getJs("event-handler");

module.exports = ({
    id = makeId(),
    name,
    label,
    required,
    callback,
    zindex,
}) => {
    required = required ? "--required" : "";
    zindex = zindex ? `style="z-index: ${zindex}"` : "";

    const html = splitTemp/*html*/ `
    <div
      class="formField Checkbox ${required}"
      ${zindex}
    >
      <div class="inputBox" onclick="setCheckbox(this, event)">

        <div class="Checkbox input">
          <span class="checkmark">
            <svg viewBox="0 0 8 10" preserveAspectRatio=""  overflow="visible" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 7 L 2 9 L 8 1" vector-effect="non-scaling-stroke"/>
            </svg>
          </span>

          ${Icon({})}
        </div>

        <input
          id="${id}"
          class="hiddenInput"
          name="${name}"
          type="checkbox"
          value="false"
          ${e.onchecked(callback)}
          ${required ? "required" : ""}
        >

      </div>

      <label class="label" for="${id}">
        <span>
          ${lang`<span>${label}</span>`}
        </span>
      </label>

    </div>
  `;

    const css = /*css*/ `
    .Checkbox .hiddenInput {
      bottom: 0;
    }

    .Checkbox.formField {
      display: flex;
      align-items: flex-start;
      margin-bottom: var(--size-S);
    }

    .Checkbox .inputBox {
      display: flex;
      margin-right: var(--size-S);
      cursor: pointer;
      position: relative;
      align-items: flex-end;
    }

    .Checkbox .input {
      min-height: unset;
      background-color: transparent;
      padding: 0;
      border: 0;
    }

    .Checkbox .icon {
      background-color: white;
    }

    .Checkbox .checkmark {
      display: none;
      position: absolute;
      align-items: center;
      height: 100%;
      left: 0;
      right: 0;
      align-items: center;
      justify-content: center;
    }

    .Checkbox .checkmark svg {
      width: var(--fontSize-M);
      height: var(--fontSize-M);
    }


    .--size-md .Checkbox .checkmark svg,
    .--size-sm .Checkbox .checkmark svg {
      width: var(--fontSize-M);
      height: var(--fontSize-M);
    }

    .Checkbox .checkmark path {
      stroke-width: 2px;
      fill: none;
      stroke: currentColor;
    }

    .Checkbox .icon:hover,
    .Checkbox .icon:focus {
      background-color: var(--colorKey);
    }

    .Checkbox.--checked .checkmark {
      display: flex;
    }

    .Checkbox.--checked .icon {
      background-color: var(--green);
    }
  `;

    return ["input-checkbox.snip", html, css];
};
