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
      <div class="HeaderView image" ${showImage}>
        <img src="${image}">
        </svg>
      </div>

      <div class="HeaderView textWrapper" ${showText}>
      
        <h1 ${showTitle}>
          ${Underlined(title)}
        </h1>

        <div class="HeaderView content" ${showContent}>
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

    .HeaderView.textWrapper {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      padding: calc(var(--spacing-M) + var(--headerHeight))
               var(--spacing-M)
               var(--spacing-L)
               var(--spacing-M);
    }

    .HeaderView.image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .HeaderView.image > img {
      margin-top: calc(var(--headerHeight) - 3px);
    }

    .HeaderView.textWrapper > .content {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
    }

    .--size-lg .HeaderView.content {
      width: calc(100% / 8 * 7);
    }

    @media (orientation: landscape) {
      .HeaderView.image > img {
        width: 100%;
      }
    }

    @media (orientation: portrait) {
      .HeaderView.image > img {
        height: calc(100vh - var(--headerHeight));
      }
    }
  `;

  return ["header-view.sect", html, css];
};
