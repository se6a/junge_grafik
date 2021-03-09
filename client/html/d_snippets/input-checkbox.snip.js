const Tooltip   = getSnippet("tooltip");
const IconSmall = getSnippet("icon-circle-m");
const e         = getJs("event-handler");

module.exports = (field) => {
  const required = field?.required ? "--required" : "";
  const zindex = field?.zindex ? `style="z-index: ${field.zindex}"` : "";

  const html = splitTemp/*html*/`
    <div
      class="formField Checkbox ${required}"
      ${zindex}
    >
      <div class="inputBox" onclick="setCheckbox(this, event)">

        <span class="checkmark">
          <svg viewBox="0 0 10 10" preserveAspectRatio=""  overflow="visible" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 7 L 2 9 L 8 1" vector-effect="non-scaling-stroke"/>
          </svg>
        </span>

        ${IconSmall({})}

        <input
          class="hiddenInput"
          name="${field?.name}"
          type="checkbox"
          value="false"
          ${e.onchecked(field?.callback)}
          ${required ? "required" : ""}
        >

      </div>

      <label class="label">
        <span>
          ${lang`<span>${field.label}</span>`}
        </span>
      </label>

    </div>
  `;

  const css = /*css*/`
    .Checkbox .hiddenInput {
      bottom: 0;
    }

    .Checkbox.formField {
      display: flex;
      align-items: center;
      margin-bottom: var(--size-XS);
    }

    .Checkbox .inputBox {
      display: flex;
      margin-right: var(--size-S);
      cursor: pointer;
      position: relative;
      align-items: flex-end;
    }

    .Checkbox .icon {
      background-color: white;
    }

    .Checkbox .checkmark {
      display: none;
      position: absolute;
      align-items: center;
      height: 100%;
      left: calc(var(--size-M) * 0.25);
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
