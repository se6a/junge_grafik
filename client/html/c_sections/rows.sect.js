const JuryCard = getSection("card-jury");

module.exports = ({ content, length = 4, title = "", subtitle = "" }) => {
  const showTitle = title === "" && subtitle === ""
                  ? `style="display: none;"`
                  : "";

  const html = splitTemp/*html*/`
    <section class="layoutSection Rows" data-length="${length}">

      <header class="box" ${showTitle}>
        <h2>  
          ${title}
        </h2>
        <h3>
          ${subtitle}
        </h3>
      </header>

      <div class="content">
        ${buildSections(content)}
        <div class="placeholder box"></div>
      </div>

    </section>
  `;

  const css = /*css*/`
    .layoutSection.Rows > .content {
      display: flex;
      flex-wrap: wrap;
    }

    .layoutSection[data-length="${length}"].Rows > .content > * {
      width: ${100 / length}%;
    }

    .layoutSection.Rows .placeholder {
      flex-grow: 1;
    }
  `;

  return [`rows-${length}.sect`, html, css];
};
