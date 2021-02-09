const $underlined = get$snippet("text-underlined");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <section class="Intro">

      <header class="title">
        <h1>
          ${$underlined(data?.title)}
        </h1>
      </header>

      <div class="content">
        ${data?.content}
      </div>

    </section>
  `;

  const css = /*css*/`
    section.Intro {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      border: 1px solid black;
      min-height: 100vh;
    }

    section.Intro .content {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
    }
  `;

  return ["intro.sect", html, css];
};
