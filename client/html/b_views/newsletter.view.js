module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="Newsletter" class="VIEW Newsletter" data-lang="de">
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

    .Newsletter .Fullpage {
      padding: calc(var(--headerHeight) - 2px) 0 0 0;
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
