const $iconMedium = get$snippet("icon-circle-m");

module.exports = () => {
  const html = splitTemp/*html*/`
    ${$iconMedium({ class: "Dropdown" })}
  `;

  const css = /*css*/`

    .icon.Dropdown::after {
      content: "\u2193";
      display: block;
    }
  `;

  return ["icon-dropdown.snip", html, css];
};
