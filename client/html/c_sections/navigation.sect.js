const MenuIcon = getSnippet("icon-menu");
const Button = getSnippet("button");

module.exports = () => {
  const html = splitTemp/*html*/`
    <nav class="NAVIGATION">

      ${Button({
        label: "Support!!!!!!!!!!!!",
        type: "link",
        id: "navigation-support",
        classes: "Support",
        href: "/support-us"
      })}

      ${Button({
        label: "Follow!",
        type: "link",
        id: "navigation-follow",
        classes: "Follow",
        href: "/follow-us"
      })}

      ${Button({
        label: "Submit!",
        type: "link",
        id: "navigation-submit",
        classes: "Submit",
        href: "/submit"
      })}

      ${Button({
        label: "Menu",
        id: "navigation-menu",
        classes: "Menu",
        href: "/submit",
        icon : MenuIcon(),
        onclick: "toggleMenu(this)"
      })}

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
      border-width: var(--borderHalf);
    }

    .NAVIGATION > .button.Submit {
      background-color: var(--yellow);
    }

    .NAVIGATION > .button.Submit:hover {
      background-color: var(--darkViolet);
    }

    .NAVIGATION .button {
      z-index: 10;
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
