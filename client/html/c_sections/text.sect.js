const Underlined = getSnippet("text-underlined");

function maybeTitle(title) {
  let html = "";

  if (title) {
    html = splitTemp/*html*/`
      <header>
        <h2>
          ${Underlined(title)}
        </h2>
      </header>
    `;
  }

  return ["maybeTitle.fn", html];
}

module.exports = ({ title, content }) => {
  const html = splitTemp/*html*/`
    <section class="Text box">
      ${maybeTitle(title)}

      <p>
        ${content}
      </p>

    </section>
  `;

  const css = /*css*/``;

  return ["text.sect", html, css];
};
