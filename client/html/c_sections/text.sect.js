const Underlined = getSnippet("text-underlined");

module.exports = ({ title, content, size }) => {
  size = size || "normal";

  let settingsClasses = "";

  settingsClasses += title ? "--useTitle" : "";

  const html = splitTemp/*html*/`
    <section class="TextSection box ${size} ${settingsClasses}">

      <header class="TextSection title">
        <h2>
          ${Underlined(title)}
        </h2>
      </header>

      <p class="TextSection content">
        ${content}
      </p>

    </section>
  `;

  const css = /*css*/`
    .TextSection.box.l {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
    }

    .TextSection.box.xl {
      font-size: var(--fontSize-XL);
      line-height: var(--lineHeight-XL);
    }

    .TextSection.title {
      display: none;
      margin-bottom: var(--spacing-S);
    }

    .TextSection.--useTitle > .title {
      display: initial;
    }

    .--size-lg .TextSection.content {
      width: calc(100% / 8 * 7);
    }
  `;

  return ["text.sect", html, css];
};
