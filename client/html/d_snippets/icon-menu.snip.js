module.exports = () => {
  const html = splitTemp/*html*/`
    <i class="icon menu">
      <span></span>
      <span></span>
      <span></span>
    </i>
  `;

  const css = /*css*/`
    .icon.menu {
      display: flex;
      height: 1.5em;
      width: 1.5em;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .icon.menu > span {
      background-color: black;
      height: 0;
      border: 1px solid black;
    }
  `;

  return ["icon-menu.snip", html, css];
};
