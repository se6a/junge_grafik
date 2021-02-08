module.exports = () => {
  const html = splitTemp/*html*/`
    <i class="icon medium Next"></i>
  `;

  const css = /*css*/`
    .icon.Next {
      position: absolute;
      display: flex;
      right: var(--spacing-S);
      top: 0;
      bottom: 0;
      margin: auto;
      height: var(--circle-M);
      width: var(--circle-M);
    }

    .icon.Next::after {
      content: "\u2192";
      display: block;
      margin: auto;
    }
  `;

  return ["icon-next.snip", html, css];
};
