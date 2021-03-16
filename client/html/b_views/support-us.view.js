const HeaderView = getSection("header-view");
const Rows = getSection("rows");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Support">
      ${HeaderView({
        title:   "Support us!",
        content: `Dear partners, sponsors and patrons, Junge Grafik depends on you.`
      })}

      <section class="layoutSection Fullpage">
        ${Rows({
          length: 2,
          content: [
            {
              type: "card-simple",
              content: `
                <p>All financial contributions will go directly into the current award-project as well as into its planning, implementation and publication in the media. All of those who are actively involved in the Junge Grafik association do so on a voluntary basis - firmly convinced that they are supporting the next generation.</p>
                <p>Thank you for your support!</p>
              `

            },
            {
              type: "card-simple",
              content: `
                <ul>
                  <li>UBS Switzerland AG</li>
                  <li>Postfach</li>
                  <li>6002 Luzern</li>
                </ul>
    
                <ul>
                  <li>Verein Junge Grafik</li>
                  <li>Konto-Nr.: 248-165901.40W</li>
                  <li>BIC: UBSWCHZH80A</li>
                  <li><span>IBAN: </span><span>CH41 0024 8248 </span><span>1659 0140 W</span></li>
                </ul>
              `
            }
          ]
        })}
      </section>

    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--gray);
    }
    
    .VIEW.Support ul:first-child {
      margin-bottom: var(--size-S);
    }

    .VIEW.Support p:not(:first-child) {
      margin-top: var(--size-S);
    }
  `;

  return ["support-us.view", html, css];
};
