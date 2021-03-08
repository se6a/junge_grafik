const HeaderView = getSection("header-view");
const data = getData("page-home");

module.exports = () => {
  const html = splitTemp/*html*/`
    <main class="VIEW Home">

      ${HeaderView(data.header)}
      ${buildSections(data.sections)}

    </main>
  `;

  const css = /*css*/`
    :root {
      --colorTheme: var(--blue);
    }
  `;

  return ["home.view", html, css];
};
