module.exports = ({ symbol, classes }) => {
  const html = splitTemp/*html*/`
    <i class="icon circle small ${classes}">
      <span class="symbol">
        ${symbol}
      </span>
    </i>
  `;

  const css = /*css*/`
    .icon.circle.small {
      width: var(--circle-S);
      height: var(--circle-S);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid currentColor;
      border-radius: 100%;
    }
  `;

  return ["icon-circle-s.snip", html, css];
};
