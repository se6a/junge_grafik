const $intro = get$section("intro");

module.exports = ({ data }) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Follow">
      ${
        $intro({
          title:   "Follow",
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

  return ["follow.view", html, css];
};
