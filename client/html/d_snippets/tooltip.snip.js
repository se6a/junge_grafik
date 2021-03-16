const IconSmall = getSnippet("icon-circle-s");

module.exports = (tooltip) => {
  if (! tooltip) return "";

  const html = splitTemp/*html*/`
    <div
      class="Tooltip"
      tabindex="0"
      onclick="toggleTooltip(this)"
      onblur="closeTooltip(this)"
    >
      ${IconSmall({
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
      margin-left: var(--size-S);
      cursor: pointer;
    }

    .Tooltip > .content {
      display: inline-block;
      width: 100%;
      min-height: var(--size-L);
      background-color: var(--colorKey);
      color: var(--white);
      border: var(--borderFull) solid var(--colorKey);
      position: absolute;
      padding: var(--size-M);
      margin-top: var(--size-XS);
      left: 0;
      z-Index: 1000;
      visibility: hidden;
      white-space: pre-line;
    }

    .Tooltip:focus {
      outline: none;
    }

    .Tooltip:hover .icon.circle,
    .Tooltip:focus .icon.circle,
    .Tooltip.--open .icon.circle {
      background-color: var(--colorKey);
      border-color: var(--colorKey);
      color: var(--white);
    }

    .Tooltip.--open .content {
      visibility: visible;
    }

    .Tooltip .langOption {
      visibility: hidden;
    }

    .--fr .Tooltip.--open .langOption.fr,
    .--de .Tooltip.--open .langOption.de,
    .--it .Tooltip.--open .langOption.it {
      visibility: visible;
      position: initial;
    }
  `;

  return ["tooltip.snip", html, css];
};
