const Checkbox   = getSnippet("input-checkbox");
const EmailInput = getSnippet("input-email");
const IconNext   = getSnippet("icon-next");

module.exports = ({ name = "", title, image, content }) => {
  let displayTitle = "";

  if (! title) {
    displayTitle = ` style="display: none"`;
  }

  const html = splitTemp/*html*/`
    <article class="card ${name}">

      <header class="box Title"${displayTitle}>
        <h3>${title}</h3>
      </header>

      <div class="box Content">
        ${content}
      </div>

    </article>
  `;

  const css = /*css*/`
  `;

  return ["card.snip", html, css];
};
