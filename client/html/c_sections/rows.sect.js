module.exports = ({ content, length = 4, title, subtitle }) => {
  const usePlaceholder = content.length % length > 0 ? " --use" : "";
  const useTitle       = title ? "--use" : "";
  const useSubtitle    = subtitle ? "--use" : "";

  const responsiveLength = {
    lg: length,
    md: Math.ceil(length / 2),
    sm: Math.ceil(length / 4)
  };

  const responsiveLengthArray = `[${responsiveLength.lg},${responsiveLength.md},${responsiveLength.sm}]`;

  const itemSizeLg = 100 / responsiveLength.lg + "%";
  const itemSizeMd = 100 / responsiveLength.md + "%";
  const itemSizeSm = 100 / responsiveLength.sm + "%";

  const html = splitTemp/*html*/`
    <section
      class="layoutSection Rows"
      data-length="${responsiveLengthArray}"
      data-items="${content.length}"
    >

      <header class="Rows header">
        <h2 class="Rows title box ${useTitle}">
          ${title}
        </h2>
        <h3 class="Rows subtitle box ${useSubtitle}">
          ${subtitle}
        </h3>
      </header>

      <div class="Rows content">
        ${buildSections(content)}
        <div class="placeholder box ${usePlaceholder}"></div>
      </div>

    </section>
  `;

  const css = /*css*/`
    .Rows.header > * {
      display: none;
    }

    .Rows.title.--use {
      display: block;
    }

    .Rows.subtitle.--use {
      display: block;
    }

    .Rows.content {
      display: flex;
      flex-wrap: wrap;
    }

    .Rows.content > .placeholder {
      flex-grow: 1;
      display: none;
    }

    .Rows > .placeholder.--use {
      display: block;
    }

    .layoutSection[data-length="${responsiveLengthArray}"].Rows > .Rows.content > * {
      width: ${itemSizeLg};
    }

    .--size-md .layoutSection[data-length="${responsiveLengthArray}"].Rows > .Rows.content > * {
      width: ${itemSizeMd};
    }

    .--size-sm .layoutSection[data-length="${responsiveLengthArray}"].Rows > .Rows.content > * {
      width: ${itemSizeSm};
    }
  `;

  return [`rows-${length}.sect`, html, css];
};
