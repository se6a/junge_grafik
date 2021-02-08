module.exports = async (data) => {
  const $header = get$section("header");
  const $footer = get$section("footer");
  const $menu   = get$section("menu");
  const $view   = get$view(data.viewName);

  const html = splitTemp/*html*/`
    <!DOCTYPE html>
    <html>

      <head>
        <meta char="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Junge Grafik</title>

        <link rel="stylesheet" href="/css/global.css">
        <script defer type="text/javascript" src="/js/main.js"></script>

        <inject-css />
      </head>

      <body>
        ${$header()}
        ${$menu()}
        ${await $view(data?.view)}
        ${$footer()}
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

    .VIEW > section {
      padding-top: calc(var(--headerHeight) * 2);
    }
  `;

  return ["site", html, css];
};
