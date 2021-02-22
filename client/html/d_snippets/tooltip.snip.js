const IconMedium = getSnippet("icon-circle-m");

function returnEmpty() {
  return "";
}

function returnTooltip(tooltip) {
  const html = splitTemp/*html*/`
    <div class="Tooltip">
      ${IconMedium({ symbol: "?", classes: "Tooltip" })}
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

    .Tooltip:hover .icon {
      background-color: white;
    }

    .Tooltip:hover .content {
      display: inline-block;
    }
  `;

  return ["tooltip.snip", html, css];
}

module.exports = ({ tooltip }) => tooltip ? returnTooltip(tooltip) : returnEmpty();
