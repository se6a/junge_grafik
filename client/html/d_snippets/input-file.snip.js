const IconPlus = getSnippet("icon-plus");
const Tooltip = getSnippet("tooltip");

module.exports = ({
    id = makeId(),
    label,
    required,
    tooltip,
    maxfiles = 1,
    minfiles = 1,
    maxuploadsize = 50,
    accept,
}) => {
    required = required ? "--required" : "";
    accept = accept ? `accept="${accept}"` : "";

    const html = splitTemp/*html*/ `
    <div
      class="formField Upload ${required}"
      onclick="instanciateFileInput(this)"
    >

      <header class="header">
        <label class="label" for="${id}">
          ${lang`<span>${label}</span>`}
        </label>
        ${Tooltip(tooltip)}
        <span class="selected">
          <span class="count">0</span>
          <span class="max">/${maxuploadsize} mb</span>
        </span>
      </header>

      <div class="inputBox input Upload">

        <label class="Upload button unstyled">
          ${IconPlus()}
          <input
            id="${id}"
            class="hiddenInput"
            type="file"
            name="file"
            data-maxfiles=${maxfiles}
            data-minfiles=${minfiles}
            data-maxuploadsize=${maxuploadsize}
            multiple
            ${required ? "required" : ""}
            ${accept}
          />
        </label>

        <span class="warning tooManySelected">
          ${lang`
            <span>
              ${{
                  de: "Du hast mehr als sechs Dateien für den Upload ausgewählt.</br>Bitte überprüfe, welche Dateien hochgeladen werden.",
                  fr: "Vous avez choisi plus de six éléments pour le transfert.</br>Veuillez sélectionner lesquels doivent être téléchargés.",
                  it: "Hai selezionato un numero di file maggiore di quanti consentiti.</br>Il numero massimo di file è sei.</br>Verifica quali dati sono stati caricati.",
              }}
            </span>
          `}
        </span>

        <span class="warning uploadSizeExceeded">
          ${lang`
            <span>
              ${{
                  de: "Du hast die maximale Datenmenge überschritten.</br>Dabei wurde mindestens ein Bild ignoriert.</br>Bitte überprüfe, welche Dateien hochgeladen werden.",
                  fr: "Vous avez dépassé la taille maximale de 30 mb pour le transfert des données.</br>Au moins une image n’a pas été téléchargée.</br>Veuillez contrôler quels éléments doivent être téléchargés.",
                  it: "Hai superato la quota massima consentita di 30 mb.</br>Uno o più file sono stati ignorati.</br>Verifica quali dati sono stati caricati.",
              }}
            </span>
          `}
        </span>

        <span class="warning tooSmallImage">
          At least one image was ignored, because its resolution does not match the minimum requirement.</br>
          The longer side of each image needs to have 2900 pixel or more.
        </span>

      </div>
    </div>
  `;

    const css = /*css*/ `
    .formField.Upload {
      grid-column: 1/3;
    }

    .formField.Upload .selected {
      margin-left: auto;
      padding-left: var(--size-S);
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
      background-color: var(--green);
      height: var(--size-M);
      padding-left: var(--size-S);
      transition: color 200ms ease, background-color 200ms ease;
      max-width: calc(100% - var(--size-S));
    }

    .fileItem > .Filename {
      white-space: nowrap;
      overflow: hidden;
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

    .warning.tooManySelected,
    .warning.uploadSizeExceeded,
    .warning.tooSmallImage {
      color: var(--violetBright);
      display: none;
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
      width: 100%;
    }

    .Upload.inputBox.--tooManySelected .tooManySelected,
    .Upload.inputBox.--uploadSizeExceeded .uploadSizeExceeded,
    .Upload.inputBox.--tooSmallImage .tooSmallImage {
      display: block;
    }
  `;

    return ["input-upload.snip", html, css];
};
