const $menuIcon = get$snippet("icon-menu");

module.exports = () => {
  const html = splitTemp/*html*/`
    <nav class="NAVIGATION">
      <a id="navigation-award" class="button Award" href="/award">Award</a>
      <a id="navigation-follow" class="button Follow" href="/follow">Follow</a>
      <a id="navigation-submit" class="button Submit red" href="/submit">Submit!</a>
      <script defer>
        let $Menu = null;
        function toggleMenu() {
          console.log("hello");
          if (! $Menu)
            $Menu = document.querySelector(".MENU");
          $Menu.classList.toggle("--show");
        }

      </script>
      <button id="navigation-menu" class="button Menu" onclick="toggleMenu()">
        <label class="label">Menu</label>
        ${$menuIcon()}
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
