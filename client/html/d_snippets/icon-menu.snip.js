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
      height: var(--iconSize-XS);
      width: var(--iconSize-XS);
      flex-direction: column;
      justify-content: space-between;
    }
    
    .icon.Menu .line {
      transition: opacity var(--animate-fast) ease;
    }

    .--open .icon.Menu .line:first-child,
    .--open .icon.Menu .line:last-child {
      opacity: 0;
    }
  `;

  return ["icon-menu.snip", html, css];
};
