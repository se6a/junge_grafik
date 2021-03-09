const Form          = getJs("form");
const InputCheckbox = getSnippet("input-checkbox");
const RoundedButton = getSnippet("button-rounded");
const Underlined    = getSnippet("text-underlined");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <form
      id="SubmitProjectForm"
      action="javascript:"
      data-state="initial"
      class="form"
    >
      <section class="formSegment Designer">
        <header>
          <h1>
            ${Underlined("Personenangaben")}
          </h1>
        </header>
        <div class="formContent">
          ${Form.create("form-submit-designer")}
        </div>
      </section>

      <section class="formSegment Project">
        <header>
          <h1>
            ${Underlined("Projekt")}
          </h1>
        </header>
        <div class="formContent">
          ${Form.create("form-submit-project")}
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

        <span class="message error">
          Etwas ist schief gelaufen!
        </span>

        <fieldset class="formFieldGroup">
          <div class="formField">
            ${RoundedButton({
              label: {
                de: `
                  <span class="initial">
                    Projekt abschicken \u2192
                  </span>
                  <span class="sending">
                    Wird gesendet...
                  </span>
                  <span class="error">
                    Nochmals versuchen?
                  </span>
                `,
                fr: "fr",
                it: "it"
              }
            })}
          </div>
        </fieldset>
      </section>

      <section class="formSegment Success">
        <header>
          <h1>
            ${Underlined("Glückwunsch!")}
          </h1>
        </header>
        <div class="formContent">
          Du bist dabei.
        </div>
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

    .Submit .button .initial,
    .Submit .button .sending,
    .Submit .button .error {
      display: none;
    }

    .Submit .message.error {
      font-size: var(--fontSize-L);
      display: none;
      margin-bottom: var(--size-L);
    }

    .Submit .formSegment.Success {
      display: none;
      min-height: 40vh;
    }

    #SubmitProjectForm[data-state="initial"] .Submit .button .initial {
      display: initial;
    }

    #SubmitProjectForm[data-state="sending"] .Submit .button .sending {
      display: initial;
    }

    #SubmitProjectForm[data-state="error"] .Submit .button .error {
      display: initial;
    }

    #SubmitProjectForm[data-state="error"] .message.error {
      display: block;
    }

    #SubmitProjectForm[data-state="success"] .formSegment {
      display: none;
    }

    #SubmitProjectForm[data-state="success"] .formSegment.Success {
      display: inherit;
    }

    @media screen and (max-width: 1024px) {

      .Submit .formFieldGroup {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
      }

      .Submit .formFieldGroup.Upload,
      .Submit .formFieldGroup.Description {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 750px) {
      .Submit .formFieldGroup {
        grid-template-columns: 1fr;
      }
    } 
  `;

  return ["form-project.sect", html, css];
};
