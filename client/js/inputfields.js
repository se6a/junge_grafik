function selectOption($field, $option) {
  if ($option.classList.contains("option")) {
    const $input = $field.querySelector("input");
    const $display = $field.querySelector(".input.Select");
    const $lastOption = $field.querySelector("li.option.--selected");
    const optionId = $option.dataset.id;

    optionId !== ""
      ? ($display.innerHTML = $option.innerHTML)
      : ($display.innerHTML = `<span class="placeholder">
                                ${$field.dataset.placeholder}
                              </span>`);

    $input.value = optionId;

    if ($lastOption) {
      $lastOption.classList.remove("--selected");
    }

    $option.classList.add("--selected");
    $field.blur();
  }
}

function handleMultiSelectEvent($field, $target) {
  // When clicking on selectedItem's (to delete them), do not open Dropdown:
  if ($target.classList.contains("selectedItem")) {
    return;
  }

  // Handle User Selection:
  if ($target.classList.contains("option")) {
    selectOptionMulti($field, $target);
  }
  // Toggle Dropdown
  else {
    toggleMultiSelect($field);
  }
}

function selectOptionMulti($field, $option) {
  const $input = $field.querySelector("input");
  const $display = $field.querySelector(".input.SelectMulti");
  const optionId = $option.dataset.id;
  const optionName = $option.textContent.trim();
  const value = JSON.parse($input.dataset.value);
  const $newItem = selectMultiItem(optionId, optionName);

  $newItem.addEventListener("click", () => {
    let values = JSON.parse($input.dataset.value);
    values = values.filter((v) => v !== $newItem.id);
    $input.dataset.value = JSON.stringify(values);
    $newItem.remove();
    $option.classList.remove("--selected");
    $input.dispatchEvent(new InputEvent("update"));
  });

  value.push(optionId);
  $input.dataset.value = JSON.stringify(value);
  $input.dispatchEvent(new InputEvent("update"));
  $display.insertAdjacentElement("BEFOREEND", $newItem);
  $option.classList.add("--selected");
}

function toggleMultiSelect($field) {
  // Toggle open / close if not clicking on options:
  if ($field.dataset.isOpen === "0") openMultiSelect($field);
  else closeMultiSelect($field);
}

function openMultiSelect($field) {
  $field.dataset.isOpen = "1";

  document.body.addEventListener(
    "click",
    (e) => closeMultiSelectOnBlur($field, e),
    { once: true }
  );
}

function closeMultiSelectOnBlur($field, { target }) {
  if (!$field.isEqualNode(target) && !$field.contains(target)) {
    closeMultiSelect($field);
  } else {
    document.body.addEventListener(
      "click",
      (e) => closeMultiSelectOnBlur($field, e),
      { once: true }
    );
  }
}

function closeMultiSelect($field) {
  $field.dataset.isOpen = "0";
}

function selectMultiItem(optionId, optionName) {
  const $item = document.createElement("DIV");
  $item.setAttribute("id", optionId);
  $item.setAttribute("class", "selectedItem");
  $item.innerHTML = /*html*/ `
        <span class="Name">
          ${optionName}
        </span>
        <button class="button unstyled" type="button">
          <i class="icon Close">
            <span class="line"></span>
            <span class="line"></span>
          </i>
        </button>
    `;

  return $item;
}

function setCheckbox($inputBox) {
  const $checkbox = $inputBox.parentElement;
  const $hiddenInput = $checkbox.querySelector("input");
  const $representativeInput = $checkbox.querySelector(".input");

  $hiddenInput.value = `${$hiddenInput.value}` === "false";

  if ($hiddenInput.value === "true") {
    $representativeInput.classList.add("--checked");
    $hiddenInput.setAttribute("checked", "true");

    if ($representativeInput.classList.contains("--invalid")) {
      $representativeInput.classList.remove("--invalid");
    }
  } else {
    $representativeInput.classList.remove("--checked");
    $hiddenInput.removeAttribute("checked", "false");
  }
}

function blurField(e) {
  e.target.blur();
}

function toggleTooltip($tip) {
  if ($tip.classList.contains("--open")) closeTooltip($tip);
  else openTooltip($tip);
}

function openTooltip($tip) {
  const $content = $tip.querySelector(".content");
  const offsetLeft = $content.getBoundingClientRect().left;

  $tip.classList.add("--open");

  $content.style.left = offsetLeft * -1 + "px";
  $content.style.width = document.documentElement.clientWidth + "px";

  window.addEventListener("resize", () => closeTooltip($tip), { once: true });
}

function closeTooltip($tip) {
  const $content = $tip.querySelector(".content");

  $content.style.left = "";
  $tip.classList.remove("--open");
  $tip.blur();
}

function validate($input) {
  const isValid = $input.checkValidity();

  if (!isValid) {
    $input.classList.add("--invalid");
    liveValidation($input);
  } else if ($input.classList.contains("--invalid")) {
    $input.classList.remove("--invalid");
  }
}

function liveValidation($input) {
  $input.addEventListener("input", () => validate($input), { once: true });
}

function validateSelection($inputBox) {
  const $input = $inputBox.querySelector(".Select.input");
  const $hiddenInput = $inputBox.querySelector(".Select.hiddenInput");
  const isValid = $hiddenInput.checkValidity();

  if (!isValid) {
    $input.classList.add("--invalid");
  } else if ($input.classList.contains("--invalid")) {
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
  } else {
    isValid = $representativeInput.checkValidity();
  }

  if (!isValid) {
    $representativeInput.classList.add("--invalid");

    returnValue = new Promise((resolve) => {
      const Observer = new MutationObserver((e) => {
        if (!e[0].target.classList.contains("--invalid")) {
          resolve();
        }
      });

      Observer.observe($representativeInput, { attributes: true });
    });
  }

  return returnValue;
}

function validateForm($submitButton, e) {
  const $form = $submitButton.form;

  const $fields = $form.querySelectorAll(".formField.--required");

  const invalides = [...$fields]
    .map((_$field) => generalValidation(_$field))
    .filter((_valid) => _valid !== null);

  if (invalides.length) {
    if (e) {
      e.preventDefault();
    }

    $form.classList.add("--invalid");
    Promise.allSettled(invalides).then(() => {
      validateForm($submitButton, null);
    });
  } else if ($form.classList.contains("--invalid")) {
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

const FileInput = function ($formField) {
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

    async select() {
      this.removeWarning_tooManySelected();
      this.removeWarning_uploadSizeExceeded();
      this.removeWarning_tooSmallImage();

      const newFiles = [...this.$input.files];

      for (let i = 0; i < newFiles.length; i++) {
        const _file = newFiles[i];

        if (
          this.checkFileCount() === false ||
          this.checkUploadSize(_file) === false
        ) {
          break;
        } else if (
          this.checkUniqueName(_file) &&
          this.checkFiletype(_file) &&
          (await this.checkImageResolution(_file))
        ) {
          this.add(_file, i);
        }
      }

      // Reset Input:
      this.$input.value = "";
      this.safeFileCount();
      this.updateUploadSize();
      this.setState();
    },

    checkFileCount() {
      let valid = true;
      this.count++;

      if (this.count > this.maxFiles) {
        this.addWarning_tooManySelected();
        this.count--;
        valid = false;
      }

      return valid;
    },

    checkUniqueName(file) {
      let valid = true;

      if (this.selected[file.name]) {
        valid = false;
      }

      return valid;
    },

    checkFiletype(file) {
      let valid = true;
      const [type, subtype] = file.type.split("/");

      if (this.accept.length > 0) {
        if (
          this.accept.includes(`${type}/*`) === false &&
          this.accept.includes(`${type}/${subtype}`) === false &&
          this.accept.includes(`.${subtype}`) === false
        ) {
          valid = false;
        }
      }

      return valid;
    },

    checkUploadSize(file) {
      const newUploadSize = this.uploadSize + file.size;
      let valid = true;

      if (newUploadSize > this.maxUploadSize) {
        this.addWarning_uploadSizeExceeded();
        valid = false;
      } else {
        this.uploadSize = newUploadSize;
      }

      return valid;
    },

    async checkImageResolution(file) {
      const img = new Image();
      img.src = window.URL.createObjectURL(file);

      return new Promise((resolve, reject) => {
        let valid = true;

        img.onload = () => {
          if (parseInt(img.width) < 2900 && parseInt(img.height) < 2900) {
            this.addWarning_tooSmallImage();
            valid = false;
          }

          resolve(valid);
        };
      });
    },

    add(file, index) {
      this.selected[file.name] = file;
      this.$inputBox.insertAdjacentElement(
        "AFTERBEGIN",
        this.insertHtmlItem(file.name, index)
      );
    },

    remove(e, filename, id) {
      document.getElementById(id).remove();

      delete this.selected[filename];
      this.safeFileCount();
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
      $item.innerHTML = /*html*/ `
          <span class="Filename">
            ${filename}
          </span>
          <button class="button unstyled" type="button">
            <span class="line"></span>
            <span class="line"></span>
          </button>
      `;

      $item.addEventListener("click", (e) => this.remove(e, filename, id), {
        once: true,
      });

      return $item;
    },

    safeFileCount() {
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
      } else {
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
    },

    addWarning_tooSmallImage() {
      this.$inputBox.classList.add("--tooSmallImage");
    },

    removeWarning_tooSmallImage() {
      this.$inputBox.classList.remove("--tooSmallImage");
    },
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

const TextInput = function ($formField) {
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
    },
  };

  $textarea.addEventListener("input", () => instance.updateCount());

  return instance;
};
