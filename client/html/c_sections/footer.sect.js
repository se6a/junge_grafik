const Card           = getSnippet("card");
const NewsletterForm = getSection("form-newsletter");

module.exports = () => {
  const html = splitTemp/*html*/`
    <footer class="FOOTER">

      ${Card({
        name: "Newsletter",
        title: "Newsletter",
        content: NewsletterForm()
      })}

      ${Card({
        name: "Social",
        title: "Social",
        content: /*html*/`
          <ul>
            <li><a class="link">Instagram</a></li>
            <li><a class="link">Facebook</a></li>
          </ul>
        `
      })}

      ${Card({
        name: "Network",
        title: "Network",
        content: /*html*/`
          <ul>
            <li><a class="link">SGD</a></li>
            <li><a class="link">SGV</a></li>
            <li><a class="link">Weltformat</a></li>
          </ul>
        `
      })}

      ${Card({
        name: "Links",
        title: "Links",
        content: /*html*/`
          <ul>
            <li><a class="link">Imprint</a></li>
            <li><a class="link">Data privacy</a></li>
          </ul>
        `
      })}

    </div>
  `;

  const css = /*css*/`
    .FOOTER {
      background-color: white;
      height: var(--footerHeight);
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr;
      grid-auto-columns: 1fr;
      font-size: var(--fontSize-S);
      line-height: var(--lineHeight-S);
    }

    .FOOTER h3 {
      font-size: 1.3em;
    }
  `;

  return ["footer.sect", html, css];
};
