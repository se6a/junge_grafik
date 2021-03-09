const Checkbox   = getSnippet("input-checkbox");
const EmailInput = getSnippet("input-email");
const IconNext   = getSnippet("icon-next");

module.exports = () => {
  const html = splitTemp/*html*/`
    <form
      class="NewsletterForm"
      id="Newsletter"
      action="javascript:"
      onsubmit="console.log('hello newsletter')"
    >

      <div class="formField Checkbox">
        ${Checkbox({
          name: "terms",
          label: {
            all: "I accept to receive Newsletters from Junge Grafik."
          },
          required: true
        })}
      </div>

      <fieldset class="group">
        ${EmailInput({
          id: "footer-newsletter-email",
          label: { de: "Email" },
          placeholder: "your e-mail",
          required: true
        })}

        <div class="formField Submit">
          <button id="footer-newsletter-submit" class="button" onclick="console.log('clicked')">
            ${IconNext()}
          </button>
        </div>
      </fieldset>

    </form>
  `;

  const css = /*css*/`
    .NewsletterForm .formField.Checkbox,
    .NewsletterForm .group {
      margin-bottom: var(--spacing-S);
    }

    .NewsletterForm .group {
      display: flex;
      column-gap: unset;
    }

    .NewsletterForm .formField.Email .header {
      display: none;
    }

    .NewsletterForm .formField.Submit .button {
      padding: 0 0 0 var(--spacing-M);
    }

    .NewsletterForm .group {
      display: flex;
      column-gap: unset;
    }

    .formField {
      width: auto;
    }

    .NewsletterForm .group {
      display: flex;
      column-gap: unset;
    }
    
    .Newsletter .input.Email {
      font-size: inherit;
      height: var(--circle-L);
    }

    .NewsletterForm .group {
      display: flex;
      column-gap: unset;
    }
    
    .Newsletter .button {
      width: auto;
      padding: 0;
      margin: 0 0 0 var(--spacing-S);
      border: 0;
    }
  `;

  return ["form-newsletter.sect", html, css];
};
