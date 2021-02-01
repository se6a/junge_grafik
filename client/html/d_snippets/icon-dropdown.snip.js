module.exports = () => {
  const html = splitTemp/*html*/`
    <i class="icon medium Dropdown"></i>
  `;

  const css = /*css*/`
    .icon.Dropdown {
      position: absolute;
      right: var(--spacing-S);
      top: 0;
      bottom: 0;
      margin: auto;
    }
  `;

  return ["icon-dropdown.snip", html, css];
};
