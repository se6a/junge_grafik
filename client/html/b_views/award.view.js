const $intro = get$section("intro");
const $underlined = get$snippet("text-underlined");

module.exports = ({ data }) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Award">
      <h1>${$underlined("super")}</h1>
    </main>
  `;

  const css = splitTemp/*css*/`
    :root {
      --mainColor: var(--yellow);
    }

    .VIEW.Award {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return ["award.view", html, css];
};
