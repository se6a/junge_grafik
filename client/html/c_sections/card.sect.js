module.exports = ({ classes = "", title, content }) => {
  let displayTitle = "";

  if (!title) {
    displayTitle = ` style="display: none"`;
  }

  const html = splitTemp/*html*/ `
    <article class="card ${classes}">

      <header class="box Title"${displayTitle}>
        <h3>${title}</h3>
      </header>

      <div class="box Content">
        ${content}
      </div>

    </article>
  `;

  const css = /*css*/ `
  `;

  return ["card.snip", html, css];
};
