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
        console.log("mutated", e[0].target);

        if (! e[0].target.classList.contains("--invalid")) {
          console.log("resolved");
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
      console.log("validate form again");
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
        this.$input.setCustomValidity("");
      }
      else {
        this.hasMinimum = false;
        this.$input.setCustomValidity(false);
      }
    },

    updateCount() {
      this.$count.innerHTML = this.count;
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
    }
  };

  $input.removeAttribute("required");
  $input.setCustomValidity(false);
  $input.addEventListener("input", () => instance.select());

  return instance;
};
