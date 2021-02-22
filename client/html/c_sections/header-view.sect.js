const Underlined = getSnippet("text-underlined");

module.exports = ({ title, content }) => {
  const html = splitTemp/*html*/`
    <header class="HEADER-VIEW">

      <h1 class="title">
        ${Underlined(title)}
      </h1>

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
      border: 1px solid black;
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
