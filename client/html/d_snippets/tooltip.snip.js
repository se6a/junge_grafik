const IconMedium = getSnippet("icon-circle-m");

module.exports = (tooltip) => {
  if (! tooltip) return "";

  const html = splitTemp/*html*/`
    <div class="Tooltip"
      onclick="toggleTooltip(this)"
    >
      ${IconMedium({
        symbol: "?",
        classes: "Tooltip",
        attributes: "tabindex='-1' onmouseleave='blurField(event)'"
      })}
      <p class="content">
        ${tooltip?.de}
      </p>
    </div>
  `;

  const css = /*css*/`
    .Tooltip {
      width: 100%;
      font-size: var(--fontSize-S);
    }

    .Tooltip > .content {
      display: inline-block;
      visibility: hidden;
      width: 100%;
      min-height: var(--spacing-L);
      background-color: var(--gray);
      border: var(--borderFull) solid currentColor;
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

    .Tooltip:hover .icon {
      background-color: white;
    }

    .Tooltip:focus {
      outline: none;
    }
  `;

  return ["tooltip.snip", html, css];
};
