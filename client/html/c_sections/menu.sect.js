module.exports = () => {
  const html = splitTemp/*html*/`
    <section class="MENU box">
      <a href="/award">Award</a>
      <a href="/association">Association</a>
      <a href="/contact">Contact</a>
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
      border-bottom: 2px solid black;
      font-size: var(--fontSize-XL);
      line-height: var(--lineHeight-XL);
      padding: var(--spacing-M) var(--spacing-M) 0 var(--spacing-M);
    }

    .MENU a:hover {
      background-color: white;
    }
  `;

  return ["menu.sect", html, css];
};
