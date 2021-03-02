function sortContent(content, number) {
  let rows = [];

  if (number) {
    content.forEach((_cont, i) => {
      if (i % number === 0)
        rows.push([]);
      rows[rows.length - 1].push(_cont);
    });
  }
  else {
    rows = [content];
  }

  return rows;
}

function buildRows(rows, number) {
  const built = [];
  const emptyElement = '<span class="emptyElement"></span>';

  rows.forEach(
    (_col) => {
      let _emptyElement = "";
      if (number && _col.length < number) {
        _emptyElement = emptyElement;
      }

      built.push(
        '<span class="row">',
        buildSections(_col),
        `${_emptyElement}
        </span>`
      );
  });

  return ["buildRows.fn", built];
};

module.exports = ({ content, number }) => {
  const rows  = sortContent(content, number);
  const specific = number
                  ? "specific"
                  : "";

  const html = splitTemp/*html*/`
    <section class="layoutSection Columns ${specific}">
      ${
        buildRows(rows, number)
      }
    </section>
  `;

  const css = /*css*/`
    .layoutSection.Columns {
      display: grid;
      flex-direction: column;
    }

    .layoutSection.Columns > .row {
      display: grid;
      grid-auto-flow: column;
    }

    .layoutSection.Columns.specific > .row {
      grid-template-columns: repeat(${number}, 1fr);
      grid-auto-columns: 1fr;
    }

    .layoutSection.Columns > .row > * {
      flex-grow: 1;
    }
  `;

  return ["columns.sect", html, css];
};
