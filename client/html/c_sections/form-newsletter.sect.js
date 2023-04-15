const IconNext = getSnippet("icon-next");
const CircleButton = getSnippet("button-circle");

module.exports = () => {
    const html = splitTemp/*html*/ `
    <form class="NewsletterForm form" action="https://jungegrafik.us12.list-manage.com/subscribe/post?u=1b116b67c6aa316931ff78114&amp;id=14e5482c54&amp;f_id=00b343e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

        <p>Subscribe to our Newsletter!</p>

        <fieldset class="NewsletterForm formFieldGroup">

            <div class="formField TextShort Email --required">
                <div class="inputBox">
                    <input id="mce-EMAIL" class="input TextShort Email required email" name="EMAIL" type="email" placeholder="your email" pattern="^[\w0-9._%+-]+@[\w0-9.-]+\.[\w]{2,}$" maxlength="150" required="" aria-required="true">
                </div>
            </div>

            <div class="formField Submit">
                ${CircleButton({
                    id: "footer-newsletter-submit",
                    classes: "Submit",
                    type: "submit",
                    icon: IconNext(),
                })}
            </div>

        </fieldset>

        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
    </form>

    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
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

    .NewsletterForm p:first-child {
      margin-bottom: var(--size-S);
    }

    .NewsletterForm.Checkbox,
    .NewsletterForm.formFieldGroup {
      margin-bottom: var(--size-S);
    }

    .NewsletterForm .input {
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
