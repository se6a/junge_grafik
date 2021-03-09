const MenuIcon = getSnippet("icon-menu");

module.exports = () => {
  const html = splitTemp/*html*/`
    <nav class="NAVIGATION">
      <a id="navigation-award" class="button Support" href="/support-us">Support!</a>
      <a id="navigation-follow" class="button Follow" href="https://instagram.com/jungegrafik" target="_blank">Follow!</a>
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

    .--size-sm .NAVIGATION > .button:not(.Menu) {
      display: none;
    }

    .--size-sm .NAVIGATION > .button.Menu {
      padding: 0;
    }

    .--size-sm .NAVIGATION > .button.Menu > .icon {
      margin: auto;
    }

    .--size-sm .NAVIGATION .label {
      display: none;
    }

  `;

  return ["navigation.sect", html, css];
};
