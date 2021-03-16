const HeaderView   = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="SuccessfullSubmission" class="VIEW SuccessfullSubmission" data-lang="de">
      ${HeaderView({
        title: "Newsletter",
        content: lang`
          <span>
          ${{
            de: `
            `,
            fr: "",
            it: ""
          }}
          </span>
        `
      })}

      <object data="/media/newsletter/jungegrafik-newsletter-2021-03.pdf" type="application/pdf">
        <iframe data-src="/media/newsletter/jungegrafik-newsletter-2021-03.pdf"></iframe>
      </object>

      <script>
        document.addEventListener(
          "DOMContentLoaded",
          () => {
            const $iframe = document.querySelector("iframe");

            $iframe.onload = () => {
              console.log("loaded");
              const $pdfViewer = $iframe.contentWindow.document.querySelector("html");
              console.log("$pdfViewer",$pdfViewer);
            };

            const src = $iframe.dataset.src;
            $iframe.src = HOST + src;
          }
        );
      </script>

    </main>
  `;

  const css = /*css*/`
    body {
      --colorTheme: var(--violet);
    }

    iframe .sidebarContainer,
    iframe .findbar,
    iframe .toolbar {
      display: none !important;
    }

    iframe .viewerContainer {
      top: 0;
    }
  `;

  return ["newsletter.view", html, css];
};
