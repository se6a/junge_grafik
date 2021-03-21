const HeaderView       = getSection("header-view");
const LanguageForm     = getSection("form-language");
const ProjectForm      = getSection("form-submit-project");
const ButtonUnderlined = getSnippet("button-underlined");

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

      <article class="mainSection fullpage Support">
        <div class="Legend">
          <span class="langOption fr">* Champs obligatoires</span>
          <span class="langOption de">* Pflichtfelder</span>
          <span class="langOption it">* Campi obbligatori</span>
        </div>

        <div class="Contact">
          <div class="langOption fr">
            <div>Vous rencontrez des problèmes pour envoyer un projet ?</div>
            <div>Il ne rentre pas dans le cadre ?</div>
          </div>
          <div class="langOption de">
            <div>Hast du Probleme bei der Einsendung?</div>
            <div>Dein Projekt passt nicht in den Rahmen?</div>
          </div>
          <div class="langOption it">
            <div>Hai problemi con l’invio del progetto?</div>
            <div>La modalita di inoltro non funziona?</div>
          </div>

          <div>
            <span class="langOption fr">Contactez nous ici :</span>
            <span class="langOption de">Melde dich hier:</span>
            <span class="langOption it">Contattaci:</span>
            <span>
              ${ButtonUnderlined({
                classes: "Contact contactLink",
                attr: `data-contact="${easyEncode("info@jungegrafik.ch")}"`,
                label: "contact",
                size: "L"
              })}
            </span>
          </div>

        </div>

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

    .VIEW.Submit .Language .header {
      padding-top: 0;
      min-height: unset;
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

    .VIEW.Submit[lang=""] .mainSection.ProjectRegistration,
    .VIEW.Submit[lang=""] .mainSection.Support {
      display: none;
    }

    .VIEW.Submit .Support {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
    }

    .VIEW.Submit .Legend {
      margin-bottom: var(--size-M);
    }

    .VIEW.Submit .Support.list li {
      padding-left: var(--size-M);
      position: relative;
    }


    .VIEW.Submit .Support .icon:not(.astrix) {
      font-size: var(--fontSize-M);
      line-height: var(--lineHeight-M);
      display: inline-flex;
      vertical-align: super;
    }

    .VIEW.Submit .Support .icon {
      position: absolute;
      left: 0;
    }
  `;

  return ["submit.view", html, css];
};
