const Underlined = getSnippet("text-underlined-multiline");

module.exports = ({ title, content, size }) => {
  size = size || "normal";

  let settingsClasses = "";

  settingsClasses += title ? "--useTitle" : "";

  const html = splitTemp/*html*/ `
    <section class="TextSection box ${size} ${settingsClasses}">

      <header class="TextSection title">
        <h2>
          ${Underlined(title)}
        </h2>
      </header>

      <div class="TextSection content">
        ${content}
      </div>

    </section>
  `;

  const css = /*css*/ `
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
      margin-bottom: var(--size-S);
    }

    .TextSection.--useTitle > .title {
      display: initial;
    }

    .TextSection figure::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: var(--colorKey);
      position: absolute;
      mix-blend-mode: screen;
      z-index: 1;
      pointer-events: none;
    }

    .TextSection figure {
      position: relative;
      line-height: 0;
      margin-bottom: var(--size-S);
    }

    .TextSection .image,
    .TextSection figure {
      max-width: 100%;
    }

    .--size-lg .TextSection.content {
      width: calc(100% / 8 * 7);
    }
  `;

  return ["text.sect", html, css];
};
