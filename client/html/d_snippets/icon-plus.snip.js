const IconLarge = getSnippet("icon-circle-l");

module.exports = () => {
  const symbol = '<span class="line"></span><span class="line"></span>';
  const html = splitTemp/*html*/`
    ${IconLarge({ symbol, classes: "Plus" })}
  `;

  const css = /*css*/`
  .icon.Plus .symbol {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
  }

  .icon.Plus .line {
    position: absolute;
    width: 40%;
  }

  .icon.Plus .line:first-child {
      transform: rotate(90deg);
    }
  `;

  return ["icon-plus.snip", html, css];
};
