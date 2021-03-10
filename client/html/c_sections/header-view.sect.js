const Underlined = getSnippet("text-underlined");

function multilineTitle(title) {
  titleParts = title.replace(" ", " --")
                .split("--");

  const html = [""];

  titleParts.forEach((_part) => {
    html.push(Underlined(_part), "");
  });

  return ["text-underlined-multiline.fn", html];
};

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
      
        <h1 class="HeaderView title" ${showTitle}>
          ${multilineTitle(title)}
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
      column-gap: 0;
      border: var(--borderHalf) solid currentColor;
      min-height: 100vh;
    }

    .HeaderView.title {
      display: flex;
      flex-wrap: wrap;
    }

    .HeaderView.title > .textUnderlined:first-child {
      margin-bottom: var(--size-S);
    }

    .HeaderView.title > .textUnderlined:last-child {
      flex-grow: 1;
    }

    .HeaderView.title .text {
      white-space: break-spaces;
    }

    .HEADER-VIEW .textUnderlined.outerBox {
      display: inline-flex;
    }

    .HEADER-VIEW .textUnderlined.outerBox > * {
      flex-grow: 0;
    }

    .HeaderView.textWrapper {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      padding: calc(var(--size-S) + var(--headerHeight))
               var(--size-S)
               var(--size-L)
               var(--size-S);
    }

    .HeaderView.image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .HeaderView.image > img {
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
