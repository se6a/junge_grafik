const HeaderView = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Association">

      ${HeaderView(data.header)}
      ${buildSections(data.sections)}

    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--green);
    }
  `;

  return ["association.view", html, css];
};
