const Underlined = getSnippet("text-underlined");

module.exports = () => {
  const html = splitTemp/*html*/`
    <section class="MENU box">
      <a href="/award">${Underlined("Award")}</a>
      <a href="/association">${Underlined("Association")}</a>
      <a href="/contact">${Underlined("Contact")}</a>
    </section>
  `;

  const css = splitTemp/*css*/`
    .MENU {
      background-color: var(--gray);
      height: 100vh;
      width: 100%;
      position: fixed;
      display: none;
      z-index: 900;
      padding-top: var(--headerHeight);
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
      background-color: white;
    }
  `;

  return ["menu.sect", html, css];
};
