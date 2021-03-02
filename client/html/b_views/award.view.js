const HeaderView = getSection("header-view");
const data = getData("page-award");

module.exports = () => {
  const html = splitTemp/*html*/`
    <main class="VIEW Award">

      ${HeaderView(data.header)}
      ${buildSections(data.sections)}

    </main>
  `;

  const css = splitTemp/*css*/`
    :root {
      --colorTheme: var(--yellowLight);
      --colorHilight: var(--yelow);
    }
  `;

  return ["award.view", html, css];
};
