module.exports = () => {
  const html = splitTemp/*html*/`
    <i class="icon Menu">
      <span class="symbol">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </span>
    </i>
  `;

  const css = /*css*/`
    .icon.Menu .symbol {
      display: flex;
      height: var(--spacing-M);
      width: var(--spacing-M);
      flex-direction: column;
      justify-content: space-between;
    }
  `;

  return ["icon-menu.snip", html, css];
};
