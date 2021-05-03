const Header = getSection("header");
const Footer = getSection("footer");
const Menu   = getSection("menu");

function getUrlLanguage(req) {
  let lang;

  if (req.query.lang
  && ["fr", "de", "it"].includes(req.query.lang)) {
    lang = req.query.lang;
  }

  else {
    lang = req.headers.host.includes("jeunegraphisme")
         ? "fr"
         : req.headers.host.includes("giovanegrafica")
         ? "it"
         : "de";
  }

  return lang;
}

module.exports = async (data) => {
  const View     = getView(data.viewName);
  const language = getUrlLanguage(data.req);

  const seoMeta  = ENV.environment === "dev"
                || data.meta.indexed === false
                 ? `<meta name="robots" content="noindex,nofollow"/>`
                 : "";

  const title    = {
                    fr: "Jeune Graphisme",
                    de: "Junge Grafik",
                    it: "Giovane Grafica"
                   }[language];

  const titleAddition = data.meta.title
                      ? `: ${data.meta.title}`
                      : "";

  const html = splitTemp/*html*/`
    <!DOCTYPE html>
    <html lang="en">

      <head>
        <title>${title}${titleAddition}</title>

        <meta char="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${data.meta.description}">

        <!-- Facebook Meta Tags -->
        <meta property="og:url" content="https://jungegrafik.ch">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Junge Grafik">
        <meta property="og:description" content="Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.">
        <meta property="og:image" content="opengraph/jg.jpeg">

        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="jungegrafik.ch">
        <meta property="twitter:url" content="https://jungegrafik.ch">
        <meta name="twitter:title" content="Junge Grafik">
        <meta name="twitter:description" content="Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.">
        <meta name="twitter:image" content="">

        ${seoMeta}

        <link rel="stylesheet" href="/css/global.css">
        <script defer type="text/javascript" src="/js/main.js"></script>
        <script defer type="text/javascript" src="/js/inputfields.js"></script>
        <script defer type="text/javascript" src="/js/submit-project.js"></script>

        <inject-css />
      </head>

      <body data-lang="${language}">
        ${Header()}
        ${Menu()}
        ${await View(data)}
        ${Footer()}
        <span class="BottomLine line"></span>

        <script type="text/javascript">
          const HOST = window.location.origin;
        </script>

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
      background-color: var(--colorTheme);
      display: flex;
      flex-direction: column;
    }

    .mainSection.fullpage {
      padding: var(--size-M) var(--size-S);
      border: var(--borderHalf) solid currentColor;
    }

    .BottomLine {
      width: 100%;
      position: fixed;
      bottom: 0;
      z-index: 100;
    }
  `;

  return ["site", html, css];
};
