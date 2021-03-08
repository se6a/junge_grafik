const MenuIcon = getSnippet("icon-menu");

module.exports = () => {
  const html = splitTemp/*html*/`
    <nav class="NAVIGATION">
      <a id="navigation-award" class="button Support" href="/award">Support!</a>
      <a id="navigation-follow" class="button Follow" href="/follow">Follow!</a>
      <a id="navigation-submit" class="button Submit" href="/submit">Submit!</a>

      <button id="navigation-menu" class="button Menu" onclick="toggleMenu(this)">
        <label class="label">Menu</label>
        ${MenuIcon()}
      </button>
    </nav>
  `;

  const css = /*css*/`
    .NAVIGATION {
      height: 100%;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr;
      grid-auto-columns: 1fr;
      font-family: FeixenSansEdgy;
    }

    .NAVIGATION > .button {
      border: var(--borderHalf) solid currentColor;
    }

    .NAVIGATION > .button.Submit {
      background-color: var(--yellow);
    }

    .NAVIGATION > .button:hover {
      background-color: var(--gray);
    }

    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 500px) {
      .NAVIGATION .button.Menu {
        justify-content: center;
      }

      .NAVIGATION .button.Menu .label {
        display: none;
      }

      .NAVIGATION .button.Menu .icon {
        height: var(--spacing-L);
        width: var(--spacing-L);
      }
    }
  `;

  return ["navigation.sect", html, css];
};
