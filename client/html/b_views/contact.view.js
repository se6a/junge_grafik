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
                <span><a href="mailto:remo.stahl@jungegrafik.ch">remo.stahl@jungegrafik.ch</a></span>
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

      <section class="FAQ">

        <header class="header box">
          <h2>
            FAQ – Frequently asked questions
          </h2>
        </header>

        <div class="FAQ content">

          ${Dropdown({
            title: "Where do I send my Project?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem aliquid voluptatum voluptas earum deserunt eveniet fugiat eligendi dignissimos, quidem quam saepe consectetur cum officia."
          })}

          ${Dropdown({
            title: "Who is Junge Grafik?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem aliquid voluptatum voluptas earum deserunt eveniet fugiat eligendi dignissimos, quidem quam saepe consectetur cum officia."
          })}

          ${Dropdown({
            title: "How can I change my submission?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem aliquid voluptatum voluptas earum deserunt eveniet fugiat eligendi dignissimos, quidem quam saepe consectetur cum officia."
          })}

          ${Dropdown({
            title: "Can I send you a printed version of my poster?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem aliquid voluptatum voluptas earum deserunt eveniet fugiat eligendi dignissimos, quidem quam saepe consectetur cum officia."
          })}

        </div>

      </section>

    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--gray);
    }

    .Contact .HEADER-VIEW {
      min-height: 40vh;
      flex-grow: 0;
    }

    .FAQ h2 {
      margin: 0;
    }
  `;

  return ["contact.view", html, css];
};
