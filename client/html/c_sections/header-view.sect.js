const Underlined = getSnippet("text-underlined");

module.exports = ({ title = "", image = "", content }) => {
  const showImage   = image
                    ? ""
                    : 'style="display: none;"';
  const showTitle   = title
                    ? ""
                    : 'style="display: none;"';
  const showContent = content
                    ? ""
                    : 'style="display: none;"';

  const showText    = showTitle !== "" && showContent !== ""
                    ? 'style="display: none;"'
                    : "";

  const html = splitTemp/*html*/`
    <header class="HEADER-VIEW">
      <div class="image" ${showImage}>
        <img src="${image}">
        </svg>
      </div>

      <div class="text" ${showText}>
      
        <h1 ${showTitle}>
          ${Underlined(title)}
        </h1>

        <div class="content" ${showContent}>
          ${content}
        </div>

      </div>
    </header>
  `;

  const css = /*css*/`
    .HEADER-VIEW {
      display: flex;
      flex-direction: column;
      border: var(--borderHalf) solid currentColor;
      min-height: 100vh;
    }

    .HEADER-VIEW > .text {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      padding: calc(var(--spacing-M) + var(--headerHeight))
               var(--spacing-M)
               var(--spacing-L)
               var(--spacing-M);
    }

    .HEADER-VIEW > .image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .HEADER-VIEW > .image > img {
      margin-top: calc(var(--headerHeight) - 3px);
    }

    .HEADER-VIEW > .text > .content {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
      width: calc(100% / 8 * 7);
    }

    @media (orientation: landscape) {
      .HEADER-VIEW > .image > img {
        width: 100%;
      }
    }

    @media (orientation: portrait) {
      .HEADER-VIEW > .image > img {
        height: calc(100vh - var(--headerHeight));
      }
    }
  `;

  return ["header-view.sect", html, css];
};
