const MenuIcon = getSnippet("icon-menu");
const Button = getSnippet("button");

module.exports = () => {
    const html = splitTemp/*html*/ `
    <nav class="NAVIGATION">
        ${Button({
            label: "",
            id: "navigation-menu",
            classes: "Menu",
            href: "/submit",
            icon: MenuIcon(),
            onclick: "toggleMenu(this)",
        })}
    </nav>
`;

    const css = /*css*/ `
    .NAVIGATION {
      height: 100%;
      display: flex;
      font-family: FeixenSansEdgy;
    }

    .HEADER .NAVIGATION > .button {
      border-width: var(--borderHalf);
    }

    .NAVIGATION > .button.Menu {
      width: var(--headerHeight);
      padding: 0;
      justify-content: center;
    }

    .NAVIGATION > .button.Submit {
      background-color: var(--yellow);
      width: auto;
    }

    .NAVIGATION > .button.Submit:hover {
      background-color: var(--darkViolet);
    }

    .--size-sm .NAVIGATION > .button:not(.Menu) {
      display: none;
    }
  `;

    return ["navigation.sect", html, css];
};
