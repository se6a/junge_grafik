const IconLarge = getSnippet("icon-circle-l");

module.exports = () => {
  const html = splitTemp/*html*/`
    ${IconLarge({ symbol: "+", classes: "Plus" })}
  `;

  return ["icon-plus.snip", html];
};
