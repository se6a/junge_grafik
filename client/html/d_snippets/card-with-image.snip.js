const ImageBox = getSnippet("image-box");

module.exports = ({ classes = "", title, image = {}, content, link = "" }) => {
    const maybeUseImage = image?.src ? "useImage" : "";
    const html = splitTemp/*html*/ `
  <article class="${classes} ${maybeUseImage} card ImageCard">
  ${link ? `<a href="${link}">` : ""}

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
      ${link ? `</a>` : ""}
    </article>
  `;

    const css = /*css*/ `

    .imageWrapper {
        display: none;
    }

    .useImage > .imageWrapper {
        display: block;
    }

    .ImageCard.card {
      z-index: 0;
    }

    .ImageCard .imageWrapper,
    .ImageCard .contentWrapper {
      position: relative;
      z-index: -1;
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

    .ImageCard .contentWrapper .box {
      justify-content: space-between;
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

    .ImageCard.card > a {
      display: flex;
      flex-direction: column;
      height: 100%;
      cursor: pointer;
      outline: 0px solid black;
      transition: outline 100ms;
    }
  
    .ImageCard.card > a:hover {
      outline: calc(var(--borderHover) - var(--borderHalf)) solid black;
      outline-offset: calc(-1 * (var(--borderHover) - var(--borderHalf)));
    }
  `;

    return ["card-with-image.snip", html, css];
};
