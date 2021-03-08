document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("DOM loaded");
  }
);

function makeId(addition = "") {
  const random = Math.round(Math.random() * 1000);
  return (new Date().getTime().toString(16) + random) + addition;
};

function toggleDropdown($dropdown) {
  if ($dropdown.classList.contains("--open"))
    closeDropdown($dropdown);
  else
    openDropdown($dropdown);
}

function openDropdown($dropdown) {
  $wrapper = $dropdown.querySelector(".wrapper");
  $content = $dropdown.querySelector(".content");
  $wrapper.style.height = `${$content.clientHeight}px`;
  $dropdown.classList.add("--open");
}

function closeDropdown($dropdown) {
  setTimeout(() => {
    $wrapper = $dropdown.querySelector(".wrapper");
    $wrapper.style.height = "0";
    $dropdown.classList.remove("--open");
  }, 100);
}
