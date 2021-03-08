const HeaderView   = getSection("header-view");
const LanguageForm = getSection("form-language");
const ProjectForm  = getSection("form-submit-project");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="Submit" class="VIEW Submit" data-lang="">
      ${HeaderView({
        title: "Project registration",
        content: `Hier kannst du dich zur Wettbewerbs-teilnahme registrieren und deine 
        Grafik-arbeit einreichen. Let’s go.`
      })}

      <article class="mainSection fullpage Language">
        ${LanguageForm()}
      </article>

      <article class="mainSection fullpage Form" data-lang="">
        ${ProjectForm()}
      </article>
    </main>
  `;

  const css = /*css*/`
    body {
      --colorTheme: var(--yellow);
    }

    .VIEW.Submit > section {
      border: var(--borderHalf) solid currentColor;
    }

    .mainSection.Language {
      display: none;
    }

    .VIEW.Submit[data-lang=""] .mainSection.Language {
      display: flex;
    }

    .VIEW.Submit[data-lang=""] .mainSection.Form {
      display: none;
    }
  `;

  return ["submit.view", html, css];
};
