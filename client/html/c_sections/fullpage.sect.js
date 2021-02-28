module.exports = ({ content }) => {
  const html = splitTemp/*html*/`
    <section class="layoutSection Fullpage">
      ${buildSections(content)}
    </section>
  `;

  const css = /*css*/`
    .layoutSection.Fullpage {
      display: flex;
      flex-direction: columns;
    }
  `;

  return ["fullpage.sect", html, css];
};
