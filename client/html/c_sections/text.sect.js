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

module.exports = ({ title, content, size }) => {
  size = size || "normal";

  const html = splitTemp/*html*/`
    <section class="Text box ${size}">
      ${maybeTitle(title)}

      <p>
        ${content}
      </p>

    </section>
  `;

  const css = /*css*/`
    .Text.box p {
      width: calc(100% / 8 * 7);
    }

    .Text.box.l {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
    }

    .Text.box.xl {
      font-size: var(--fontSize-XL);
      line-height: var(--lineHeight-XL);
    }
  `;

  return ["text.sect", html, css];
};
