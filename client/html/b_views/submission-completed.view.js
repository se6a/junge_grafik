const HeaderView = getSection("header-view");

module.exports = (data) => {
    const html = splitTemp/*html*/ `
    <main id="SubmissionCompleted" class="VIEW SubmissionCompleted" data-lang="de">
      ${HeaderView({
          title: {
              fr: "Merci!",
              de: "Danke!",
              it: "Grazie!",
          },
          content: lang`
          <span>
          ${{
              fr: `
                <p>
                  Vous y êtes presque ! Vous allez recevoir dans les prochaines minutes un mail de confirmation. Veuillez le lire attentivement. 
                </p>
                <p>
                  Nous nous réjouissons de votre soumission.
                </p>
              `,
              de: `
                <p>
                  Du hast es fast geschafft! Du bekommst in den nächsten Minuten ein Bestätigungsmail. Bitte lies es genau durch!
                </p>
                <p>
                  Wir freuen uns auf deine Einreichung.
                </p>
              `,
              it: `
                <p>
                  Ci siamo quasi! Tra pochi minuti riceverai una mail di conferma, ti preghiamo di leggerla attentamente!
                </p>

                <p>
                  Grazie per aver partecipato!
                </p>
              `,
          }}
          </span>
        `,
      })}

    </main>
  `;

    const css = /*css*/ `
    body {
      --colorTheme: var(--yellow);
    }

    .VIEW.SubmissionCompleted .HeaderView p:not(:last-child) {
      margin-bottom: var(--size-L);
    }
  `;

    return ["submission-completed.view", html, css];
};
