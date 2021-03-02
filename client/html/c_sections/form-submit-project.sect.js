const Form          = getJs("form");
const InputCheckbox = getSnippet("input-checkbox");
const RoundedButton = getSnippet("button-rounded");
const Underlined    = getSnippet("text-underlined");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <form
      id="SubmitProjectForm"
      action="javascript:"
    >
      <section class="formSegment Designer">
        <header>
          <h1>
            ${Underlined("Personenangaben")}
          </h1>
        </header>
        <div class="formContent">
          ${Form.create("new-designer")}
        </div>
      </section>

      <section class="formSegment Project">
        <header>
          <h1>
            ${Underlined("Projekt")}
          </h1>
        </header>
        <div class="formContent">
          ${Form.create("new-project")}
        </div>
      </section>

      <section class="formSegment Submit">
        <fieldset class="formFieldGroup ProjectWebsite">
          ${InputCheckbox({
            label: {
              de: "Ich habe alle Felder überprüft.",
              fr: "fr",
              it: "it"
            },
            required: true
          })}
        </fieldset>

        <fieldset class="formFieldGroup">
          <div class="formField">
            ${RoundedButton({
              label: {
                de: "Projekt abschicken \u2192",
                fr: "fr",
                it: "it"
              }
            })}
          </div>
        </fieldset>
      </section>

    </form>
  `;

  const css = /*css*/`
    .lang {
      display: none;
    }

    .VIEW[data-lang="it"] .lang.it {
      display: inline;
    }

    .VIEW[data-lang="fr"] .lang.fr {
      display: inline;
    }

    .VIEW[data-lang="de"] .lang.de {
      display: inline;
    }

    @media screen and (max-width: 1024px) {

      .formFieldGroup {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
      }

      .formFieldGroup.Upload,
      .formFieldGroup.Description {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 750px) {
      .formFieldGroup {
        grid-template-columns: 1fr;
      }
    } 
  `;

  return ["form-project.sect", html, css];
};
