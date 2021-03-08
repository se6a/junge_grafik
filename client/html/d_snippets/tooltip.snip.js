const IconMedium = getSnippet("icon-circle-m");

module.exports = (tooltip) => {
  if (! tooltip) return "";

  const html = splitTemp/*html*/`
    <div
      class="Tooltip"
      tabindex="0"
      onclick="toggleTooltip(this)"
      onblur="closeTooltip(this)"
    >
      ${IconMedium({
        symbol: "?",
        classes: "Tooltip"
      })}
      <div class="content">
        ${lang`<span>${tooltip}</span>`}
      </div>
    </div>
  `;

  const css = /*css*/`
    .Tooltip {
      margin-left: 10px;
      cursor: pointer;
    }

    .Tooltip > .content {
      display: inline-block;
      width: 100%;
      min-height: var(--spacing-L);
      background-color: var(--green);
      border: var(--borderFull) solid currentColor;
      position: absolute;
      padding: var(--spacing-M);
      margin-top: var(--spacing-XS);
      left: 0;
      z-Index: 1000;
      visibility: hidden;
      white-space: pre-line;
    }

    .Tooltip:focus {
      outline: none;
    }

    .Tooltip:hover .icon.circle,
    .Tooltip.--open .icon.circle {
      background-color: white;
      border-width: var(--borderHover);
    }

    .Tooltip.--open .content {
      visibility: visible;
    }
  `;

  return ["tooltip.snip", html, css];
};
