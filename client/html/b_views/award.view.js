const $intro = get$section("intro");

module.exports = ({ data }) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Award">
      ${
        $intro({
          title:   "Award",
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

  return ["award.view", html, css];
};
