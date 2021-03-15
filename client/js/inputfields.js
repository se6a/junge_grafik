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

// function setTooltipSize($tip) {
//   const $content = $tip.querySelector(".content");
//   const offsetLeft = $content.getBoundingClientRect().left;

//   $content.style.left = offsetLeft * -1 + "px";
//   $content.style.width = document.documentElement.clientWidth + "px";

//   window.addEventListener(
//     "resize",
//     () => $tip.blur(),
//     { once: true }
//   );
// }

// function resetTooltip($tip) {
//   const $content = $tip.querySelector(".content");

//   $content.style.left = "";
// }
