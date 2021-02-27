document.addEventListener(
  "DOMContentLoaded",
  () => {
    const path = this.location.pathname;

    if (path.startsWith("/submit")) {
      console.log("ON SUBMIT PAGE");
      window.projectForm = new ProjectForm();
    }
  }
);

/* SUBMIT PROJECT FORM
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Form
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
const ProjectForm = function() {
  const instance = {
    $form: document.getElementById("SubmitProjectForm"),
    files: new ProjectFiles(),

    async submit_direct(e) {
      e.preventDefault();
      const formdata = new FormData();

      formdata.append("action[reprografien]", "submit");
      formdata.append("fields[einreichung]", "6805");
      formdata.append("fields[datei]", projectFiles[Object.keys(projectFiles)[0]]);

      const url = "https://api.jungegrafik.ch/symphony/api/entries/reprografien/?auth-token=02701d93";
      const req = new Request(
                    url,
                    {
                      method: "POST",
                      body: formdata,
                      mode: "no-cors"
                    }
                  );

      fetch(req)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },

    async submit(e) {
      e.preventDefault();
      const formdata = new FormData(this.$form);

      await this.appendFiles(formdata);

      const req = new Request(
                    "http://localhost:3000/api/newproject",
                    {
                      method: "POST",
                      body: formdata,
                      mode: "no-cors"
                    }
                  );

      fetch(req)
        .then((res) => console.log(res));
    },

    appendFiles(formdata) {
      formdata.delete("file");
      for (const _fileName in this.files.selected) {
        formdata.append("files", this.files.selected[_fileName]);
      }
    }
  };

  instance.$form.addEventListener(
    "submit",
    (e) => instance.submit(e)
  );

  return instance;
};

/* Project Files
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
const ProjectFiles = function() {
  const instance = {
    selected: {},
    $inputBox: document.querySelector(".formField.Upload .inputBox"),
    $input: document.querySelector(".formField.Upload input[type='file']"),

    select() {
      console.log("select file", this);
      [...this.$input.files].forEach(
        (_file) => {
          this.selected[_file.name] = _file;
          this.$inputBox.insertAdjacentElement(
            "AFTERBEGIN", this.insertHtmlItem(_file.name));
        }
      );
    },

    remove(e, filename) {
      e.path[2].remove();
      delete this.selected[filename];
    },

    insertHtmlItem(filename) {
      const $item = document.createElement("SPAN");
      $item.setAttribute("class", "fileItem");
      $item.innerHTML = /*html*/`
          <span class="Filename">
            ${filename}
          </span>
          <button class="button unstyled" type="button">
            <span class="line"></span>
            <span class="line"></span>
          </button>
      `;

      $item.addEventListener(
        "click",
        (e) => this.remove(e, filename),
        { once: true }
      );

      return $item;
    }
  };

  instance.$input.addEventListener("input", () => instance.select());

  return instance;
};
