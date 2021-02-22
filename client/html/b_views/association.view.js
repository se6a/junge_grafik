const HeaderView = getSection("header-view");

module.exports = ({ data }) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Association">
      ${
        HeaderView({
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
