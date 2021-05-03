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
                <li class="arrow">
                  <span>
                    A dedicated page explains how we use your submission for our channels:
                    <a class="textButton" href="/terms-of-submission" target:"_blank">
                      jungegrafik.ch/terms-of-submission
                    </a>
                  </span>
                </li>
                <li class="arrow">
                  Our hosters Hostpoint and Digital Ocean record URLs and IP addresses in a server log.
                </li>
              </ul>
            `
          },
          {
            type: "card-simple",
            content: `
            <ul>
              <li class="arrow">
                We store e-mails in our server mailboxes at Hostpoint and a copy on our computers.
              </li>
              <li class="arrow">
                In order to have an idea of visitor numbers, we record your visit with Google Analytics. Your IP is anonymised (shortened).
              </li>
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
