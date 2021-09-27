const UnderlinedMulti = getSnippet("text-underlined-multiline");
const Picture = getSnippet("picture");

module.exports = ({ title = "", image = "", content }) => {
  const showImage = image ? "" : 'style="display: none;"';
  const showTitle = title ? "" : 'style="display: none;"';
  const showContent = content ? "" : 'style="display: none;"';

  const showText =
    showTitle !== "" && showContent !== "" ? 'style="display: none;"' : "";

  const html = splitTemp/*html*/ `
    <header class="HEADER-VIEW">
      <div class="HeaderView image" ${showImage}>
        ${
          image
            ? Picture({ src: image, alt: "Header image. No description." })
            : null
        }
      </div>

      <div class="HeaderView textWrapper" ${showText}>
      
        <h1 class="HeaderView title" ${showTitle}>
          ${UnderlinedMulti(title)}
        </h1>

        <div class="HeaderView content" ${showContent}>
          ${content}
        </div>

      </div>
    </header>
  `;

  const css = /*css*/ `
    .HEADER-VIEW {
      display: flex;
      flex-direction: column;
      column-gap: 0;
      border: var(--borderHalf) solid currentColor;
      min-height: 100vh;
    }

    .HeaderView.textWrapper {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      padding: calc(var(--size-S) + var(--headerHeight))
               var(--size-S)
               var(--size-S)
               var(--size-S);
    }

    .HeaderView.image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .HeaderView.image > picture > img {
      margin-top: calc(var(--headerHeight) - 3px);
      width: 100%;
    }

    .HeaderView.textWrapper > .content {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
    }

    .--size-lg .HeaderView.content {
      width: calc(100% / 8 * 7);
    }
  `;

  return ["header-view.sect", html, css];
};
