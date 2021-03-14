const HeaderView = getSection("header-view");
const Rows = getSection("rows");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW DataPrivacy">

      ${HeaderView({
        title:   "Data-Privacy",
        content: ``
      })}

      ${Rows({
        length: 2,
        content: [
          {
            type: "card-simple",
            content: `
              <ul>
                <li class="arrow">Zur Verwendung Deiner Einreichung haben wir eine eigene Seite angelegt: jungegrafik.ch/einreichungsbestimmungen</li>
                <li class="arrow">Unsere Hoster Hostpoint und Digital Ocean erfassen in einem Serverlog aufgerufene URLs und IP-Adressen</li>
              </ul>
            `
          },
          {
            type: "card-simple",
            content: `
            <ul>
              <li class="arrow">E-Mails speichern wir in unseren Serverpostfächern bei Hostpoint und in Kopie auf unseren Computern</li>
              <li class="arrow">Um eine Idee über Besucherzahlen zu haben, erfassen wir Deinen Besuch mit Google Analytics. Deine IP wird dabei anonymisiert (gekürzt).</li>
            </ul>
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

    .VIEW.DataPrivacy .HEADER-VIEW {
      min-height: 50vh;
    }

    .VIEW.DataPrivacy .Rows.layoutSection {
      flex-grow: 1;
      border: var(--borderHalf) solid currentColor;
      padding: var(--size-S) calc(var(--size-S) / 2);
    }

    .VIEW.DataPrivacy > .Rows .SimpleCard.box  {
      heigth: 100%;
      border: none;
      padding: 0 calc(var(--size-S) / 2);
    }
  `;

  return ["data-privacy.view", html, css];
};
