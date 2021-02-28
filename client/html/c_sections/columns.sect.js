module.exports = ({ content }) => {
  const html = splitTemp/*html*/`
    <section class="layoutSection Columns">
      ${buildSections(content)}
    </section>
  `;

  const css = /*css*/`
    .layoutSection.Columns {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr;
    }
  `;

  return ["columns.sect", html, css];
};
