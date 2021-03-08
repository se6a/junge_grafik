module.exports = () => {
  const html = splitTemp/*html*/`
    <i class="icon medium Next">
      <span class="symbol">
        \u2192
      </span>
    </i>
  `;

  const css = /*css*/`
    .icon.Next {
      display: flex;
      right: var(--spacing-S);
      top: 0;
      bottom: 0;
      margin: auto;
      height: var(--circle-L);
      width: var(--circle-L);
      border: var(--borderFull) solid currentColor;
      font-size: var(--fontSize-M);
      border-radius: 100%;
    }

    .icon.Next .symbol {
      display: block;
      margin: auto;
    }
  `;

  return ["icon-next.snip", html, css];
};
