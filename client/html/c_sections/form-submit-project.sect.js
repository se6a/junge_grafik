const Form = getJs("form");
const InputCheckbox = getSnippet("input-checkbox");
const RoundedButton = getSnippet("button-rounded");
const UnderlinedMulti = getSnippet("text-underlined-multiline");
const ButtonUnderlined = getSnippet("button-underlined");

module.exports = (data) => {
    const html = splitTemp/*html*/ `
  ${buildSections(data?.sections || [])}

    <form
      id="SubmitProjectForm"
      action="javascript:"
      data-state="initial"
      class="form box"
    >

      <section class="formSegment Designer">
        <header>
          <h1>
            ${UnderlinedMulti({
                fr: "Données personnelles",
                de: "Personalien",
                it: "Dati personali",
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
                it: "Indicazioni per il progetto",
            })}
          </h1>
        </header>
        <div class="formContent">
          ${Form.create("form-submit-project")}
        </div>
      </section>

      <section class="formSegment Submit">
        <fieldset class="formFieldGroup checkboxGroup twoColumns">
          ${InputCheckbox({
              label: {
                  fr: "J’ai rempli tous les champs avec exactitude et j’ai vérifié mes renseignements.",
                  de: "Ich habe alle Felder wahrheitsgetreu ausgefüllt und meine Angaben überprüft.",
                  it: "Ho compilato tutti i campi in modo veritiero e ho controllato i miei dati.",
              },
              required: true,
          })}

          ${InputCheckbox({
              label: {
                  fr: `
                Je déclare avoir lu, compris et accepté les
                <a class="Link textButton" href="/terms-of-submission" target="_blank">
                  conditions de déclaration
                </a>
                d’accord.
                Je donne par la présente mon accord pour que toutes les images et les textes de mon projet soient publiés sur tous les canaux de communication de « Jeune Graphisme ».
              `,
                  de: `
                Ich habe die
                <a class="Link textButton" href="/terms-of-submission" target="_blank">
                  Einverständniserklärung
                </a>
                gelesen und akzeptiere die Bedingungen. 
                Hiermit gebe ich mein Einverständnis, dass alle Bilder und Texte meines Projekts auf allen Kanälen der Junge Grafik publiziert werden dürfen.
              `,
                  it: `
                
                Ho letto il
                <a class="Link textButton" href="/terms-of-submission" target="_blank">
                  modulo di consenso
                </a>
                e accetto le condizioni.
                Do il mio consenso affinché tutte le immagini e i testi del mio progetto possano essere pubblicati su tutti i canali di Giovane Grafica.
              `,
              },
              required: true,
          })}

          ${InputCheckbox({
              label: {
                  fr: "Je suis conscient que le texte de mon projet ainsi que les informations qui y sont liées ont une importance pour l'évaluation et j'ai donc veillé à les rédiger de manière aussi impeccable et de haute qualité que possible.",
                  de: "Ich bin mir bewusst, dass der Text meines Projekts sowie die damit verbundenen Angaben von Bedeutung für die Bewertung sind und habe daher Wert darauf gelegt, diese möglichst fehlerfrei und in guter Qualität zu verfassen.",
                  it: "Sono consapevole che il testo del mio progetto e le informazioni ad esso correlate sono importanti per la valutazione e ho quindi prestato attenzione a redigerli il più possibile privi di errori e di alta qualità.",
              },
              required: true,
          })}

          ${InputCheckbox({
              label: {
                  fr: "Si mon projet est récompensé, je suis disponible pour une entrevue de 20 minutes par appel vidéo. Les entrevues auront lieu en octobre 2023. Je confirme que je peux prendre un rendez-vous pendant cette période.",
                  de: "Falls mein Projekt ausgezeichnet wird, stehe ich für ein 20-minütiges Interview per Videoanruf zur Verfügung. Die Interviews finden im Oktober 2023 statt. Ich bestätige, dass ich in diesem Zeitraum einen Termin vereinbaren kann.",
                  it: "Nel caso in cui il mio progetto venga premiato, sarò disponibile per un'intervista di 20 minuti tramite videochiamata. Le interviste si svolgeranno nell'ottobre del 2023. Confermo di poter fissare un appuntamento in questo periodo.",
              },
              required: true,
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
                  size: "L",
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
                `,
                },
            })}
          </div>
        </fieldset>
      </section>

    </form>

    <section>
    </section>
  `;

    const css = /*css*/ `
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
