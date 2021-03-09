const DropdownIcon = getSnippet("icon-dropdown");

module.exports = ({ title, content }) => {
  const html = splitTemp/*html*/`
    <article
      class="Dropdown"
      onclick="toggleDropdown(this)"
      onblur="closeDropdown(this)"
      tabindex="0"
    >

      <header class="header box">
        <h3>
          <span>
            ${title}
          </span>
        <h3>
        ${DropdownIcon()}
      </header>

      <div class="wrapper">
        <div class="content box">
          ${content}
        </div>
      </div>

    </article>
  `;

  const css = /*css*/`
    .Dropdown .header.box {
      padding-top: var(--size-S);
      padding-bottom: var(--size-S);
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      cursor: pointer;
    }

    .Dropdown .header h3 {
      margin: 0;
    }

    .Dropdown .header span {
      vertical-align: sub;
    }

    .Dropdown > .wrapper {
      overflow: hidden;
      height: 0;
      transition: height 300ms ease;
    }

    .Dropdown > .wrapper > .content {
      background-color: var(--white);
    }
  `;

  return ["Dropdown.snip", html, css];
};
