const $iconMedium = get$snippet("icon-circle-m");

module.exports = (tooltip) => {
  const html = splitTemp/*html*/`
    <div class="Tooltip">
      ${$iconMedium("Tooltip")}
      <p class="content">
        ${tooltip.de}
      </p>
    </div>
  `;

  const css = /*css*/`
    .Tooltip {
      width: 100%;
      font-size: var(--fontSize-S);
    }

    .Tooltip > .content {
      display: none;
      width: 100%;
      min-height: var(--spacing-L);
      background-color: var(--gray);
      border: 2px solid black;
      position: absolute;
      padding: var(--spacing-S);
      margin-top: var(--spacing-XS);
      left: 0;
      z-Index: 1000;
    }

    .Tooltip > .icon {
      margin-left: 10px;
      cursor: pointer;
    }

    .Tooltip .icon::after {
      content: "?";
    }

    .Tooltip:hover .icon {
      background-color: white;
    }

    .Tooltip:hover .content {
      display: inline-block;
    }
  `;

  return ["icon-tooltip.snip", html, css];
};
