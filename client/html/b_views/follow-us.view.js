const HeaderView = getSection("header-view");
const Link = getSnippet("link");

module.exports = (view) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Follow">
      ${HeaderView({
        title:   "Follow us!",
        content: `
          <p>
            Follow us on social media and stay up to date:
          </p>
          <ul>
            <li class="arrow"><a class="textButton" target="_blank" href="https://instagram.com/jungegrafik">Instagram</a></li>
            <li class="arrow"><a class="textButton" target="_blank" href="https://facebook.com/Junge-Grafik-108635944605605">Facebook</a></li>
            <li class="arrow"><a class="textButton" target="_blank" href="https://linkedin.com/company/junge-grafik-schweiz">LinkedIn</a></li>
          </ul>
        `
      })}
    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--gray);
    }

    .VIEW.Follow p {
      margin-bottom: var(--size-M);
    }
  `;

  return ["follow-us.view", html, css];
};
