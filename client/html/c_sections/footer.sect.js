const Rows             = getSection("rows");
const NewsletterForm   = getSection("form-newsletter");
const UnderlinedButton = getSnippet("button-underlined");

module.exports = () => {
  const html = splitTemp/*html*/`
    <footer class="FOOTER">

      ${Rows({
        content: [
          {
            type: "card-simple",
            title: "Newsletter",
            content: NewsletterForm()
          },
          {
            type: "card-simple",
            title: "Social",
            content: /*html*/`
              <ul>
                <li><a class="textButton" target="_blank" href="https://instagram.com/jungegrafik">
                  Instagram
                </a></li>
                <li><a class="textButton" target="_blank" href="https://facebook.com/Junge-Grafik-108635944605605">
                  Facebook
                </a></li>
                <li><a class="textButton" target="_blank" href="https://linkedin.com/company/junge-grafik-schweiz">
                  LinkedIn
                </a></li>
              </ul>
            `
          },
          {
            type: "card-simple",
            title: "Network",
            content: /*html*/`
              <ul>

                <li><a class="textButton" target="_blank" href="https://sgv.ch">
                  SGV Schweizer Grafiker Verband
                </a></li>
                <li><a class="textButton" target="_blank" href="https://sgd.ch">
                  SGD Swiss Graphic Designers
                </a></li>
                <li><a class="textButton" target="_blank" href="https://weltformat-festival.ch">
                  Weltformat Graphic Design Festival
                </a></li>
              </ul>
            `
          },
          {
            type: "card-simple",
            title: "Links",
            content: /*html*/`
              <ul>
                <li><a class="textButton" href="/support-us" target="_blank">Support us!</a></li>
                <li><a class="textButton" href="/data-privacy" target="_blank">Data privacy</a></li>
              </ul>
            `
          }
        ]
      })}

    </footer>
  `;

  const css = /*css*/`
    .FOOTER {
      background-color: white;
      min-height: var(--footerHeight);
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr;
      grid-auto-columns: 1fr;
      font-size: var(--fontSize-S);
      line-height: var(--listHeight-S);
    }

    .FOOTER > .Rows > .content {
      height: 100%;
    }
  `;

  return ["footer.sect", html, css];
};
