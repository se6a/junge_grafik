const Form             = getJs("form");
const InputCheckbox    = getSnippet("input-checkbox");
const RoundedButton    = getSnippet("button-rounded");
const UnderlinedMulti  = getSnippet("text-underlined-multiline");
const ButtonUnderlined = getSnippet("button-underlined");

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
              de: "Personalien",
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
            ${UnderlinedMulti({
              fr: "Détails du projet",
              de: "Angaben zum Projekt",
              it: "Indicazioni per il progetto"
            })}
          </h1>
        </header>
        <div class="formContent">
          ${Form.create("form-submit-project")}
        </div>
      </section>

      <section class="formSegment Submit">
        <fieldset class="formFieldGroup oneColumn">
          ${InputCheckbox({
            label: {
              fr: "J’ai rempli tous les champs avec exactitude et j’ai vérifié mes renseignements.",
              de: "Ich habe alle Felder wahrheitsgetreu ausgefüllt und meine Angaben überprüft.",
              it: "Ho compilato tutti i campi in modo veritiero e ho controllato i miei dati."
            },
            required: true
          })}

          ${InputCheckbox({
            label: {
              fr: `
                Je déclare avoir lu, compris et accepté les
                <a class="Link textButton" href="/consentement" target="_blanK">
                  conditions de déclaration
                </a>
                d’accord.
                Je donne par la présente mon accord pour que toutes les images et les textes de mon projet soient publiés sur tous les canaux de communication de « Jeune Graphisme ».
              `,
              de: `
                Ich habe die
                <a class="Link textButton" href="/consentement" target="_blanK">
                  Einverständniserklärung
                </a>
                gelesen und akzeptiere die Bedingungen. 
                Hiermit gebe ich mein Einverständnis, dass alle Bilder und Texte meines Projekts auf allen Kanälen der Junge Grafik publiziert werden dürfen.
              `,
              it: `
                
                Ho letto il
                <a class="Link textButton" href="/consentement" target="_blanK">
                  modulo di consenso
                </a>
                e accetto le condizioni.
                Do il mio consenso affinché tutte le immagini e i testi del mio progetto possano essere pubblicati su tutti i canali di Giovane Grafica.
              `
            },
            required: true
          })}
        </fieldset>

        <span class="message error">
          <span class="langOption fr">
            Quelque chose n’a pas fonctionné. Veuillez nous contacter si l’envoi échoue lors d’un nouvel essai :
          </span>
          <span class="langOption de">
            Etwas ist schiefgelaufen. Melde dich bitte bei uns, falls die Einsendung beim zweiten Mal wieder nicht funktioniert:
          </span>
          <span class="langOption it">
            Qualcosa è andato storto, riprova. Se al secondo tentativo non funziona ti preghiamo di metterti in contatto direttamente con noi:
          </span>
          <span>
              ${ButtonUnderlined({
                classes: "Contact contactLink",
                attr: `data-contact="${easyEncode("info@jungegrafik.ch")}"`,
                label: "contact",
                size: "L"
              })}
            </span>
        </span>

        <fieldset class="formFieldGroup">
          <div class="formField">
            ${RoundedButton({
              type: "submit",
              onclick: "validateForm(this, event)",
              classes: "Submit",
              label: {
                fr: `
                  <span class="initial">
                    Envoyer le projet \u2192
                  </span>
                  <span class="sending">
                    Projet envoyé …
                  </span>
                  <span class="error">
                    Essayer à nouveau \u2192
                  </span>
                `,
                de: `
                  <span class="initial">
                    Projekt abschicken \u2192
                  </span>
                  <span class="sending">
                    Wird gesendet …
                  </span>
                  <span class="error">
                    Nochmal versuchen \u2192
                  </span>
                `,
                it: `
                  <span class="initial">
                    Inviare il progetto \u2192
                  </span>
                  <span class="sending">
                    Invio …
                  </span>
                  <span class="error">
                    Prova di nuovo \u2192
                  </span>
                `
              }
            })}
          </div>
        </fieldset>
      </section>

    </form>

    <section>
    </section>
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

      .Submit .formFieldGroup.threeColumns {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
      }

      .Submit .formFieldGroup.Upload,
      .Submit .formFieldGroup.Description {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 750px) {
      .Submit .formFieldGroup.threeColumns,
      .Submit .formFieldGroup.twoColumns {
        grid-template-columns: 1fr;
      }
    } 
  `;

  return ["form-project.sect", html, css];
};
