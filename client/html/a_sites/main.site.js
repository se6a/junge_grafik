module.exports = async (data) => {
  const Header = getSection("header");
  const Footer = getSection("footer");
  const Menu   = getSection("menu");
  const View   = getView(data.viewName);

  const html = splitTemp/*html*/`
    <!DOCTYPE html>
    <html>

      <head>
        <meta char="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Junge Grafik</title>

        <link rel="stylesheet" href="/css/global.css">
        <script defer type="text/javascript" src="/js/main.js"></script>

        <inject-css />
      </head>

      <body>
        ${Header()}
        ${Menu()}
        ${await View(data?.view)}
        ${Footer()}
        <span class="BottomLine line"></span>
      </body>

    </html>
  `;

  const css = /*css*/`
    .VIEW, .MENU {
      display: flex;
      flex-direction: column;
      min-height: calc(100vh - 78px);
      margin: 0 auto;
      position: relative;
    }

    .VIEW {
      background-color: var(--mainColor);
      display: flex;
      flex-direction: column;
    }

    .viewSegment.splitpage > * {
      padding: var(--spacing-M);
      border: 1px solid currentColor;
    }

    .viewSegment.fullpage {
      padding: var(--spacing-L) var(--spacing-M);
      border: 1px solid currentColor;
    }

    .viewSegment.splitpage {
      background-color: white;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr;
      grid-auto-columns: 1fr;
    }

    .BottomLine {
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  `;

  return ["site", html, css];
};
