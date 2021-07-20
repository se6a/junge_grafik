const ButtonUnderlined = getSnippet("button-underlined");

module.exports = () => {
  const html = splitTemp/*html*/`
    <section class="MENU box">

      ${ButtonUnderlined({
        label: { all: "Award" },
        classes: "Award",
        type: "link",
        href: "/award",
        size: "XL"
      })}

      ${ButtonUnderlined({
        label: { all: "Association" },
        classes: "Association",
        type: "link",
        href: "/association",
        size: "XL"
      })}

      ${ButtonUnderlined({
        label: { all: "Contact" },
        classes: "Contact",
        type: "link",
        href: "/contact",
        size: "XL"
      })}

      ${ButtonUnderlined({
        label: { all: "Follow us!" },
        classes: "Follow",
        type: "link",
        href: "/follow-us",
        size: "XL"
      })}

      ${ButtonUnderlined({
        label: { all: "Support us!" },
        classes: "Support",
        type: "link",
        href: "/support-us",
        size: "XL"
      })}
    </section>
  `;

  const css = /*css*/`
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
