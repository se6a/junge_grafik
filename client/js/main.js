const PAGE = {
  $: {
    rows: null
  },
  sizes: {
    lg: "(min-width: 1000px)",
    md: "(min-width: 600px) and (max-width: 999px)",
    sm: "(max-width: 599px)"
  }
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("DOM loaded");
    attachMediaQueryListener();
    showContacts();
  }
);

function attachMediaQueryListener() {
  for (const _size in PAGE.sizes) {
    const _mediaQuery = window.matchMedia(PAGE.sizes[_size]);

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

    setCssVariables();
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
  const email = $form.querySelector(".input.Email").value;
  const formdata = new FormData();

  formdata.set("fields[e-mail]", email);
  formdata.set("action[newsletter-opt-in]", "Abschicken");

  postRequest("email", formdata)

  .then(() => {
    $form.classList.add("--subscribed");
  })

  .catch(() => {
    $form.classList.add("--failed");
  });
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

function postRequest(endpoint, data) {
  return fetch(
    new Request(
      `${HOST}/api/${endpoint}`,
      {
        method: "POST",
        body: data
      }
    )
  )

  .then((res) => {
    if (res.ok === false) {
      throw Error(`Status: ${res.status}`);
    }
    else {
      return res;
    }
  });
}

function maybeQuery(name, selector) {
  if (! PAGE.$[name]) {
    PAGE.$[name] = document.querySelectorAll(selector);
  }
}

function setCssVariables() {
  const vars = {
    "--scrollbarWidth": `${scrollbarWidth()}px`
  };

  for (const _var in vars) {
    document.body.style.setProperty(_var, vars[_var]);
  }
}

function scrollbarWidth() {
  return window.outerWidth - window.innerWidth;
}

function easyDecode(cypher) {
  const contact = [...cypher].map(
    (_char) => String.fromCharCode(Math.sqrt(_char))
  ).join("");
  return contact;
}

function showContacts() {
  const $contacts = document.body.querySelectorAll(".contactLink");
  console.log($contacts);
  setTimeout(() => {
    $contacts.forEach((_$contact) => {
      const _cypher = JSON.parse(_$contact.dataset.contact);
      const _decoded = easyDecode(_cypher);
      _$contact.setAttribute("href", `mailto:${_decoded}`);
      _$contact.innerHTML = _decoded;
    });
  }, 50);
}
