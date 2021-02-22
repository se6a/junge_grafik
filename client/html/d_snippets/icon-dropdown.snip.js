const Icon = getSnippet("icon-circle-l");

module.exports = () => {
  const html = splitTemp/*html*/`
    ${Icon({ symbol: "\u2193", classes: "Dropdown" })}
  `;

  const css = /*css*/``;

  return ["icon-dropdown.snip", html, css];
};
