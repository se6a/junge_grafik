const HeaderView   = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="SubmissionCompleted" class="VIEW SubmissionCompleted" data-lang="de">
      ${HeaderView({
        title: {
          fr: "Merci!",
          de: "Danke!",
          it: "Grazie!"
        },
        content: lang`
          <span>
          ${{
              fr: `
                <p>
                  Vous y êtes presque ! Vous allez recevoir dans les prochaines minutes un mail de confirmation. Veuillez le lire attentivement. 
                </p>

                <p>
                  <div>Pour rappel :</div>
                  Les projets dont la matérialité est un aspect important (édition, packaging design, etc ...) doivent également être soumis sous une forme physique. Vous trouverez l’adresse postale dans le mail de confirmation. Bien entendu, nous vous renverrons votre projet après les évaluations du jury !
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
                  <div>Ein Reminder:</div>
                  Projekte, bei denen die Materialität einen wichtigen Aspekt darstellt (z.B. Publikationen, Verpackungsdesign), müssen auch in physischer Form eingereicht werden. Die Adresse für den Versand findest du im Bestätigungsmail. Selbstverständlich senden wir dir dein Projekt nach der Jurierung wieder zurück! 
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
                  <div>Ricordati:</div>
                  I progetti in cui l’aspetto della materialità è importante (ad esempio, progetti editoriali, pubblicazioni cartacee, packaging) devono essere inoltrati anche in forma fisica. L’indirizzo per l’noltro del progetto lo trovi nella mail di conferma che ti abbiamo inviato. Naturalmente ti rimanderemo il tuo progetto dopo la valutazione!
                </p>

                <p>
                  Grazie per aver partecipato!
                </p>
              `
            }}
          </span>
        `
      })}

    </main>
  `;

  const css = /*css*/`
    body {
      --colorTheme: var(--yellow);
    }

    .VIEW.SubmissionCompleted .HeaderView p:not(:last-child) {
      margin-bottom: var(--size-L);
    }
  `;

  return ["submission-completed.view", html, css];
};
