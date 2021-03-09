const ButtonUnderlined = getSnippet("button-underlined");

module.exports = () => {
  const html = splitTemp/*html*/`
    <section class="MENU box">
      ${ButtonUnderlined({
        label: { all: "Submit!" },
        type: "link",
        href: "/submit"
      })}

      ${ButtonUnderlined({
        label: { all: "Award" },
        type: "link",
        href: "/award"
      })}

      ${ButtonUnderlined({
        label: { all: "Association" },
        type: "link",
        href: "/association"
      })}

      ${ButtonUnderlined({
        label: { all: "Contact" },
        type: "link",
        href: "/contact"
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

    .MENU.--show {
      display: flex;
    }
  `;

  return ["menu.sect", html, css];
};
