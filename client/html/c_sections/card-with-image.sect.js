module.exports = ({ name = "", title, image, content }) => {
  const html = splitTemp/*html*/`
    <article class="card ImageCard ${name}">

      <div class="ImageCard imageWrapper">
        <div class="box">

          <img class="ImageCard image" src="./media/${image}">

        </div>
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

        <div class="pushHeight"></div>
      </div>

    </article>
  `;

  const css = /*css*/`
    .ImageCard .imageWrapper,
    .ImageCard .contentWrapper {
      position: relative;
    }
    
    .ImageCard .box {
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .ImageCard.title {
      margin-bottom: var(--spacing-S);
    }

    .ImageCard.imageWrapper > .box {
      padding: 0;
    }

    .ImageCard > .pushHeight {
      margin-top: 100%;
    }

    .ImageCard.contentWrapper > .pushHeight {
      margin-top: 50%;
    }

    .--size-sm .ImageCard.contentWrapper > .pushHeight {
      margin-top: 30%;
    }

    .ImageCard.content {
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
    }

  `;

  return ["card-with-image.snip", html, css];
};
