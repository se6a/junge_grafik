module.exports = ({ classes, symbol }) => {
  const html = splitTemp/*html*/`
    <i class="icon circle large ${classes}">
      <span class="symbol">
        ${symbol}
      </span>
    </i>
  `;

  const css = /*css*/`
    .icon.circle.large {
      width: var(--iconSize-L);
      height: var(--iconSize-L);
      display: flex;
      justify-content: center;
      align-items: center;
      border: var(--borderFull) solid currentColor;
      border-radius: 100%;
    }
  `;

  return ["icon-circle-l.snip", html, css];
};
