const HeaderView   = getSection("header-view");
const LanguageForm = getSection("form-language");
const ProjectForm  = getSection("form-submit-project");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="Submit" class="VIEW Submit" lang="">

      ${HeaderView({
        title: "Project registration",
        content: lang`
            <span>
              ${{
                fr: "Tu peux t'inscrire ici pour participer et soumettre ton projet. Let’s go.",
                de: "Hier kannst du dich zur Teilnahme registrieren und dein Projekt einreichen. Let’s go.",
                it: "Qui puoi registrarti per partecipare e inoltrare il tuo progetto. Let’s go."
              }}
            </span>`
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

    .VIEW.Submit {
      min-height: 100vh;
    }

    .VIEW.Submit .HEADER-VIEW {
      min-height: unset;
      flex-grow: 1;
      display: none;
    }

    .VIEW.Submit > section {
      border: var(--borderHalf) solid currentColor;
    }

    .mainSection.SelectLanguage {
      display: none;
    }

    .mainSection.ProjectRegistration {
      padding-top: calc(var(--headerHeight) + var(--size-S));
    }

    .VIEW.Submit[lang=""] .mainSection.SelectLanguage,
    .VIEW.Submit[lang=""] .HEADER-VIEW {
      display: flex;
    }

    .VIEW.Submit[lang=""] .mainSection.ProjectRegistration {
      display: none;
    }
  `;

  return ["submit.view", html, css];
};

// module.exports = (data) => {
//   const html = splitTemp/*html*/`
//     <main id="Submit" class="VIEW Submit" lang="">

//       ${HeaderView({
//         title: "Project registration",
//         content: `
//           <div>
//             Coming soon!
//           </div>
//           <div>
//             22.03.2021
//           </div>
//         `
//       })}

//     </main>
//   `;

//   const css = /*css*/`
//     body {
//       --colorTheme: var(--yellow);
//     }

//     .VIEW.Submit > section {
//       border: var(--borderHalf) solid currentColor;
//     }

//     .mainSection.SelectLanguage {
//       display: none;
//     }

//     .VIEW.Submit[lang=""] .mainSection.SelectLanguage {
//       display: flex;
//     }

//     .VIEW.Submit[lang=""] .mainSection.ProjectRegistration {
//       display: none;
//     }
//   `;

//   return ["submit.view", html, css];
// };
