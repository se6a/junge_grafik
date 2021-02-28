const HeaderView    = getSection("header-view");
const Underlined    = getSnippet("text-underlined");
const ProjectForm   = getSection("form-submit-project");
const Select        = getSnippet("input-select");
const RoundedButton = getSnippet("button-rounded");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="Submit" class="VIEW Submit" data-lang="">
      ${HeaderView({
        title: "Project registration",
        content: `Hier kannst du dich zur Wettbewerbs-teilnahme registrieren und deine 
        Grafik-arbeit einreichen. Let’s go.`
      })}

      <article class="mainSection fullpage Language">
        <form id="ProjectRegistrationLang" onsubmit="selectLanguage(event)">
          <fieldset class="formFieldGroup">
            <div class="formField Language">
              ${Select({
                options: [
                  { id: "de", de: "deutsch" },
                  { id: "fr", de: "französisch" },
                  { id: "it", de: "italienisch" }
                ],
                required: true,
                label: {
                  de: "Language"
                },
                name: "language"
              })}
            </div>
          </fieldset>
          <fieldset class="formFieldGroup">
            <div class="formField ConfirmLang">
              ${RoundedButton({
                label: "Next \u2192",
                type: "submit"
              })}
            </div>
          </fieldset>
        </form>
      </article>

      <article class="mainSection fullpage Form" data-lang="">
        ${ProjectForm()}
      </article>
    </main>
  `;

  const css = /*css*/`
    :root {
      --colorTheme: var(--redLight);
      --colorHilight: var(--red);
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
