module.exports = ({ classes, symbol }) => {
  const html = splitTemp/*html*/`
    <i class="icon circle medium ${classes}">
      <snap class="symbol">
        ${symbol}
      </snap>
    </i>
  `;

  const css = /*css*/`
    .icon.circle.medium {
      width: var(--circle-M);
      height: var(--circle-M);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid currentColor;
      border-radius: 100%;
    }
  `;

  return ["icon-circle-m.snip", html, css];
};
