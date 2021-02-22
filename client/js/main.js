document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("DOM loaded");
  }
);

function setCheckbox($inputBox) {
  const $checkbox = $inputBox.parentElement;
  const $input = $checkbox.querySelector("input");

  $input.value = ($input.value === "false");

  if ($input.value === "true")
    $checkbox.classList.add("--checked");
  else
    $checkbox.classList.remove("--checked");
}
