const Checkbox   = getSnippet("input-checkbox");
const EmailInput = getSnippet("input-email");
const IconNext   = getSnippet("icon-next");

module.exports = ({ name = "", title, content }) => {
  const html = splitTemp/*html*/`
    <article class="card ${name}">
      <header class="box Title">
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
