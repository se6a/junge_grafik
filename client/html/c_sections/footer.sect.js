const Checkbox = getSnippet("input-checkbox");
const IconNext = getSnippet("icon-next");

module.exports = () => {
  const html = splitTemp/*html*/`
    <footer class="FOOTER">

      <div class="Newsletter box">
        <header class="boxTitle">
          <h3>Newsletter</h3>
        </header>

        <div class="boxContent">
          <form id="Newsletter">

            <div class="formField Checkbox">
              ${Checkbox({
                label: /*html*/`
                  <label for="footer-newsletter-agree">
                    I accept <a class="link">all the stuff</a>.
                  </label>`,
                required: true
              })}
            </div>

            <fieldset class="group">
              <div class="formField Email">
                <label for="footer-newsletter-email" style="display: none">E-mail</label>
                <input id="footer-newsletter-email" class="input Email" type="email" placeholder="Your email">
              </div>

              <div class="formField Submit">
                <button id="footer-newsletter-submit" class="button" type="button">
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

    .FOOTER form > .formField.Checkbox,
    .FOOTER form > .group {
      margin-bottom: var(--spacing-S);
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
      padding: 0 0 0 var(--spacing-S);
      border: 0;
    }
  `;

  return ["footer.sect", html, css];
};
