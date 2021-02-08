const $iconMedium = get$snippet("icon-circle-m");

module.exports = () => {
  const html = splitTemp/*html*/`
    ${$iconMedium({ class: "Plus" })}
  `;

  const css = /*css*/`

    .icon.Plus::after {
      content: "+";
      display: block;
    }
  `;

  return ["icon-plus.snip", html, css];
};
