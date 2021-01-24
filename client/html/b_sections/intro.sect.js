module.exports = (data) => {
  const html = splitTemp/*html*/`
    <section class="Intro">

      <header class="title">
        <h1>
          ${data?.title}
        </h1>
      </header>

      <div class="content">
        ${data?.content}
      </div>

    </section>
  `

  const css = /*css*/`
    section.Intro {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      border: 1px solid black;
      padding: calc(var(--padding) * 2) var(--padding);
      min-height: calc(100vh - 78px);
    }

    section.Intro .content {
      font-size: var(--fontSize-L);
      line-height: var(--lineHeight-L);
    }
  `

  return ["intro", html, css]
}