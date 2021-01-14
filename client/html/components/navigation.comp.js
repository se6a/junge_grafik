const style = /*css*/ `

.NAVIGATION ul {
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
}

`

module.exports = () => /*html*/ `
<style>${style}</style>

<nav class="NAVIGATION">
    <ul>
      <li><a id="navigation-award" class="button">Award</a></li>
      <li><a id="navigation-follow" class="button">Follow</a></li>
      <li><a id="navigation-submit" class="button red">Submit!</a></li>
      <li>
        <button id="navigation-menu" class="button">
          <span>Menu</span>
          <div class="sandwich">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </li>
    </ul>
</nav>

`