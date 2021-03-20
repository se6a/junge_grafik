const Form            = getJs("form");
const InputCheckbox   = getSnippet("input-checkbox");
const RoundedButton   = getSnippet("button-rounded");
const UnderlinedMulti = getSnippet("text-underlined-multiline");

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
            ${UnderlinedMulti({
              fr: "Données personnelles",
              de: "Personenangaben",
              it: "Dati personali"
            })}
          </h1>
        </header>
        <div class="formContent">
          ${Form.create("form-submit-designer")}
        </div>
      </section>

      <section class="formSegment Project">
        <header>
          <h1>
            ${UnderlinedMulti("Projekt")}
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
              type: "submit",
              onclick: "validateForm(this, event)",
              classes: "Submit",
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

    </form>
  `;

  const css = /*css*/`
    .VIEW.Submit .formSegment.Designer {
      z-index: 30;
    }

    .VIEW.Submit .formSegment.Project {
      z-index: 20;
    }

    .VIEW.Submit .formSegment.Submit {
      z-index: 10;
    }

    .VIEW.Submit.--fr .label > .langOption.fr,
    .VIEW.Submit.--de .label > .langOption.de,
    .VIEW.Submit.--it .label > .langOption.it {
      position: initial;
      visibility: visible;
    }

    .VIEW.Submit.--fr .option > .langOption.fr,
    .VIEW.Submit.--de .option > .langOption.de,
    .VIEW.Submit.--it .option > .langOption.it {
      pointer-events: none;
      visibility: visible;
      position: inherit;
    }

    .VIEW.Submit.--fr .input > .langOption.fr,
    .VIEW.Submit.--de .input > .langOption.de,
    .VIEW.Submit.--it .input > .langOption.it {
      pointer-events: none;
      visibility: visible;
      position: inherit;
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

    #SubmitProjectForm[data-state="initial"] .label .initial {
      display: initial;
    }

    #SubmitProjectForm[data-state="sending"] .label .sending {
      display: initial;
    }

    #SubmitProjectForm[data-state="error"] .label .error {
      display: initial;
    }

    #SubmitProjectForm[data-state="error"] .message.error {
      display: block;
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
