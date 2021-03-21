const ButtonUnderlined = getSnippet("button-underlined");

module.exports = () => {
  const html = splitTemp/*html*/`
    <section class="MENU box">
      ${ButtonUnderlined({
        label: { all: "Submit!" },
        type: "link",
        href: "/submit",
        size: "XL"
      })}

      ${ButtonUnderlined({
        label: { all: "Award" },
        type: "link",
        href: "/award",
        size: "XL"
      })}

      ${ButtonUnderlined({
        label: { all: "Association" },
        type: "link",
        href: "/association",
        size: "XL"
      })}

      ${ButtonUnderlined({
        label: { all: "Contact" },
        type: "link",
        href: "/contact",
        size: "XL"
      })}
    </section>
  `;

  const css = /*css*/`
    .MENU {
      background-color: var(--violet);
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
