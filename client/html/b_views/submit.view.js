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

      <article class="viewSegment fullpage Language">
        <form id="project-registration-lang" onsubmit="selectLanguage(event)">
          <fieldset class="group">
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
          <fieldset class="group">
            <div class="formField ConfirmLang">
              ${RoundedButton({
                label: "Next \u2192",
                type: "submit"
              })}
            </div>
          </fieldset>
        </form>
      </article>

      <article class="viewSegment fullpage Form" data-lang="">
        ${ProjectForm()}
      </article>
    </main>

    <script>
        function selectLanguage(e) {
          e.preventDefault();
          const $langForm = e.target;
          const $langInput = $langForm.querySelector('input[name="fields[language]"');
          const lang = $langInput.value;

          if (! lang) {
            $langInput.classList.add("--warn");
          }
          
          else {
            $langInput.classList.remove("--warn");
            const $ViewSubmit = document.querySelector(".VIEW.Submit");
            $ViewSubmit.dataset.lang = "de";
          }

          console.log($selectLang.value);
        }
    </script>
  `;

  const css = /*css*/`
    .VIEW.Submit > section {
      border: 1px solid black;
    }

    .viewSegment.Language {
      display: none;
    }

    .VIEW.Submit[data-lang=""] .viewSegment.Language {
      display: flex;
    }

    .VIEW.Submit[data-lang=""] .viewSegment.Form {
      display: none;
    }
  `;

  return ["submit.view", html, css];
};
