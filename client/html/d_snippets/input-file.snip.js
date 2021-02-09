const $iconPlus = get$snippet("icon-plus");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <div class="formField Upload" oninput="selectFiles(this, event)">
      <label class="label">${data?.label.de}</label>
      <div class="inputBox input Upload">

        <label for="ProjectFileUpload" class="upload">
          ${$iconPlus()}
          <input id="ProjectFileUpload" type="file" name="file" multiple/>
        </label>


      </div>
    </div>
  `;

  const css = /*css*/`


    .inputBox.Upload {
      min-height: var(--spacing-L);
      height: unset;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .inputBox.Upload > * {
      margin: var(--spacing-S) var(--spacing-S) var(--spacing-S) 0;
    }

    .inputBox > .fileItem {
      font-size: var(--fontSize-M);
      padding: 0 var(--spacing-S);
      display: block;
      border: 2px solid currentColor;
      border-radius: var(--circle-M);
      height: var(--circle-M);
    }

    .inputBox > .fileItem > p {
      vertical-align: middle;
      display: inline;
    }

    .Upload input[type="file"] {
      display: none;
    }

    label.upload .icon {
      cursor: pointer;
    }
    label.upload:hover .icon {
      color: var(--gray);
    }
  `;

  return ["input-upload.snip", html, css];
};
