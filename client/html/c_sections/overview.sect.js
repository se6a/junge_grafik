function Detail({ title, items }) {
  return /*html*/`
    <article class="Overview item">

      <header class="OverviewItem header">
        <h3>
          &rarr; ${title}
        </h3>
      </header>

      <ul class="OverviewItem content">
        ${items.reduce((list, _item) => list + `<li>${_item}</li>`, "")}
      </ul>

    </article>
  `;
}

function Columns(details) {
  const columns = [];
  // range[0] = column 1
  // range[1] = column 2
  const range = details.length > 2
                    ? [Math.ceil(details.length / 2), details.length]
                    : [details.length, null];

  let crntItem = 0;

  for (let i = 0; i < 2; i++) {
    columns.push(`<div class="Overview column">`);

    if (range[i] !== null) {
      for (; crntItem < range[i]; crntItem++) {
        columns.push(Detail(details[crntItem]));
      }
    }

    columns.push(`</div>`);
  }

  return columns.join("");
}

module.exports = ({ details }) => {
  const html = /*html*/`
    <section class="Overview box">
      ${Columns(details)}
    </section>
  `;

  const css = /*css*/`
    .--size-lg .Overview.box {
      display: grid;
    }

    .--size-lg .Overview.box {
      grid-gap: var(--spacing-M);
      grid-template-columns: 1fr 1fr;
    }

    .--size-md .Overview.box,
    .--size-sm .Overview.box {
      grid-template-columns: 1fr;
    }

    .Overview.column {
      display: flex;
      flex-direction: column;
    }

    .OverviewItem.content {
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S)
    }

    .Overview.item::after {
      content: "";
      height: var(--spacing-M);
      display: block;
    }
  `;

  return ["overview.sect", html, css];
};
