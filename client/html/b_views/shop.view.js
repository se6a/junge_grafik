const HeaderView = getSection("header-view");

module.exports = (data) => {
    const html = splitTemp/*html*/ `
    <main class="VIEW Shop">

      ${HeaderView(data.header)}
      ${buildSections(data.sections)}

      <div class="AnimatedBackground"></div>

    </main>
  `;

    const css = /*css*/ `
    body {
        --colorTheme: var(--red);
    }

    .VIEW.Shop .HEADER-VIEW {
      position: relative;
      min-height: unset;
      height: auto;
      position: relative;
    }

    .VIEW.Shop .HeaderView.image {
      padding: 0;
      height: 100%;
      width: 100%;
      z-index: 20;
    }

    .VIEW.Shop .HeaderView.textWrapper {
      position: absolute;
      padding: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
    }

    .VIEW.Shop .Steps {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .VIEW.Shop .Steps h3 {
        font-size: 1.4em;
        line-height: 1.6em;
    }

    .VIEW.Shop .PaymentOptions .Rows.content {
       flex-direction: column;
       height: 100%;
    }

    .VIEW.Shop .PaymentOptions .Rows.content > :nth-child(1) {
        border-bottom: none;
     }

    .VIEW.Shop .PaymentOptions .Rows.content > :nth-child(2) {
        border-top: none;
        flex: 1;
     }

    .VIEW.Shop .TwintQR .image {
        object-fit: contain;
        height: fit-content;
    }

    .--size-lg .VIEW.Shop .HeaderView.content,
    .VIEW.Shop .HeaderView.content {
      height: 100%;
      width: 100%;
    }
  `;

    return ["shop.view", html, css];
};
