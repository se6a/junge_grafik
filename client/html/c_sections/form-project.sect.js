const $inputText      = get$snippet("input-text");
const $inputTextShort = get$snippet("input-text-short");
const $inputCheckbox  = get$snippet("input-checkbox");
const $inputSelection = get$snippet("input-select");
const $inputFile      = get$snippet("input-file");

const Form = {
  create(name) {
    const formDef = require(`${__basedir}/data/${name}`);
    const $html = [];

    formDef.forEach((_group) => {
      $html.push(this._run_rc(_group));
    });

    return ["formcontent", $html];
  },

  _run_rc(definition) {
      try {
        if (Array.isArray(definition))
          return this._addGroup(definition);
        else
          return this._addField(definition);
      }
      catch (error) {
        console.log("ERROR", error);
        return "ERROR";
      }
  },

  _addField(field) {
    let $field = "";

    switch (field.type) {
      case "text-short":
      case "text-year":
        $field = $inputTextShort(field);
        break;
      case "text":
        $field = $inputText(field);
        break;
      case "select-1":
        $field = $inputSelection(field);
        break;
      case "file":
        $field = $inputFile(field);
        break;
    };

    return ["fieldbox", ["<div class='fieldBox'>", $field, "</div>"]];
  },

  _addGroup(group) {
    const $group = [""];

    group.forEach((_member) => {
      $group.push(this._run_rc(_member), "");
    });

    return ["fieldset", ["<fieldset class='group'>", ...$group, "</fieldset>"]];
  }
};

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <form id="ProjectForm" action="javascript:" onsubmit="submitProjectData(event, this)">
      ${Form.create("new-project")}

      <fieldset class="group ProjectWebsite" style="width: 50%">
        ${$inputCheckbox()}
      </fieldset>

      <fieldset class="group">
        <input type="submit" />
      </fieldset>
    </form>

    <script>
      const projectFiles = {};

      function selectFiles($field, e) {
        const $input    = $field.querySelector("input[type='file']");
        const $inputBox = $field.querySelector(".inputBox");

        [...$input.files].forEach(
          (_file) => {
            projectFiles[_file.name] = _file;
            $inputBox.insertAdjacentHTML(
              "AFTERBEGIN", fileItemHtml(_file.name));
          }
        );

        console.log(projectFiles);
      }

      function fileItemHtml(filename) {
        return ("<span class='fileItem'><p>"
              + filename
              + "</p>"
              + "<button type='button' onclick=\\"removeFile(event, "
              + "'" + filename + "'"
              + ")\\">X</button></span>");
      }

      function removeFile(e, fileName) {
        e.path[1].remove();
        delete projectFiles[fileName];
      }

      async function submitProjectData(e, $form) {
        e.preventDefault();
        const formdata = new FormData($form);
        console.log([...formdata]);

        await formAppendFiles(formdata);

        console.log([...formdata]);
      }

      function formAppendFiles(formdata) {
        formdata.delete("file");
        for (const _fileName in projectFiles) {
          formdata.append(_fileName, projectFiles[_fileName]);
        }
      }

      function selectOption($field, e) {
        if (e.target.classList.contains("option")) {
          const $input      = $field.querySelector("input");
          const $lastOption = $field.querySelector("li.option.--selected");
          const $option     = e.target;

          $input.value      = $option.dataset.value;

          console.log("last", $lastOption);
          if ($lastOption) {
            $lastOption.classList.remove("--selected");
          }

          $option.classList.add("--selected");
        }
      }
    </script> 
  `;

  const css = /*css*/`
    form > .group {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      column-gap: var(--spacing-M);
    }

    .formField {
      flex-grow: 1;
      width: 100%;
      position: relative;
    }

    .inputBox {
      position: relative;
      display: flex;
    }

    .formField .label,
    .formField .input {
      display: flex;
      height: var(--spacing-L);
      font-size: var(--fontSize-M);
      align-items: flex-end;
    }

    .formField .input {
      width: 100%;
      background-color: white;
      border: 2px solid black;
      padding: var(--spacing-S);
    }

    /* form.--checked .--required .input:empty {
      background-color: var(--yellow);
    } */

    .formField .label {
      padding-bottom: var(--spacing-XS);
    }

    .formField.--required .label::after {
      content: "*";
      padding-left: var(--spacing-XS);
    }

    @media screen and (max-width: 1024px) {
      form > .group {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
        margin-bottom: var(--spacing-L);
      }

      form > .group.Upload,
      form > .group.Description {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 750px) {
      form > .group {
        grid-template-columns: 1fr;
      }
    } 
  `;

  return ["form-project.sect", html, css];
};
