const Underlined = getSnippet("text-underlined");

module.exports = () => {
  const html = splitTemp/*html*/`
    <section class="MENU box">
      <a href="/submit">${Underlined("Submit!")}</a>
      <a href="/award">${Underlined("Award")}</a>
      <a href="/association">${Underlined("Association")}</a>
      <a href="/contact">${Underlined("Contact")}</a>
    </section>
  `;

  const css = /*css*/`
    .MENU {
      background-color: var(--violet);
      height: 100vh;
      width: 100%;
      position: fixed;
      top: -1px;
      display: none;
      z-index: 900;
      padding-top: var(--headerHeight);
    }

    .MENU.box {
      padding-left: 0;
      padding-right: 0;
    }

    .MENU.--show {
      display: flex;
    }

    .MENU a {
      font-size: var(--fontSize-XL);
      line-height: var(--lineHeight-XL);
      padding-top: var(--spacing-M);
    }

    .MENU a .text {
      padding: var(--spacing-M);
    }

    .MENU a:hover {
      background-color: var(--white);
    }

    .HEADER a:focus,
    .HEADER button:focus {
      z-index: 10;
    }
  `;

  return ["menu.sect", html, css];
};
