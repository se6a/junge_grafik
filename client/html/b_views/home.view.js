const HeaderView = getSection("header-view");
const Underlined = getSnippet("text-underlined");

module.exports = (data) => {
  const _data = {
    title:   "Ciao! Salut! Hoi!",
    content: "Junge Grafik zeigt, vernetzt und fördert junge Grafiktalente aus der ganzen Schweiz. Mit einem Award, einer Wanderausstellung und dieser Webplattform werden herausragende Grafikarbeiten ausgezeichnet und einer breiten Öffentlichkeit präsentiert."
  };

  const html = splitTemp/*html*/`
    <main class="VIEW Home">

      ${HeaderView(_data)}

      <article class="viewSegment splitpage">
        <div class="Description box">
          <h2>${Underlined("Award")}</h2>
          Deine Grafikarbeit ist mehr als nur ein Schulprojekt? Dann lass sie uns sehen. Eingereicht werden können herausragende Arbeiten, die im Rahmen einer Ausbildung entstanden sind. 
        </div>
        <div class="Details box">
          <div class="column">
            <div class="item">
              Eingabefrist
              <div class="itemText">
                01.01.2021 (berücksichtigt werden Arbeiten, die zwischen dem 01.01.2021 und 01.01.2021 benotet wurden)
              </div>
            </div>
            <div class="item">
              Preisverleihung
              <div class="itemText">
                01.01.2021
              </div>
            </div>
            <div class="item">
              Ausstellung
              <div class="itemText">
                01.01.2021
              </div>
            </div>
          </div>
          <div class="column">
            <div class="item">
              Party
              <div class="itemText">
                01.01.2021
              </div>
            </div>
            <div class="item">
              Wanderausstellung
              <div class="itemText">
                <ul>
                  <li>01.01.2021, Luzern</li>
                  <li>01.01.2021, Zürich</li>
                  <li>01.01.2021, Basel</li>
                  <li>01.01.2021, Genf</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

    </main>
  `;

  const css = /*css*/`
    :root {
      --colorTheme: var(--redLight);
      --colorHilight: var(--red);
    }

    .Details.box {
      display: grid;
      grid-gap: var(--spacing-M);
      grid-template-columns: 1fr 1fr;
    }

    .Details > .column {
      display: flex;
      flex-direction: column;
    }

    .itemText {
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S)
    }

    .Details > .column > .item::after {
      content: "";
      height: var(--spacing-M);
      display: block;
    }
  `;

  return ["home.view", html, css];
};
