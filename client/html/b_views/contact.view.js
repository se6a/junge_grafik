const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const Dropdown = getSnippet("dropdown");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Contact">
      ${HeaderView({
        title:   "Contact",
        content: ""
      })}

      ${Rows({
        length: 2,
        content: [
          {
            type: "card-simple",
            content: `
                <span>→ Address for letters</span>
                <span>Verein Junge Grafik</span>
                <span>6000 Luzern"</span>
            `
          },
          {
            type: "card-simple",
            content: `
                <span>→ Address for Packages</span>
                <span>SGV Schweizer Grafiker Verband</span>
                <span>Junge Grafik</span>
                <span>Schulhausstrasse 64</span>
                <span>8002 Zürich</span>
            `
          },
          {
            type: "card-simple",
            content: `
                <span>General matters</span>
                <span><a href="mailto:info@jungegrafik.ch">info@jungegrafik.ch</a></span>
            `
          },
          {
            type: "card-simple",
            content: `
                <span>Sponsorship</span>
                <span><a href="mailto:remo.stahl@jungegrafik.ch">remo.stahl@jungegrafik.ch</a></span>
            `
          },
          {
            type: "card-simple",
            content: `
                <span>Foundations</span>
                <span><a href="mailto:loana.boppart@jungegrafik.ch">loana.boppart@jungegrafik.ch</a></span>
            `
          },
          {
            type: "card-simple",
            content: `
                <span>Patrons</span>
                <span><a href="mailto:tobias.klauser@jungegrafik.ch">tobias.klauser@jungegrafik.ch</a></span>
            `
          }
        ]
      })}

    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--gray);
    }
    .VIEW.Contact {
      min-height: unset;
      height: auto;
    }

    .Contact .HEADER-VIEW {
      min-height: 40vh;
      flex-grow: 0;
    }
  `;

  return ["contact.view", html, css];
};
