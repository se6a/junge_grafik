const Checkbox = getSnippet("input-checkbox");
const EmailInput = getSnippet("input-email");
const IconNext = getSnippet("icon-next");

module.exports = () => {
  const html = /*html*/ `
    <form
      class="NewsletterForm"
      id="Newsletter"
      action="javascript:"
    >

      <div class="formField Checkbox">
        ${Checkbox({
          name: "terms",
          label: /*html*/ `
            <label for="footer-newsletter-agree">
              I accept <a class="link">all the stuff</a>.
            </label>`,
          required: true,
        })}
      </div>

      <fieldset class="group">
        ${EmailInput({
          label: { de: "Email" },
          required: true,
        })}

        <div class="formField Submit">
          <button id="footer-newsletter-submit" class="button" onclick="console.log('clicked')">
            ${IconNext()}
          </button>
        </div>
      </fieldset>

    </form>
  `;

  const css = /*css*/ `
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

    .formField {
      width: auto;
    }
    
    .Newsletter .input.Email {
      font-size: inherit;
      height: var(--circle-L);
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
