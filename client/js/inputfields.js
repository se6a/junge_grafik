function selectOption($field, e) {
  if (e.target.classList.contains("option")) {
    const $input      = $field.querySelector("input");
    const $display    = $field.querySelector(".input.Select");
    const $lastOption = $field.querySelector("li.option.--selected");
    const $option     = e.target;
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
  const $checkbox = $inputBox.parentElement;
  const $input    = $checkbox.querySelector("input");

  $input.value = (`${$input.value}` === "false");

  if ($input.value === "true") {
    $checkbox.classList.add("--checked");
    $input.setAttribute("checked", "true");
  }
  else {
    $checkbox.classList.remove("--checked");
    $input.removeAttribute("checked", "false");
  }
}

function blurField(e) {
  e.target.blur();
}

function toggleTooltip($tip) {
  const $content = $tip.querySelector(".content");
  if ($content.style.visibility !== "visible")
    openTooltip($content);
  else
    closeTooltip($content);
}

function openTooltip($tipContent) {
  const offsetLeft = $tipContent.getBoundingClientRect().left;

  $tipContent.style.left = offsetLeft * -1 + "px";
  $tipContent.style.visibility = "visible";
  $tipContent.style.width = document.documentElement.clientWidth + "px";

  window.addEventListener(
    "resize",
    () => closeTooltip($tipContent),
    { once: true }
  );

  document.querySelector("main").addEventListener(
    "click",
    () => closeTooltip($tipContent),
    { once: true, capture: true }
  );
}

function closeTooltip($tipContent) {
  $tipContent.style.visibility = "hidden";
  $tipContent.style.left = "";
}

function toggleMenu() {
  document.querySelector(".MENU").classList.toggle("--show");
}

function selectLanguage(e) {
  e.preventDefault();
  const $langForm = e.target;
  const $langInput = $langForm.querySelector('input[name="fields[language]"');
  const lang = $langInput.value;

  if (! lang) {
    $langInput.classList.add("--warn");
  }

  else {
    const $ViewSubmit = document.querySelector(".VIEW.Submit");

    $ViewSubmit.dataset.lang = "de";
    $langInput.classList.remove("--warn");
  }

  console.log($langInput.value);
}
