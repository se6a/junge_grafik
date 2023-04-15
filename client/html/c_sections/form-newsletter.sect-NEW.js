const EmailInput = getSnippet("input-email");
const IconNext = getSnippet("icon-next");
const CircleButton = getSnippet("button-circle");

module.exports = () => {
    const html = splitTemp/*html*/ `
    <form
      class="NewsletterForm form"
      id="Newsletter"
      action="https://jungegrafik.us12.list-manage.com/subscribe/post?u=1b116b67c6aa316931ff78114&amp;id=14e5482c54&amp;f_id=00b343e0f0"
    >
      <section class="NewsletterForm formSegment Success">
        <p>
          Please check your mailbox and confirm your registration.
        </p>
      </section>

      <section class="NewsletterForm formSegment Subscribe">

        <p>
          Subscribe to our newsletter!
        </p>

        <fieldset class="NewsletterForm formFieldGroup">
 
          ${EmailInput({
              id: "mce-EMAIL",
              name: "e-mail",
              label: { all: "E-Mail" },
              placeholder: "your email",
              required: true,
          })}

          <div class="formField Submit">
            ${CircleButton({
                id: "footer-newsletter-submit",
                classes: "Submit",
                type: "submit",
                icon: IconNext(),
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

    const css = /*css*/ `
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

    .NewsletterForm.Subscribe p:first-child {
      margin-bottom: var(--size-S);
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
      min-height: unset;
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
