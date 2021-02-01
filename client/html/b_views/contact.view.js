const $intro = get$section("intro");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Contact">
      ${
        $intro({
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
