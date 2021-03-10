const Checkbox     = getSnippet("input-checkbox");
const EmailInput   = getSnippet("input-email");
const IconNext     = getSnippet("icon-next");
const CircleButton = getSnippet("button-circle");

module.exports = () => {
  const html = splitTemp/*html*/`
    <form
      class="NewsletterForm form"
      id="Newsletter"
      action="javascript:"
      onsubmit="subscribeNewsletter(this)"
    >
      <section class="NewsletterForm formSegment Success">
        <p>
          Thanks! You have successfully subscribed to our newsletter.
        </p>
      </section>

      <section class="NewsletterForm formSegment Subscribe">

        <div class="NewsletterForm formField Checkbox">
          ${Checkbox({
            name: "terms",
            label: {
              all: "I accept to receive Newsletters from Junge Grafik."
            },
            required: true
          })}
        </div>

        <fieldset class="NewsletterForm formFieldGroup">
          ${EmailInput({
            id: "footer-newsletter-email",
            name: "e-mail",
            label: { all: "E-Mail" },
            placeholder: "your email",
            required: true
          })}

          <div class="formField Submit">
            ${CircleButton({
              id: "footer-newsletter-submit",
              classes: "Submit",
              type: "submit",
              icon: IconNext()
            })}
          </div>
        </fieldset>

        <section class="NewsletterForm formSegment Failed">
          <p>
            Something went wrong!
          </p>
        </section>

      </section>
    </form>
  `;

  const css = /*css*/`
    .NewsletterForm .label {
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
    }

    .NewsletterForm.formFieldGroup {
      display: flex;
      column-gap: unset;
    }

    .NewsletterForm .formField {
      width: auto;
    }

    .NewsletterForm .formField.Submit {
      flex-grow: 0;
    }

    .NewsletterForm.Checkbox,
    .NewsletterForm.formFieldGroup {
      margin-bottom: var(--size-S);
    }

    .NewsletterForm > .Email > .header {
      display: none;
    }

    .NewsletterForm .Email.input {
      font-size: inherit;
      height: var(--iconSize-M);
    }

    .NewsletterForm .Submit.button {
      width: auto;
      padding: 0;
      margin: 0 0 0 var(--size-S);
      border: 0;
    }

    .NewsletterForm .formSegment.Success,
    .NewsletterForm .formSegment.Failed {
      visibility: hidden;
      position: absolute;
    }

    .NewsletterForm .formSegment.Failed {
      color: var(--red);
    }

    .NewsletterForm.--subscribed .formSegment.Subscribe {
      visibility: hidden;
    }

    .NewsletterForm.--subscribed .formSegment.Success {
      visibility: visible; 
    }

    .NewsletterForm.--failed .formSegment.Failed {
      visibility: visible; 
    }
  `;

  return ["form-newsletter.sect", html, css];
};
