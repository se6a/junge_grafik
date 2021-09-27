function calcUsePlaceholder(itemCount, maxLength) {
  return itemCount % maxLength > 0;
}

module.exports = ({ content, length = 4, title, subtitle, classes = "" }) => {
  const useTitle = title ? "--use" : "";
  const useSubtitle = subtitle ? "--use" : "";

  const responsiveLength = {
    lg: length,
    md: Math.ceil(length / 2),
    sm: Math.ceil(length / 4),
  };

  const responsiveLengthArr = JSON.stringify([
    responsiveLength.lg,
    responsiveLength.md,
    responsiveLength.sm,
  ]);

  const usePlaceholder = `
    data-show-lg="${calcUsePlaceholder(content.length, responsiveLength.lg)}"
    data-show-md="${calcUsePlaceholder(content.length, responsiveLength.md)}"
    data-show-sm="${calcUsePlaceholder(content.length, responsiveLength.sm)}"
  `;

  const itemSizeLg = 100 / responsiveLength.lg + "%";
  const itemSizeMd = 100 / responsiveLength.md + "%";
  const itemSizeSm = 100 / responsiveLength.sm + "%";

  const html = splitTemp/*html*/ `
    <section
      class="layoutSection Rows ${classes}"
      data-length='${responsiveLengthArr}'
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
        <div class="placeholder box" ${usePlaceholder}></div>
      </div>

    </section>
  `;

  const css = /*css*/ `
    .Rows.header > * {
      display: none;
    }

    .Rows.title.--use {
      display: block;
      margin: 0;
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

    .--size-lg .Rows > .placeholder[data-show-lg="true"],
    .--size-md .Rows > .placeholder[data-show-md="true"],
    .--size-sm .Rows > .placeholder[data-show-sm="true"] {
      display: block;
    }

    .layoutSection[data-length='${responsiveLengthArr}'].Rows > .Rows.content > * {
      width: ${itemSizeLg};
    }

    .--size-md .layoutSection[data-length='${responsiveLengthArr}'].Rows > .Rows.content > * {
      width: ${itemSizeMd};
    }

    .--size-sm .layoutSection[data-length='${responsiveLengthArr}'].Rows > .Rows.content > * {
      width: ${itemSizeSm};
    }
  `;

  return [`rows-${length}.sect`, html, css];
};
