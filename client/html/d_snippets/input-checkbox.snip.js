const Tooltip   = getSnippet("tooltip");
const IconSmall = getSnippet("icon-circle-s");
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
        <input
          class="hiddenInput"
          name="${field?.name}"
          type="checkbox"
          value="false"
          ${e.onchecked(field?.callback)}
          ${required ? "required" : ""}
        >
        <span class="checkmark">
          <svg viewBox="0 0 10 10" preserveAspectRatio=""  overflow="visible" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 8 L 2 10 L 8 2" vector-effect="non-scaling-stroke"/>
          </svg>
        </span>

        ${IconSmall({})}
      </div>

      <label class="label">
        <span>
          ${field?.label}
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
      margin-bottom: var(--spacing-XS);
    }

    .Checkbox .inputBox {
      display: flex;
      margin-right: var(--spacing-S);
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
      left: calc(var(--circle-S) / 4);
    }

    .Checkbox .checkmark svg {
      width: var(--fontSize-S);
      height: var(--fontSize-S);
    }

    .Checkbox .checkmark path {
      stroke-width: 2px;
      fill: none;
      stroke: currentColor;
    }

    .Checkbox.--checked .checkmark {
      display: block;
    }

    .Checkbox.--checked .icon {
      background-color: var(--greenLight);
    }
  `;

  return ["input-checkbox.snip", html, css];
};
