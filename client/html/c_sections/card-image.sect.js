module.exports = ({ name = "", title, image, content }) => {
  const html = splitTemp/*html*/`
    <article class="card ImageCard ${name}">

      <div class="cardImage wrapper">
        <div class="box">

          <img class="image" src="./media/${image}">

        </div>
        <div class="pushHeight"></div>
      </div>

      <div class="cardText wrapper">
        <div class="box">

          <header class="Title">
            <h3>${title}</h3>
          </header>

          <div class="Text">
            ${content}
          </div>

        </div>
        <div class="pushHeight"></div>
      </div>

    </article>
  `;

  const css = /*css*/`
    .card {
      position: relative;
      overflow: hidden;
    }

    .card .wrapper {
      position: relative;
    }
    
    .cardImage .box,
    .cardText .box {
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .cardImage .box {
      padding: 0;
    }

    .cardImage .pushHeight {
      margin-top: 100%;
    }

    .cardText .pushHeight {
      margin-top: 50%;
    }

    .cardText .Text {
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
    }

  `;

  return ["card-image.snip", html, css];
};
