const Checkbox   = getSnippet("input-checkbox");
const EmailInput = getSnippet("input-email");
const IconNext   = getSnippet("icon-next");

module.exports = ({ name = "", title, image, content }) => {
  const html = splitTemp/*html*/`
    <article class="card card-image ${name}">

      <div class="image box">
        <img src="./media/${image}">
      </div>

      <div class="cardBody box">
        <header class="Title">
          <h3>${title}</h3>
        </header>

        ${content}

      </div>

    </article>
  `;

  const css = /*css*/`
    .card {
      position: relative;
      overflow: hidden;
    }

    .image.box {
      padding: 0;
      overflow: hidden;
    }
  `;

  return ["card-image.snip", html, css];
};
