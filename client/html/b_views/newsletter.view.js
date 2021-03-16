const HeaderView   = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="Newsletter" class="VIEW Newsletter" data-lang="de">
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

      <section class="layoutSection Fullpage box">
        <object class="pdfViewer" data="/media/newsletter/jungegrafik-newsletter-2021-03.pdf#zoom=60">
          <iframe
            class="pdfViewer"
            src="/media/newsletter/jungegrafik-newsletter-2021-03.pdf#zoom=60">
          </iframe>
        </object>
      </section>

    </main>
  `;

  const css = /*css*/`
    body {
      --colorTheme: var(--violet);
    }

    .VIEW.Newsletter {
      height: 100%;
    }

    .Newsletter .HEADER-VIEW {
      height: unset;
      min-height: unset;
      border-bottom: 0;
    }

    .Newsletter .HeaderView.textWrapper {
      padding-bottom: 0;
    }

    .Newsletter .HeaderView.textWrapper .title {
      margin-bottom: 0;
    }

    .Newsletter .Fullpage {
      border-top: 0;
    }

    .Newsletter .pdfViewer {
      all: unset;
    }


    .Newsletter .Fullpage,
    .Newsletter .pdfViewer {
      height: 100%;
      width: 100%;
    }

    .Newsletter + .FOOTER {
      display: none;
    }
  `;

  return ["newsletter.view", html, css];
};
