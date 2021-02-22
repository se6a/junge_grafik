const Tooltip   = getSnippet("tooltip");
const IconSmall = getSnippet("icon-circle-s");
const e         = getJs("event-handler");

module.exports = (field) => {
  const required = field?.required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Checkbox ${required}">
      <input
        class="input"
        ${e.onchecked(field?.callback)}
        type="hidden"
        name="${field?.name}"
        value=false
        ${required ? "required" : ""}
      >

      <div class="inputBox" onclick="setCheckbox(this, event)">
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
      stroke: black;
    }

    .Checkbox.--checked .checkmark {
      display: block;
    }

    .Checkbox.--checked .icon {
      background-color: var(--green);
    }
  `;

  return ["input-checkbox.snip", html, css];
};
