document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("DOM loaded");
    attachMediaQueryListener();
  }
);

function attachMediaQueryListener() {
  const sizes = {
    lg: "(min-width: 1000px)",
    md: "(min-width: 600px) and (max-width: 999px)",
    sm: "(max-width: 599px)"
  };

  for (const _size in sizes) {
    const _mediaQuery = window.matchMedia(sizes[_size]);

    if (_mediaQuery.matches)
      setDocumentSize(_size, _mediaQuery);

    _mediaQuery.onchange = (q) => setDocumentSize(_size, q);
  }
}

function setDocumentSize(size, q) {
  if (q.matches) {
    const newSize = `--size-${size}`;
    const lastSize = [...document.body.classList].filter(
      (_class) => _class.startsWith("--size"))[0];

    if (lastSize) {
      document.body.classList.replace(lastSize, newSize);
    }
    else {
      document.body.classList.add(newSize);
    }
  }
}

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

function subscribeNewsletter($form) {
  const formdata = new FormData($form);
  console.log($form, formdata);
  $form.classList.add("--subscribed");
}

function toggleMenu($menuButton) {
  $menuButton.classList.toggle("--open");
  document.querySelector(".MENU").classList.toggle("--show");
}

function setLanguage($container, $selector) {
  if ($selector.dataset.lang) {
    $container.dataset.lang = $selector.dataset.lang;
  }
}
