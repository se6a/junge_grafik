const HeaderView = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Contact">
      ${
        HeaderView({
          title:   "Contact",
          content: ""
        })
      }
    </main>
  `;

  const css = splitTemp/*css*/`
    :root {
      --mainColor: var(--yellow);
    }
  `;

  return ["contact.view", html, css];
};
