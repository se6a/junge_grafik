function selectOption($field, $option) {
  if ($option.classList.contains("option")) {
    const $input      = $field.querySelector("input");
    const $display    = $field.querySelector(".input.Select");
    const $lastOption = $field.querySelector("li.option.--selected");
    const optionId    = $option.dataset.id;

    optionId !== ""
      ? $display.innerHTML = $option.innerHTML
      : $display.innerHTML = `<span class="placeholder">
                                ${$field.dataset.placeholder}
                              </span>`;

    $input.value = optionId;

    if ($lastOption) {
      $lastOption.classList.remove("--selected");
    }

    $option.classList.add("--selected");
    $field.blur();
  }
}

function setCheckbox($inputBox) {
  const $checkbox    = $inputBox.parentElement;
  const $hiddenInput = $checkbox.querySelector("input");
  const $representativeInput = $checkbox.querySelector(".input");

  $hiddenInput.value = (`${$hiddenInput.value}` === "false");

  if ($hiddenInput.value === "true") {
    $representativeInput.classList.add("--checked");
    $hiddenInput.setAttribute("checked", "true");

    if ($representativeInput.classList.contains("--invalid")) {
      $representativeInput.classList.remove("--invalid");
    }
  }
  else {
    $representativeInput.classList.remove("--checked");
    $hiddenInput.removeAttribute("checked", "false");
  }
}

function blurField(e) {
  e.target.blur();
}

function toggleTooltip($tip) {
  if ($tip.classList.contains("--open"))
    closeTooltip($tip);
  else
    openTooltip($tip);
}

function openTooltip($tip) {
  const $content = $tip.querySelector(".content");
  const offsetLeft = $content.getBoundingClientRect().left;

  $tip.classList.add("--open");

  $content.style.left = offsetLeft * -1 + "px";
  $content.style.width = document.documentElement.clientWidth + "px";

  window.addEventListener(
    "resize",
    () => closeTooltip($tip),
    { once: true }
  );
}

function closeTooltip($tip) {
  const $content = $tip.querySelector(".content");

  $content.style.left = "";
  $tip.classList.remove("--open");
  $tip.blur();
}

function validate($input) {
  const isValid = $input.checkValidity();

  if (! isValid) {
    $input.classList.add("--invalid");
    liveValidation($input);
  }

  else
  if ($input.classList.contains("--invalid")) {
    $input.classList.remove("--invalid");
  }
}

function liveValidation($input) {
  $input.addEventListener(
    "input",
    () => validate($input),
    { once: true }
  );
}

function validateSelection($inputBox) {
  const $input = $inputBox.querySelector(".Select.input");
  const $hiddenInput = $inputBox.querySelector(".Select.hiddenInput");
  const isValid = $hiddenInput.checkValidity();

  if (! isValid) {
    $input.classList.add("--invalid");
  }

  else
  if ($input.classList.contains("--invalid")) {
    $input.classList.remove("--invalid");
  }
}

function generalValidation($field) {
  const $representativeInput = $field.querySelector(".input");
  const $hiddenInput = $field.querySelector(".hiddenInput");
  let isValid = false;
  let returnValue = null;

  if ($hiddenInput) {
    isValid = $hiddenInput.checkValidity();
  }

  else {
    isValid = $representativeInput.checkValidity();
  }

  if (! isValid) {
    $representativeInput.classList.add("--invalid");

    returnValue = new Promise((resolve) => {
      const Observer = new MutationObserver((e) => {
        if (! e[0].target.classList.contains("--invalid")) {
          resolve();
        }
      });

      Observer.observe(
        $representativeInput,
        { attributes: true }
      );
    });
  }

  return returnValue;
}

function validateForm($submitButton, e) {
  const $form = $submitButton.form;

  const $fields = $form.querySelectorAll(".formField.--required");

  const invalides = [...$fields].map((_$field) => generalValidation(_$field))
                     .filter((_valid) => _valid !== null);

  if (invalides.length) {
    if (e) {
      e.preventDefault();
    }

    $form.classList.add("--invalid");
    Promise.allSettled(invalides)
    .then(() => {
      validateForm($submitButton, null);
    });
  }

  else
  if ($form.classList.contains("--invalid")) {
    $form.classList.remove("--invalid");
  }
}

/* File Input
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
const fileInputs = {};

function instanciateFileInput($formField) {
  const fileInput = new FileInput($formField);
  $formField.onclick = null;
  fileInputs[fileInput.id] = fileInput;
}

const FileInput = function($formField) {
  const $inputBox = $formField.querySelector(".inputBox");
  const $input = $inputBox.querySelector("input[type='file']");
  const $count = $formField.querySelector(".selected > .count");

  const instance = {
    $formField,
    $inputBox,
    $input,
    $count,

    id: $input.id,

    selected: {},
    accept: ($input.getAttribute("accept") || "")
            .split(",")
            .map((_acc) => _acc.trim())
            .filter((_acc) => _acc !== ""),
    maxFiles: $input.dataset.maxfiles,
    minFiles: $input.dataset.minfiles,
    maxUploadSize: parseInt($input.dataset.maxuploadsize) * 1048576,
    count: 0,
    uploadSize: 0,
    hasMinimum: false,

    select() {
      this.removeWarning_tooManySelected();
      this.removeWarning_uploadSizeExceeded();

      const newFiles = [...this.$input.files];
      let uploadSize = this.uploadSize;
      let fileCount = this.count;

      for (let i = 0; i < newFiles.length; i++) {
        fileCount++;

        if (fileCount > this.maxFiles) {
          this.addWarning_tooManySelected();
          break;
        }

        const _file = newFiles[i];
        uploadSize += _file.size;

        if (uploadSize > this.maxUploadSize) {
          this.addWarning_uploadSizeExceeded();
          break;
        }

        else {
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
      }

      this.saveFileCount();
      this.updateUploadSize();
      this.setState();
    },

    remove(e, filename, id) {
      document.getElementById(id).remove();

      delete this.selected[filename];
      this.saveFileCount();
      this.updateUploadSize();
      this.removeWarning_tooManySelected();
      this.removeWarning_uploadSizeExceeded();
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
      let count = 0;
      let uploadSize = 0;

      for (const _file in this.selected) {
        uploadSize += this.selected[_file].size;
        count++;
      }

      this.count = count;
      this.uploadSize = uploadSize;
    },

    setState() {
      if (this.count >= this.minFiles) {
        this.hasMinimum = true;
        this.removeWarning_notEnoughFiles();
        this.$input.setCustomValidity("");
      }
      else {
        this.hasMinimum = false;
        this.$input.setCustomValidity(false);
      }
    },

    updateUploadSize() {
      this.$count.innerHTML = Math.ceil(this.uploadSize / 1048576);
    },

    addWarning_notEnoughFiles() {
      this.$inputBox.classList.add("--invalid", "--notEnoughFiles");
    },

    removeWarning_notEnoughFiles() {
      this.$inputBox.classList.remove("--invalid", "--notEnoughFiles");
    },

    addWarning_tooManySelected() {
      this.$inputBox.classList.add("--tooManySelected");
    },

    removeWarning_tooManySelected() {
      this.$inputBox.classList.remove("--tooManySelected");
    },

    addWarning_uploadSizeExceeded() {
      this.$inputBox.classList.add("--uploadSizeExceeded");
    },

    removeWarning_uploadSizeExceeded() {
      this.$inputBox.classList.remove("--uploadSizeExceeded");
    }
  };

  $input.removeAttribute("required");
  $input.setCustomValidity(false);
  $input.addEventListener("input", () => instance.select());

  return instance;
};

/* TextInput
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
const textInputs = {};

function instanciateTextInput($formField) {
  const textInput = new TextInput($formField);
  textInputs[textInput.id] = textInput;
}

const TextInput = function($formField) {
  const $inputBox = $formField.querySelector(".inputBox");
  const $textarea = $inputBox.querySelector("textarea");
  const $count = $formField.querySelector(".selected > .count");

  const instance = {
    $formField,
    $inputBox,
    $textarea,
    $count,

    id: $textarea.id,
    max: $textarea.maxlength,
    min: $textarea.minlength,
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
