const HeaderView   = getSection("header-view");
const LanguageForm = getSection("form-language");
const ProjectForm  = getSection("form-submit-project");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="Submit" class="VIEW Submit" lang="">

      ${HeaderView({
        title: "Project registration",
        content: `Register to take part in the competition and submit your graphic work. Get started here.`
      })}

      <article class="mainSection fullpage SelectLanguage">
        ${LanguageForm()}
      </article>

      <article class="mainSection fullpage ProjectRegistration">
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

    .mainSection.SelectLanguage {
      display: none;
    }

    .VIEW.Submit[lang=""] .mainSection.SelectLanguage {
      display: flex;
    }

    .VIEW.Submit[lang=""] .mainSection.ProjectRegistration {
      display: none;
    }
  `;

  return ["submit.view", html, css];
};
