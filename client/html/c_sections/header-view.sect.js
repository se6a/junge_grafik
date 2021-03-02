const Underlined = getSnippet("text-underlined");

function maybeTitle(title) {
  let html = "";

  if (title) {
    html = splitTemp/*html*/`
      <h1>
        ${Underlined(title)}
      </h1>
    `;
  }

  return ["maybeTitle.fn", html];
}

function maybeImage(image) {
  let html = "";

  if (image) {
    html = splitTemp/*html*/`
      <img url="${image.url}">
    `;
  }

  return ["maybeTitle.fn", html];
}

module.exports = ({ title, image, content }) => {
  const html = splitTemp/*html*/`
    <header class="HEADER-VIEW">

      ${maybeTitle(title)}

      <div class="content">
        ${content}
      </div>

    </header>
  `;

  const css = /*css*/`
    .HEADER-VIEW {
      padding: calc(var(--spacing-M) + var(--headerHeight))
              var(--spacing-M)
              var(--spacing-L)
              var(--spacing-M);
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      border: var(--borderHalf) solid currentColor;
      min-height: 100vh;
    }

    .HEADER-VIEW > .content {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
      width: calc(100% / 8 * 7);
    }
  `;

  return ["header-view.sect", html, css];
};
