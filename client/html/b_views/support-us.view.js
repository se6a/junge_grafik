const HeaderView = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Support">
      ${HeaderView({
        title:   "Support us!",
        content: `
        <ul>
          <li>UBS Switzerland AG</li>
          <li>Postfach</li>
          <li>6002 Luzern</li>
        </ul>

        <ul>
          <li>Verein Junge Grafik</li>
          <li>Konto-Nr.: 248-165901.40W</li>
          <li>BIC: UBSWCHZH80A</li>
          <li><span>IBAN: </span><span>CH41 0024 8248 </span><span>1659 0140 W</span></li>
        </ul>
        `
      })}
    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--gray);
    }
    
    .VIEW.Support ul:first-child {
      margin-bottom: var(--size-L);
    }

    .VIEW.Support li span {
      white-space: pre;
      display: inline-block;
    }
  `;

  return ["support-us.view", html, css];
};
