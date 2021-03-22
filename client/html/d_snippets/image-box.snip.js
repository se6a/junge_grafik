function Sources(src) {
  let source = "";
  const media = {
    sm: "max-width: 599px",
    md: "min-width: 600px",
    lg: "min-width: 1200px"
  };

  if (src instanceof Object) {
    for (const _size in src) {
      source += `<source media="(${media[_size]})" srcset="./media/${src[_size]}">`;
    }
  }

  else {
    source = `<source media="" srcset="./media/${src}">`;
  }

  return source;
}

module.exports = ({
  image
}) => {
  const {
    src = "",
    alt = "no description",
    classes = ""
  } = image;

  const html = splitTemp/*html*/`
    <figure class="ImageBox box ${classes}">
      <picture>
        ${Sources(src)}
        <img class="image" alt="${alt}">
      </picture>
    </figure>
  `;

  const css = /*css*/`
    .ImageBox {
      padding: 0;
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .ImageBox source {
      display: none;
    }

    .ImageBox .image {
      padding: 0;
      position: relative;
      width: 100%;
      height: auto;
    }

    .ImageBox.box::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: var(--colorKey);
      position: absolute;
      mix-blend-mode: screen;
      z-index: 1;
      pointer-events: none;
    }

    .ImageBox.box.logo::before {
      mix-blend-mode: lighten;
    }
  `;

  return ["image-box.snip", html, css];
};
