const Form          = getJs("form");
const InputCheckbox = getSnippet("input-checkbox");
const RoundedButton = getSnippet("button-rounded");
const Underlined = getSnippet("text-underlined");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <h1>${Underlined("Personenangaben")}</h1>

    <form
      id="DesignerForm"
      action="javascript:"
      onsubmit="submitProjectData_direct(event, this)"
    >
      ${Form.create("new-designer")}
    </form>

    <h1>${Underlined("Projekt")}</h1>

    <form
      id="ProjectForm"
      action="javascript:"
      onsubmit="submitProjectData_direct(event, this)"
    >
      ${Form.create("new-project")}

      <fieldset class="group ProjectWebsite">
        ${InputCheckbox({
          label: "Ich habe alle Felder überprüft.",
          required: true
        })}
      </fieldset>

      <fieldset class="group">
        <div class="formField">
          ${RoundedButton({
            label: "Projekt abschicken \u2192"
          })}
        </div>
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

      async function submitProjectData_direct(e, $form) {
        e.preventDefault();
       
        const formdata = new FormData();
        console.log("HERE", projectFiles);

        formdata.append("action[reprografien]", "submit");
        formdata.append("fields[einreichung]", "6805");
        formdata.append("fields[datei]", projectFiles[Object.keys(projectFiles)[0]]);

        console.log("OTHER DATA", [...formdata]);


        const url = ENV.host + "/" + ENV.projectUpload;

        const req = new Request(
                      "https://api.jungegrafik.ch/symphony/api/entries/reprografien/?auth-token=02701d93",
                      {
                        method: "POST",
                        body: formdata,
                        mode: "no-cors"
                      }
                    );

        fetch(req)
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }

      async function submitProjectData(e, $form) {
        e.preventDefault();
       
        const formdata = new FormData($form);
       
        console.log([...formdata]);

        await formAppendFiles(formdata);

        formdata.append("action[einreichung]", "submit");
        formdata.append("fields[projekttitel]", "5000");

        console.log("URL", ENV.host + "/" + ENV.projectUpload);

        const req = new Request(
                      ENV.host + "/" + ENV.projectUpload,
                      {
                        method: "POST",
                        body: formdata,
                        mode: "no-cors"
                      }
                    );

        fetch(req)
          .then((res) => console.log(res));
      }

      function formAppendFiles(formdata) {
        formdata.delete("file");
        for (const _fileName in projectFiles) {
          console.log("FILE", projectFiles[_fileName]);
          formdata.append("files", projectFiles[_fileName]);
        }
      }

      function selectOption($field, e) {
        if (e.target.classList.contains("option")) {
          const $input      = $field.querySelector("input");
          const $lastOption = $field.querySelector("li.option.--selected");
          const $option     = e.target;

          $input.value      = $option.innerHTML;

          if ($lastOption) {
            $lastOption.classList.remove("--selected");
          }

          $option.classList.add("--selected");
        }
      }
      </script> 
  `;

  const css = /*css*/`
    .Tooltip > p.content {
      width: calc(100vw - 17px - 4px);
      border-left: none;
      border-right: none;
      min-height: var(--spacing-XL);
      left: calc( -1 * var(--spacing-M));
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
