const $inpuText       = get$snippet("input-text");
const $inputCheckbox  = get$snippet("input-checkbox");
const $inputSelection = get$snippet("input-select");
const $inputFile      = get$snippet("input-file");

module.exports = (data) => {
  const html = splitTemp/*html*/`
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
        const formdata = new FormData();
        formdata.append("fields[projekttitel]", "Hello there");
        formdata.append("action[einreichung]", "submit");
        formdata.append("auth-token", "02701d93");

        console.log([...formdata]);
        upload(formdata);
      }
      /**/

      function upload(formdata) {
        const url = "https://api.jungegrafik.ch/symphony/api/entries/einreichungen";
        const req = new Request(
                      url,
                      {
                        method: "POST",
                        body: formdata,
                        mode: "no-cors"
                      }
                    );

        fetch(req)
        .then((res) => console.log(res));
      }

      async function submitProjectData1(e, $form) {
        e.preventDefault();
        const formdata = new FormData($form);
        console.log([...formdata]);

        await formAppendFiles(formdata);
        formdata.append("action", "einreichung");

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

    <form id="ProjectForm" action="javascript:" onsubmit="submitProjectData(event, this)">
      <!-- Titel und Jahr -->
      <fieldset class="group">
        ${$inpuText({ name: "projekttitel", label: "Projekttitel", tooltip: "Informationen zu diesem Input. Informationen zu diesem Input." })}
        ${$inpuText({ label: "Entstehungsjahr", attr: "pattern='20[0,1,2]\\d'" })}
      </fieldset>
      <!-- Tags -->
      <fieldset class="group">
        ${$inputSelection({ label: "Tag #1", required: true })}
        ${$inputSelection({ label: "Tag #2" })}
        ${$inputSelection({ label: "Tag #3" })}
      </fieldset>
      <!-- Beschreibung -->
      <fieldset class="group Description">
        ${$inpuText({ label: "Projektbeschrieb", type: "textarea" })}
      </fieldset>
      <!-- Ausbildung -->
      <fieldset class="group Education">
        ${$inpuText({ label: "Ausbildungsniveau" })}
        ${$inpuText({ label: "Ausbildungsjahr" })}
      </fieldset>
      <fieldset class="group Institution">
        ${$inpuText({ label: "Name Ausbildungsinstitution/Büro" })}
      </fieldset>
      <!-- Gestalter -->
      <fieldset class="group Designer">
        ${$inpuText({ label: "Weitere Gestalter bei Gruppenarbeiten" })}
      </fieldset>
      <!-- Dozenten -->
      <fieldset class="group Teacher">
        ${$inpuText({ label: "Dozenten" })}
      </fieldset>
      <!-- Websites -->
      <fieldset class="group Website">
        ${$inpuText({ label: "Link Projekt-Website" })}
      </fieldset>
      <!-- Uploads -->
      <fieldset class="group Upload">
        ${$inputFile({ label: "Upload Reprografien" })}
      </fieldset>
      <!-- bestätigung -->
      <fieldset class="group ProjectWebsite" style="width: 50%">
        ${$inputCheckbox()}
      </fieldset>
      <!-- senden -->
      <fieldset class="group">
        <input type="submit" />
      </fieldset>
    </form>
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
