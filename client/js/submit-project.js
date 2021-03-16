document.addEventListener(
  "DOMContentLoaded",
  () => {
    const path = this.location.pathname;

    if (path.startsWith("/submit")) {
      preselectLanguage("ProjectRegistrationLang");
      window.projectForm = new ProjectForm();
    }
  }
);

function preselectLanguage(formId) {
  const lang = document.body.getAttribute("class").match(/--(fr|de|it)\s/)[1];
  const $field = document.querySelector(`#${formId} .Language .Select.inputBox.outer`);
  const $option = $field.querySelector(`.option[data-id="${lang}"]`);
  selectOption($field, $option);
}

function setFormLanguage(e) {
  e.preventDefault();
  const $langForm = e.target;
  const $langInput = $langForm.querySelector('input[name="fields[language]"');
  const lang = $langInput.value;

  if (! lang) {
    $langInput.classList.add("--warn");
  }

  else {
    const $ViewSubmit = document.querySelector(".VIEW.Submit");

    $ViewSubmit.lang = lang;
    $ViewSubmit.classList.add(`--${lang}`);
    $langInput.classList.remove("--warn");
  }

  console.log($langInput.value);
}

/* SUBMIT PROJECT FORM
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Form
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
const ProjectForm = function() {
  const instance = {
    $form: document.getElementById("SubmitProjectForm"),
    files: new ProjectFiles(),
    description: new ProjectDescription(),

    async submit(e) {
      e.preventDefault();

      if (this.files.hasMinimum) {
        this.feedbackSending();

        const formdata = new FormData(this.$form);

        await this.appendFiles(formdata);
        this.appendLanguage(formdata);
        this.formatLinks(formdata);
        formdata.append("field[einreichedatum]", Date.now());
        formdata.append("action[einreichung]", "submit");

        postRequest("newproject", formdata)

        .then((res) => {
          if (res.status === 200) {
            this.reset();
            this.feedbackSuccess();
          }
          else {
            this.feedbackError();
          }
        })

        .catch(() => {
          this.feedbackError();
        });
      }
      else {
        this.files.addWarning_notEnoughFiles();
      }
    },

    formatLinks(formdata) {
      const pattern = /(^https?:\/\/)?(www\.)?([\w.]+)(\.\w+)(\/[\w\d/-_]*)?/;

      [...formdata].forEach((_field) => {
        const _name = _field[0];
        const _value = _field[1];

        if (_name.startsWith("fields[link") && _value) {
          const _newLink = (pattern.exec(_value))
                            .filter((item, i) => i > 0)
                            .map((item, i) => i === 0 && !item ? "http://" : item)
                            .filter((item) => item)
                            .join("");

          formdata.set(_name, _newLink);
        }
      });
    },

    appendFiles(formdata) {
      formdata.delete("file");
      for (const _fileName in this.files.selected) {
        formdata.append("files", this.files.selected[_fileName]);
      }
    },

    appendLanguage(formdata) {
      const lang = document.querySelector(".VIEW.Submit").lang;

      let langId = 0;

      switch (lang) {
        case "it":
          langId = 698;
          break;
        case "fr":
          langId = 699;
          break;
        case "de":
        default:
          langId = 697;
          break;
      }

      formdata.append("fields[sprache]", langId);
    },

    feedbackSending() {
      this.$form.dataset.state = "sending";
    },

    feedbackError() {
      this.$form.dataset.state = "error";
    },

    feedbackSuccess() {
      window.location.href = `${HOST}/submission-completed`;
    },

    reset() {
      this.$form.reset();
      this.$form.dataset.state = "initial";
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
    $formField,
    $inputBox,
    $input,
    $count,

    selected: {},
    accept: ($input.getAttribute("accept") || "")
            .split(",")
            .map((_acc) => _acc.trim())
            .filter((_acc) => _acc !== ""),
    max: $input.dataset.max,
    min: $input.dataset.min,
    count: 0,
    hasMinimum: false,

    select() {
      this.removeWarning_tooManySelected();

      const newFiles = [...this.$input.files];

      for (let i = 0; i < newFiles.length; i++) {
        this.saveFileCount();

        if (this.count < this.max) {
          const _file = newFiles[i];
          const _filename = _file.name;
          const [_type, _subtype] = _file.type.split("/");

          if (! this.selected[_filename]) {
            if (this.accept.length === 0
            || this.accept.includes(`${_type}/*`)
            || this.accept.includes(`${_type}/${_subtype}`)
            || this.accept.includes(`.${_subtype}`)
            ) {
              this.selected[_filename] = _file;
              this.$inputBox.insertAdjacentElement(
                "AFTERBEGIN", this.insertHtmlItem(_file.name, i));
            }
          }
        }
        else {
          this.addWarning_tooManySelected();
          break;
        }
      }

      this.saveFileCount();
      this.updateCount();
      this.setState();
    },

    remove(e, filename, id) {
      document.getElementById(id).remove();

      delete this.selected[filename];
      this.saveFileCount();
      this.updateCount();
      this.removeWarning_tooManySelected();
      this.setState();
    },

    insertHtmlItem(filename, i) {
      const id = makeId(i);
      const $item = document.createElement("DIV");

      $item.setAttribute("id", id);
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
        (e) => this.remove(e, filename, id),
        { once: true }
      );

      return $item;
    },

    saveFileCount() {
      this.count = Object.keys(this.selected).length;
    },

    setState() {
      if (this.count >= this.min) {
        this.hasMinimum = true;
        this.removeWarning_notEnoughFiles();
      }
      else {
        this.hasMinimum = false;
      }
    },

    updateCount() {
      this.$count.innerHTML = this.count;
    },

    addWarning_notEnoughFiles() {
      this.$inputBox.classList.add("--warn", "--notEnoughFiles");
    },

    removeWarning_notEnoughFiles() {
      this.$inputBox.classList.remove("--warn", "--notEnoughFiles");
    },

    addWarning_tooManySelected() {
      this.$inputBox.classList.add("--tooManySelected");
    },

    removeWarning_tooManySelected() {
      this.$inputBox.classList.remove("--tooManySelected");
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
