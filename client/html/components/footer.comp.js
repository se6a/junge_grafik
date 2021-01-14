const $checkbox = require("./checkbox.comp.js")

const style = /*css*/ `

.FOOTER {
  background-color: var(--gray);
  height: var(--footerHeight);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
}

.FOOTER h2 {
  font-size: 1.3em;
}

`

module.exports = () => /*html*/ `
<style>${style}</style>

<footer class="FOOTER">

  <div class="Newsletter box">
    <header class="title">
      <h2>Newsletter</h2>
    </header>
    <div class="content">
      <form>
        <div class="Agreement formField">
          ${$checkbox('id="footer-newsletter-agree"', "console.log('heyo')")}
          <label for="footer-newsletter-agree">
            <a class="link">I agree to all the stuff.</a>
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
    <header class="title">
      <h2>Social</h2>
    </header>
    <div class="content">
      <ul>
        <li><a class="link">Instagram</a></li>
        <li><a class="link">Facebook</a></li>
      </ul>
    </div>
  </div>

  <div class="Network box">
    <header class="title">
      <h2>Network</h2>
    </header>
    <div class="content">
      <ul>
        <li><a class="link">SGD</a></li>
        <li><a class="link">SGV</a></li>
        <li><a class="link">Weltformat</a></li>
      </ul>
    </div>
  </div>

  <div class="Links box">
    <header class="title">
      <h2>Links</h2>
    </header>
    <div class="content">
      <ul>
        <li><a class="link">Imprint</a></li>
        <li><a class="link">Data privacy</a></li>
      </ul>
    </div>
  </div>

</footer>

`