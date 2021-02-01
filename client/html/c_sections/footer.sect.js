const $checkbox = get$snippet("input-checkbox");

module.exports = () => {
  const html = splitTemp/*html*/`
    <footer class="FOOTER">

      <div class="Newsletter box">
        <header class="boxTitle">
          <h3>Newsletter</h3>
        </header>
        <div class="boxContent">
          <form>
            <div class="Agreement formField">
              ${$checkbox('id="footer-newsletter-agree"', "console.log('click the box')")}
              <label for="footer-newsletter-agree">
                I agree to <a class="link">all the stuff</a>.
              </label>
            </div>
            <div class="Email formField">
              <label for="footer-newsletter-email" style="display: none">E-mail</label>
              <input id="footer-newsletter-email" type="email" placeholder="Your email">
              <button id="footer-newsletter-submit" class="button circle"></button>
            </div>
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
  `;

  return ["footer.sect", html, css];
};
