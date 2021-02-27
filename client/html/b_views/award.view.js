const HeaderView = getSection("header-view");
const Underlined = getSnippet("text-underlined");

module.exports = ({ data }) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Award">
      <h1>${Underlined("super")}</h1>
    </main>
  `;

  const css = splitTemp/*css*/`
    :root {
      --colorTheme: var(--yellowLight);
      --colorHilight: var(--yelow);
    }

    .VIEW.Award {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return ["award.view", html, css];
};
