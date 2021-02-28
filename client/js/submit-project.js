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
    description: new ProjectDescription(),

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
      if (this.files.hasMinimum) {
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
      }
      else {
        this.files.addWarning();
      }
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
  const $formField = document.querySelector(".formField.Upload");
  const $inputBox = $formField.querySelector(".inputBox");
  const $input = $inputBox.querySelector("input[type='file']");
  const $count = $formField.querySelector(".selected > .count");

  const instance = {
    selected: {},
    $formField,
    $inputBox,
    $input,
    $count,

    max: $input.dataset.max,
    min: 3, // $input.dataset.min,
    count: 0,

    hasMinimum: false,

    select() {
      const newFiles = [...this.$input.files];

      for (let i = 0; i < newFiles.length; i++) {
        this.saveFileCount();

        if (this.count < this.max) {
          const _file = newFiles[i];
          this.selected[_file.name] = _file;
          this.$inputBox.insertAdjacentElement(
            "AFTERBEGIN", this.insertHtmlItem(_file.name));
        }
        else {
          console.log("Zuviele Files");
          this.addWarning();
          break;
        }
      }

      this.saveFileCount();
      this.updateCount();
    },

    remove(e, filename) {
      e.target.parentElement.parentElement.remove();
      delete this.selected[filename];
      this.saveFileCount();
      this.updateCount();
      this.removeWarning();
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
    },

    saveFileCount() {
      this.count = Object.keys(this.selected).length;
    },

    setState() {
      if (this.count >= this.min)
        this.hasMinimum = true;
      else
        this.hasMinimum = false;
    },

    updateCount() {
      this.$count.innerHTML = this.count;
    },

    addWarning() {
      this.$inputBox.classList.add("--warn");
    },

    removeWarning() {
      this.$inputBox.classList.remove("--warn");
    }
  };

  $input.addEventListener("input", () => instance.select());

  return instance;
};

/* Project Description
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
const ProjectDescription = function() {
  const $formField = document.querySelector(".formField.Text");
  const $inputBox = $formField.querySelector(".inputBox");
  const $textarea = $inputBox.querySelector("textarea");
  const $count = $formField.querySelector(".selected > .count");

  const instance = {
    $formField,
    $inputBox,
    $textarea,
    $count,

    max: $textarea.dataset.max,
    count: 0,

    updateCount() {
      this.count = this.$textarea.value.length;

      if (this.count > this.max) {
        this.count = this.max;
        this.$textarea.value = this.$textarea.value.slice(0, this.max);
      }

      this.$count.innerHTML = this.count;
    }

  };

  $textarea.addEventListener("input", () => instance.updateCount());

  return instance;
};
