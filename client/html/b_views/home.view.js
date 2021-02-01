const $intro = get$section("intro");

module.exports = (data) => {
  const _data = {
    title:   "Ciao! Salut! Hoi!",
    content: "Junge Grafik zeigt, vernetzt und fördert junge Grafiktalente aus der ganzen Schweiz. Mit einem Award, einer Wanderausstellung und dieser Webplattform werden herausragende Grafikarbeiten ausgezeichnet und einer breiten Öffentlichkeit präsentiert."
  };

  const html = splitTemp/*html*/`
    <main class="VIEW Home">

      ${$intro(_data)}

      <section class="two">
        <div class="Description box">
          <h2>Award</h2>
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
      </section>

    </main>
  `;

  const css = /*css*/`
    :root {
      --mainColor: var(--orange)
    }

    .two {
      background-color: white;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr;
      grid-auto-columns: 1fr;
    }

    .two > .box {
      height: 100%;
      padding: var(--spacing-M);
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
