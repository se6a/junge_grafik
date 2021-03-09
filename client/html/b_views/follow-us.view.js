const HeaderView = getSection("header-view");
const Link = getSnippet("link");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Follow">
      ${HeaderView({
        title:   "Follow us!",
        content: `
          <ul>
            <li><a class="link" target="_blank" href="https://instagram.com/jungegrafik">Instagram</a></li>
            <li><a class="link" target="_blank" href="https://facebook.com/Junge-Grafik-108635944605605">Facebook</a></li>
            <li><a class="link" target="_blank" href="https://linkedin.com/company/junge-grafik-schweiz">LinkedIn</a></li>
          </ul>
        `
      })}
    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--gray);
    }
  `;

  return ["follow-us.view", html, css];
};
