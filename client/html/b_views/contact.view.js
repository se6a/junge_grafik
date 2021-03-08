const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const Dropdown = getSnippet("dropdown");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Contact">
      ${
        HeaderView({
          title:   "Contact",
          content: ""
        })
      }

      ${
        Rows({
          length: 2,
          content: [
            {
              type: "card",
              title: "",
              content: `
                <ul>
                  <li>→ Address for letters</li>
                  <li>Verein Junge Grafik</li>
                  <li>6000 Luzern"</li>
                </ul>
              `
            },
            {
              type: "card",
              title: "",
              content: `
                <ul>
                  <li>→ Address for Packages</li>
                  <li>SGV Schweizer Grafiker Verband</li>
                  <li>Junge Grafik</li>
                  <li>Schulhausstrasse 64</li>
                  <li>8002 Zürich</li>
                </ul>
              `
            },
            {
              type: "card",
              title: "",
              content: `
                <ul>
                  <li>General matters</li>
                  <li><a href="mailto:remo.stahl@jungegrafik.ch">remo.stahl@jungegrafik.ch</a></li>
                </ul>
              `
            },
            {
              type: "card",
              title: "",
              content: `
                <ul>
                  <li>Sponsorship</li>
                  <li><a href="mailto:remo.stahl@jungegrafik.ch">remo.stahl@jungegrafik.ch</a></li>
                </ul>
              `
            }, {
              type: "card",
              title: "",
              content: `
                <ul>
                  <li>Foundations</li>
                  <li><a href="mailto:loana.boppart@jungegrafik.ch">loana.boppart@jungegrafik.ch</a></li>
                </ul>
              `
            }, {
              type: "card",
              title: "",
              content: `
                <ul>
                  <li>Patrons</li>
                  <li><a href="mailto:tobias.klauser@jungegrafik.ch">tobias.klauser@jungegrafik.ch</a></li>
                </ul>
              `
            }
          ]
        })
      }

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
    :root {
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
