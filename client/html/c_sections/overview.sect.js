const Underlined = getSnippet("text-underlined-multiline");

function Detail({ title, items, hasArrow = true }) {
    return /*html*/ `
    <article class="Overview item">

      ${
          title
              ? /*html*/ `
            <header class="OverviewItem header">
            <h3>
            ${hasArrow ? `&rarr; ` : ""}${title}
            </h3>
        </header>
        `
              : ""
      }
      

      <ul class="OverviewItem content">
        ${items.reduce((list, _item) => {
            let classes = "";
            if (_item.startsWith("– ")) {
                classes = ' class="dash"';
                _item = _item.slice(2);
            } else if (_item.startsWith("> ")) {
                classes = ' class="arrow"';
                _item = _item.slice(2);
            }
            return list + `<li${classes}>${_item}</li>`;
        }, "")}
      </ul>

    </article>
  `;
}

function Columns(details) {
    const columns = [];
    // range[0] = column 1
    // range[1] = column 2
    const range =
        details.length > 2
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

module.exports = ({ title = "", details }) => {
    details = details.filter((d) => Object.keys(d).length > 0);
    const useTitle = title ? "--use" : "";

    const html = splitTemp/*html*/ `
    <section class="Overview box">
      <header class="Overview title ${useTitle}">
        <h2>
          ${title ? Underlined(title) : ""}
        </h2>
      </header>
      <div class="Overview columns">
        ${Columns(details)}
      </div>
    </section>
  `;

    const css = /*css*/ `
    .Overview.title {
      display: none;
    }

    .Overview.title.--use {
      display: block;
    }

    .--size-lg .Overview .columns {
      display: grid;
    }

    .--size-lg .Overview .columns {
      grid-gap: var(--size-M);
      grid-template-columns: 1fr 1fr;
    }

    .--size-md .Overview .columns,
    .--size-sm .Overview .columns {
      grid-template-columns: 1fr;
    }

    .Overview.column {
      display: flex;
      flex-direction: column;
      gap: var(--size-S);
    }

    body:not(.--size-lg) .Overview .column:not(:first-child) {
      margin-top: var(--size-S);
    }

    .OverviewItem.header {
      margin-bottom: var(--size-XS);
    }

    .OverviewItem.content {
      font-size: var(--fontSize-S);
      line-height: var(--listHeight-S);

    }
  `;

    return ["overview.sect", html, css];
};
