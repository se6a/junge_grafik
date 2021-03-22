const HeaderView = getSection("header-view");
const Link = getSnippet("link");
const UnderlinedButton = getSnippet("button-underlined");

module.exports = (view) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Follow">
      ${HeaderView({
        title:   "Follow us!",
        content: `
          <p>
            Follow us on social media and stay up to date:
          </p>
        `
      })}

      <section class="layoutSection fullpage box Links">
        <ul>

          <li class="arrow">
            ${UnderlinedButton({
              label: "Instagram",
              href: "https://instagram.com/jungegrafik",
              type: "link",
              attr: 'target="_blank"',
              size: "L"
            })}
          </li>

          <li class="arrow">
            ${UnderlinedButton({
              label: "Facebook",
              href: "https://facebook.com/Junge-Grafik-108635944605605",
              type: "link",
              attr: 'target="_blank"',
              size: "L"
            })} 
          </li>

          <li class="arrow">
            ${UnderlinedButton({
              label: "LinkedIn",
              href: "https://linkedin.com/company/junge-grafik-schweiz",
              type: "link",
              attr: 'target="_blank"',
              size: "L"
            })}
          </li>

        </ul>
      </section>
    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--gray);
    }

    .VIEW.Follow {
      height: 100vh;
    }

    .VIEW.Follow .HEADER-VIEW {
      min-height: unset;
      flex-grow: 1;
      border-bottom: 0;
    }

    .VIEW.Follow .Links {
      border-top: 0;
      font-size: var(--fontSize-L);
    }
  `;

  return ["follow-us.view", html, css];
};
