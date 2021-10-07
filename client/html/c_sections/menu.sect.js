const ButtonUnderlined = getSnippet("button-underlined");

module.exports = (crntView) => {
  const MenuItems = [
    {
      label: { all: "Award" },
      classes: "Award",
      type: "link",
      href: "/award",
      size: "XL",
    },

    {
      label: { all: "Winners" },
      classes: "Winners",
      type: "link",
      href: "/winners",
      size: "XL",
    },

    {
      label: { all: "Association" },
      classes: "Association",
      type: "link",
      href: "/association",
      size: "XL",
    },

    {
      label: { all: "Contact" },
      classes: "Contact",
      type: "link",
      href: "/contact",
      size: "XL",
    },

    // {
    //   label: { all: "Shop" },
    //   classes: "Shop",
    //   type: "link",
    //   href: "/shop",
    //   size: "XL",
    // },

    {
      label: { all: "Follow us!" },
      classes: "Follow-us",
      type: "link",
      href: "/follow-us",
      size: "XL",
    },

    {
      label: { all: "Support us!" },
      classes: "Support-us",
      type: "link",
      href: "/support-us",
      size: "XL",
    },
  ];

  const html = [
    '<section class="MENU box">',
    ...MenuItems.map((item) => {
      if (item.classes === crntView) item.classes = item.classes + " --current";
      return ButtonUnderlined(item);
    }),
    "</section>",
  ];

  const css = /*css*/ `
    .MENU {
      background-color: var(--violetBright);
      height: 100vh;
      width: 100%;
      position: fixed;
      top: -1px;
      display: none;
      z-index: 900;
      padding-top: var(--headerHeight);
    }

    .MENU.box {
      padding-left: 0;
      padding-right: 0;
    }

    .MENU .button.UnderlinedButton {
      display: block;
      height: auto;
      width: 100%;
      padding: var(--size-M) 0 0 0;
      margin: 0;
    }

    .MENU .button.UnderlinedButton.--current {
      background-color: white;
    }

    .MENU .button.UnderlinedButton.Follow,
    .MENU .button.UnderlinedButton.Support {
      color: var(--violet);
    }

    .MENU .button.UnderlinedButton .line {
      visibility: visible;
    }

    .MENU .button.UnderlinedButton:hover,
    .MENU .button.UnderlinedButton:focus {
      background-color: var(--white);
    }

    .MENU .textUnderlined .text {
      padding-left: var(--size-S);
    }

    .MENU.--show {
      display: flex;
    }
  `;

  return ["menu.sect", html, css];
};
