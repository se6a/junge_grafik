const Checkbox   = getSnippet("input-checkbox");
const EmailInput = getSnippet("input-email");
const IconNext   = getSnippet("icon-next");

module.exports = () => {
  const html = splitTemp/*html*/`
    <footer class="FOOTER">

      <div class="Newsletter box">
        <header class="boxTitle">
          <h3>Newsletter</h3>
        </header>

        <div class="boxContent">
          <form id="Newsletter" action="javascript:" onsubmit="console.log('hello newsletter')">

            <div class="formField Checkbox">
              ${Checkbox({
                name: "terms",
                label: /*html*/`
                  <label for="footer-newsletter-agree">
                    I accept <a class="link">all the stuff</a>.
                  </label>`,
                required: true
              })}
            </div>

            <fieldset class="group">
              ${EmailInput({
                label: { de: "Email" },
                required: true
              })}

              <div class="formField Submit">
                <button id="footer-newsletter-submit" class="button" onclick="console.log('clicked')">
                  ${IconNext()}
                </button>
              </div>
            </fieldset>

          </form>
        </div>
      </div>

      <div class="Social box">
        <header class="boxTitle">
          <h3>Social</h3>
        </header>
        <div class="boxContent">
          <ul>
            <li><a class="link">Instagram</a></li>
            <li><a class="link">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div class="Network box">
        <header class="boxTitle">
          <h3>Network</h3>
        </header>
        <div class="boxContent">
          <ul>
            <li><a class="link">SGD</a></li>
            <li><a class="link">SGV</a></li>
            <li><a class="link">Weltformat</a></li>
          </ul>
        </div>
      </div>

      <div class="Links box">
        <header class="boxTitle">
          <h3>Links</h3>
        </header>
        <div class="boxContent">
          <ul>
            <li><a class="link">Imprint</a></li>
            <li><a class="link">Data privacy</a></li>
          </ul>
        </div>
      </div>

    </footer>
  `;

  const css = /*css*/`
    .FOOTER {
      background-color: var(--gray);
      height: var(--footerHeight);
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr;
      grid-auto-columns: 1fr;
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
    }

    .FOOTER h3 {
      font-size: 1.3em;
    }

    .FOOTER > .Newsletter .formField.Checkbox,
    .FOOTER > .Newsletter .group {
      margin-bottom: var(--spacing-S);
    }

    .FOOTER > .Newsletter .formField.Email .header {
      display: none;
    }

    .FOOTER .group {
      display: flex;
      column-gap: unset;
    }

    .FOOTER .formField {
      width: auto;
    }

    .FOOTER .Newsletter .input.Email {
      font-size: inherit;
      height: var(--circle-L);
    }

    .FOOTER .Newsletter .button {
      width: auto;
      padding: 0;
      margin: 0 0 0 var(--spacing-S);
      border: 0;
    }
  `;

  return ["footer.sect", html, css];
};
