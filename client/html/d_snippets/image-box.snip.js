module.exports = ({ image }) => {
  const html = splitTemp/*html*/`
    <figure class="ImageBox box">
      <div class="colorOverlay"></div>
      <picture>
        <source media="" srcset="./media/${image?.src}">
        <img class="image" src="./media/${image?.src}" alt="${image?.alt}">
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

    .ImageBox .colorOverlay {
      width: 100%;
      height: 100%;
      background-color: var(--colorKey);
      position: absolute;
      z-index: 1;
      mix-blend-mode: lighten;
      pointer-events: none;
    }
  `;

  return ["image-box.snip", html, css];
};
