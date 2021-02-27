const HeaderView = getSection("header-view");

module.exports = ({ data }) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Follow">
      ${
        HeaderView({
          title:   "Follow",
          content: ""
        })
      }
    </main>
  `;

  const css = splitTemp/*css*/`
    :root {
      --colorTheme: var(--yellowLight);
      --colorHilight: var(--yelow);
    }
  `;

  return ["follow.view", html, css];
};
