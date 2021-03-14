const HeaderView   = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="SubmissionCompleted" class="VIEW SubmissionCompleted" data-lang="de">
      ${HeaderView({
        title: "Project registration",
        content: lang`
          <span>
          ${{
            de: `
              <p>Du hast es fast geschafft! Du bekommst in den nächsten Minuten ein Bestätigungs-Mail. Bitte lies es genau durch!</p>
              <p>Ein Reminder für alle Packaging-Design- und Editorial-Projekte: Diese Arbeiten müssen zusätzlich analog eingesendet werden und werden auch nur dann juriert. Die Adresse steht im Bestätigungsmail. </p>
              <p>Wir freuen uns auf deine Einreichung.</p>
            `,
            fr: "",
            it: ""
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

    .VIEW.SubmissionComplete .HeaderView p:not(:last-child) {
      margin-bottom: var(--size-L);
    }
  `;

  return ["submission-completed.view", html, css];
};
