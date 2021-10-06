const Picture = getSnippet("picture");

module.exports = ({ image }) => {
  const { src = "", alt = "no description", classes = "", href = "" } = image;

  const format = src.includes("-lnd-")
    ? "landscape"
    : src.includes("-prt-")
    ? "portrait"
    : "";

  const html = splitTemp/*html*/ `
    <figure class="ImageBox box ${classes} ${format}">
      ${href && `<a href=${href} target="_blank">`}
        ${Picture({ src, alt })}
      ${href && "</a>"}
    </figure>
  `;

  const css = /*css*/ `
    .ImageBox {
      padding: 0;
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .ImageBox picture {
      
    }

    .ImageBox source {
      display: none;
    }

    .ImageBox.box:not(.logo, .projectImage)::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: var(--colorKey);
      position: absolute;
      mix-blend-mode: screen;
      z-index: 1;
      pointer-events: none;
    }

    .ImageBox.box.logo {
      mix-blend-mode: darken;
    }
  `;

  return ["image-box.snip", html, css];
};
