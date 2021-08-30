const PAGE = {
  $: {
    rows: null,
  },
  sizes: {
    lg: "(min-width: 1000px)",
    md: "(min-width: 600px) and (max-width: 999px)",
    sm: "(max-width: 599px)",
  },
  currentSize: "",
};

document.addEventListener("DOMContentLoaded", () => {
  attachMediaQueryListener();
  showContacts();
});

window.addEventListener("dragover", (e) => e.preventDefault(), false);

window.addEventListener("drop", (e) => e.preventDefault(), false);

function attachMediaQueryListener() {
  for (const _size in PAGE.sizes) {
    const _mediaQuery = window.matchMedia(`screen and ${PAGE.sizes[_size]}`);

    if (_mediaQuery.matches) {
      setDocumentSize(_size, _mediaQuery);
    }

    if (_mediaQuery.addEventListener) {
      _mediaQuery.addEventListener("change", (q) => setDocumentSize(_size, q));
    }

    // Safari Support:
    else if (_mediaQuery.addListener) {
      _mediaQuery.addListener((q) => setDocumentSize(_size, q));
    }
  }
}

function setDocumentSize(size, q) {
  if (q.matches) {
    const newSize = `--size-${size}`;
    const lastSize = [...document.body.classList].filter((_class) =>
      _class.startsWith("--size")
    )[0];

    if (lastSize) {
      document.body.classList.replace(lastSize, newSize);
    } else {
      document.body.classList.add(newSize);
    }

    PAGE.currentSize = size;
    document.body.dispatchEvent(
      new CustomEvent("sizeChange", { detail: size })
    );

    setCssVariables();
  }
}

function makeId(addition = "") {
  const random = Math.round(Math.random() * 1000);
  return new Date().getTime().toString(16) + random + addition;
}

function toggleDropdown($dropdown) {
  if ($dropdown.classList.contains("--open")) closeDropdown($dropdown);
  else openDropdown($dropdown);
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

function postRequest(endpoint, data) {
  return fetch(
    new Request(`${HOST}/api/${endpoint}`, {
      method: "POST",
      body: data,
    })
  ).then((res) => {
    if (res.ok === false) {
      throw Error(`Status: ${res.status}`);
    } else {
      return res;
    }
  });
}

function maybeQuery(name, selector) {
  if (!PAGE.$[name]) {
    PAGE.$[name] = document.querySelectorAll(selector);
  }
}

function setCssVariables() {
  const vars = {
    "--scrollbarWidth": `${scrollbarWidth()}px`,
  };

  for (const _var in vars) {
    document.body.style.setProperty(_var, vars[_var]);
  }
}

function scrollbarWidth() {
  return window.outerWidth - window.innerWidth;
}

function easyDecode(cypher) {
  const contact = [...cypher]
    .map((_char) => String.fromCharCode(Math.sqrt(_char)))
    .join("");
  return contact;
}

function showContacts() {
  const $contacts = document.body.querySelectorAll(".contactLink");
  setTimeout(() => {
    $contacts.forEach((_$contact) => {
      const _cypher = JSON.parse(_$contact.dataset.contact);
      const _decoded = easyDecode(_cypher);
      const _$textbox =
        _$contact.querySelector(".text") ||
        _$contact.querySelector(".label") ||
        _$contact;

      _$contact.setAttribute("href", `mailto:${_decoded}`);
      _$textbox.innerHTML = _decoded;
    });
  }, 50);
}

function setLanguage($container, $button) {
  const lang = $button.dataset.lang;

  if (lang) {
    const prevLang = $container.lang;
    $container.lang = lang;
    document.body.dataset.lang = lang;
  }
}

function scrollToTop() {
  const raf = requestAnimationFrame(() => {
    const nextOffset = window.pageYOffset * 0.8;

    if (nextOffset > 2) {
      window.scrollTo(0, nextOffset);
      scrollToTop();
    } else {
      window.scrollTo(0, 0);
    }
  });

  window.addEventListener("mousewheel", () => cancelAnimationFrame(raf), {
    once: true,
  });
}
