const Icon = getSnippet("icon-circle-m");

module.exports = () => {
  const html = splitTemp/*html*/`
    ${Icon({ symbol: "\u2193", classes: "Dropdown" })}
  `;

  const css = /*css*/`
    .Dropdown.icon {
      font-size: var(--fontSize-M)
    }
  `;

  return ["icon-dropdown.snip", html, css];
};
