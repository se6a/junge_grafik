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
      onclick="instanciateFileInput(this)"
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

        <label for="ProjectFileUpload" class="Upload button unstyled">
          ${IconPlus()}
          <input
            class="hiddenInput"
            id="ProjectFileUpload"
            type="file"
            name="file"
            data-max=${maxfiles}
            data-min=${minfiles}
            multiple
            ${required ? "required" : ""}
            ${accept}
          />
        </label>

        <span class="warning tooManySelected">
          ${lang`
            <span>
              ${{
                de: "Du hast zu viele Bilder ausgewählt.</br>Überprüfe welche Dateien hochgeladen werden."
              }}
            </span>
          `}
        </span>

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
      height: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: var(--size-S) 0 0 var(--size-S);

    }

    .inputBox.Upload > * {
      display: flex;
      margin: 0 var(--size-S) var(--size-S) 0;
    }

    .inputBox > .fileItem {
      font-size: var(--fontSize-M);
      display: flex;
      align-items: center;
      border: var(--borderFull) solid currentColor;
      border-radius: var(--size-M);
      height: var(--size-M);
      padding-left: var(--size-S);
      transition: color 200ms ease, background-color 200ms ease;
    }

    .fileItem > .button {
      height: 100%;
      width: var(--size-M);
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

    .inputBox > .fileItem > p {
      vertical-align: middle;
      display: inline;
    }

    .Upload.button:hover .icon,
    .fileItem:hover {
      background-color: var(--colorKey);
    }

    .Upload.button:hover .symbol,
    .fileItem:hover > * {
      color: var(--white);
    }

    .Upload.button:hover .line {
      width: 50%;
    }

    .warning.tooManySelected {
      color: var(--violet);
      display: none;
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
      width: 100%;
    }

    .Upload.inputBox.--tooManySelected .tooManySelected {
      display: block;
    }
  `;

  return ["input-upload.snip", html, css];
};
