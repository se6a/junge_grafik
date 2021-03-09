const IconPlus = getSnippet("icon-plus");
const Tooltip = getSnippet("tooltip");

module.exports = ({ label, required, tooltip, maxfiles = 1, minfiles = 1, accept }) => {
  required = required ? "--required" : "";
  accept = accept
         ? `accept="${accept}"`
         : "";

  const html = splitTemp/*html*/`
    <div
      class="formField Upload ${required}"
    >

      <header class="header">
        <label class="label">
          ${lang`<span>${label}</span>`}
        </label>
        ${Tooltip(tooltip)}
        <span class="selected">
          <span class="count">0</span>
          <span class="max">/${maxfiles}</span>
        </span>
      </header>

      <div class="inputBox input Upload">

        <label for="ProjectFileUpload" class="upload">
          ${IconPlus()}
          <input
            class="hiddenInput"
            id="ProjectFileUpload"
            type="file"
            name="file"
            data-max=${maxfiles}
            data-min=${minfiles}
            multiple
            ${accept}
            ${required ? "required" : ""}
          />
        </label>

      </div>
    </div>
  `;

  const css = /*css*/`
    .formField.Upload {
      grid-column: 1/3;
    }

    .formField.Upload .selected {
      margin-left: auto;
      display: flex;
    }

    .inputBox.Upload {
      min-height: var(--size-L);
      height: unset;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .inputBox.Upload > * {
      margin: var(--size-S) var(--size-S) var(--size-S) 0;
      display: flex;
    }

    .inputBox > .fileItem {
      font-size: var(--fontSize-M);
      padding-left: var(--size-S);
      display: flex;
      border: var(--borderFull) solid currentColor;
      border-radius: var(--size-L);
      height: var(--size-L);
    }

    .fileItem > .button {
      height: 100%;
      width: var(--size-L);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .fileItem > .button .line {
      transform: rotate(45deg);
      width: 40%;
      position: absolute;
    }

    .fileItem > .button .line:first-child {
      transform: rotate(-45deg);
    }

    .fileItem > .button:hover .line {
      width: 50%;
    }

    .inputBox > .fileItem > p {
      vertical-align: middle;
      display: inline;
    }

    label.upload .icon {
      cursor: pointer;
    }
    label.upload:hover .icon {
      border-width: var(--borderHover);
    }
  `;

  return ["input-upload.snip", html, css];
};
