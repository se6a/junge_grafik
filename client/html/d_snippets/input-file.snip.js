const IconPlus = getSnippet("icon-plus");
const Tooltip = getSnippet("tooltip");

module.exports = ({ label, required, tooltip, maxFiles = 1, minFiles = 1 }) => {
  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div
      class="formField Upload ${required}"
    >

      <header class="header">
        <label class="label">
          ${label?.de}
        </label>
        ${Tooltip(tooltip)}
        <span class="selected">
          <span class="count">0</span>
          <span class="max">/${maxFiles}</span>
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
            data-max=${maxFiles}
            data-min=${minFiles}
            multiple
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
      min-height: var(--spacing-L);
      height: unset;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .inputBox.Upload > * {
      margin: var(--spacing-S) var(--spacing-S) var(--spacing-S) 0;
      display: flex;
    }

    .inputBox > .fileItem {
      font-size: var(--fontSize-M);
      padding-left: var(--spacing-S);
      display: flex;
      border: var(--borderFull) solid currentColor;
      border-radius: var(--circle-L);
      height: var(--circle-L);
    }

    .fileItem > .button {
      height: 100%;
      width: var(--circle-L);
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
