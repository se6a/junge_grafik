module.exports = ({ classes, symbol, attributes = "" }) => {
  const html = splitTemp/*html*/`
    <i class="icon circle medium ${classes}" ${attributes}>
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
      border: var(--borderFull) solid currentColor;
      border-radius: 100%;
    }
  `;

  return ["icon-circle-m.snip", html, css];
};
