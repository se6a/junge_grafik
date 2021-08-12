const ImageBox = getSnippet("image-box");

module.exports = ({ classes = "", title, image, content }) => {
  const html = splitTemp/*html*/ `
    <article class="${classes} card ImageCard">

      <div class="ImageCard imageWrapper">
        ${ImageBox({ image })}
        <div class="pushHeight"></div>
      </div>

      <div class="ImageCard contentWrapper">
        <div class="box">

          <header class="ImageCard title">
            <h3>
              ${title}
            </h3>
          </header>

          <div class="ImageCard content">
            ${content}
          </div>

        </div>
      </div>

    </article>
  `;

  const css = /*css*/ `
    .ImageCard .imageWrapper,
    .ImageCard .contentWrapper {
      position: relative;
    }
    
    .ImageCard .imageWrapper .box {
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .ImageCard .contentWrapper,
    .ImageCard .contentWrapper .box {
      height: 100%;
    }

    .ImageCard.title {
      margin-bottom: var(--size-S);
    }

    .ImageCard.imageWrapper > .box {
      padding: 0;
    }

    .ImageCard > .pushHeight {
      margin-top: 100%;
    }

    .ImageCard.content {
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
    }

  `;

  return ["card-with-image.snip", html, css];
};
