module.exports = () => {
  const html = splitTemp/*html*/`
    <nav class="NAVIGATION">
      <a id="navigation-award" class="button">Award</a>
      <a id="navigation-follow" class="button">Follow</a>
      <a id="navigation-submit" class="button red">Submit!</a>
      <button id="navigation-menu" class="button">
        <span>Menu</span>
        <div class="sandwich">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </nav>
  `

  const css = /*css*/`
    .NAVIGATION {
      height: 100%;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr;
      grid-auto-columns: 1fr;
    }
  `

  return ["navigation", html, css]
}