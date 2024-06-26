const HeaderView = getSection("header-view");
const Rows = getSection("rows");

module.exports = (data) => {
    const html = splitTemp/*html*/ `
    <main class="VIEW Contact">
      ${HeaderView({
          title: "Contact",
          content: "",
      })}

      ${Rows({
          length: 2,
          content: [
              {
                  type: "card-simple",
                  content: `
                <span>→ Address (for letters only, no packages!)</span>
                <span>Verein Junge Grafik</span>
                <span>6000 Luzern</span>
            `,
              },
              {
                  type: "card-simple",
                  content: `
                <span>→ General matters / questions about project registration</span>
                <span>
                  <a class="textButton contactLink" data-contact="${easyEncode(
                      "info@jungegrafik.ch"
                  )}">
                    contact
                  </a>
                </span>
            `,
              },
              {
                  type: "card-simple",
                  content: `
                <span>→ Sponsorship</span>
                <span>
                  <a class="textButton contactLink" data-contact="${easyEncode(
                      "tobias.klauser@jungegrafik.ch"
                  )}">
                    contact
                  </a>
                </span>
            `,
              },
              {
                  type: "card-simple",
                  content: `
                <span>→ Foundations</span>
                <span>
                  <a class="textButton contactLink" data-contact="${easyEncode(
                      "tobias.klauser@jungegrafik.ch"
                  )}">
                    contact
                  </a>
                </span>
            `,
              },
              {
                  type: "card-simple",
                  content: `
                <span>→ Patrons</span>
                <span>
                  <a class="textButton contactLink" data-contact="${easyEncode(
                      "tobias.klauser@jungegrafik.ch"
                  )}">
                    contact
                  </a>
                </span>
            `,
              },
          ],
      })}

    </main>
  `;

    const css = splitTemp/*css*/ `
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
