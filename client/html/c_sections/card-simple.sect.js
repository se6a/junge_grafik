const Checkbox   = getSnippet("input-checkbox");
const EmailInput = getSnippet("input-email");
const IconNext   = getSnippet("icon-next");

module.exports = ({ name = "", title, image, content }) => {
  let displayTitle = "";

  if (! title) {
    displayTitle = ` style="display: none"`;
  }

  const html = splitTemp/*html*/`
    <article class="SimpleCard card ${name}">

      <header class="SimbleCard box title"${displayTitle}>
        <h3>
          ${title}
        </h3>
      </header>

      <div class="SimpleCard box content">
        ${content}
      </div>

    </article>
  `;

  const css = /*css*/`
  `;

  return ["card-simple.snip", html, css];
};
