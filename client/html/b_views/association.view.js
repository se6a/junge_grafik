const $intro = get$section("intro");

module.exports = ({ data }) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Association">
      ${
        $intro({
          title:   "Association",
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

  return ["association.view", html, css];
};
