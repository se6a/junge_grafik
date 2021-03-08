const Rows           = getSection("rows");
const NewsletterForm = getSection("form-newsletter");

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
                <li><a class="link" href="" target="_blank">Instagram</a></li>
                <li><a class="link" href="" target="_blank">Facebook</a></li>
                <li><a class="link" href="" target="_blank">LinkedIn</a></li>
              </ul>
            `
          },
          {
            type: "card-simple",
            title: "Network",
            content: /*html*/`
              <ul>
                <li><a class="link" href="" target="_blank">SGV Schweizer Grafiker Verband</a></li>
                <li><a class="link" href="" target="_blank">SGD Swiss Graphic Designers</a></li>
                <li><a class="link" href="" target="_blank">Weltformat Graphic Design Festival</a></li>
              </ul>
            `
          },
          {
            type: "card-simple",
            title: "Links",
            content: /*html*/`
              <ul>
                <li><a class="link" href="" target="_blank">Imprint</a></li>
                <li><a class="link" href="" target="_blank">Data privacy</a></li>
              </ul>
            `
          }
        ]
      })}

    </div>
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
