module.exports = ({ content }) => {
  const html = splitTemp/*html*/`
    <section class="layoutSection Columns">
      ${buildSections(content)}
    </section>
  `;

  const css = /*css*/`
    .layoutSection.Columns {
      display: grid;
      
    }

    .--size-lg .layoutSection.Columns,
    .--size-md .layoutSection.Columns {
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
    }

    .--size-sm .layoutSection.Columns {
      grid-auto-flow: row;
    }
  `;

  return ["columns.sect", html, css];
};
