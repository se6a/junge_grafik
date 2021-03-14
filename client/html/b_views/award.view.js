const HeaderView = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main class="VIEW Award">

      ${HeaderView(data.header)}
      ${buildSections(data.sections)}

    </main>
  `;

  const css = splitTemp/*css*/`
    body {
      --colorTheme: var(--red);
    }

    .VIEW.Award .OverviewItem .textOption {
      display: none;
      margin: var(--size-XS) 0;
    }

    .VIEW.Award .OverviewItem [data-lang="fr"] .textOption.fr,
    .VIEW.Award .OverviewItem [data-lang="de"] .textOption.de,
    .VIEW.Award .OverviewItem [data-lang="it"] .textOption.it {
      display: block;
    }

    .VIEW.Award .OverviewItem [data-lang="fr"] .link[data-lang="fr"],
    .VIEW.Award .OverviewItem [data-lang="de"] .link[data-lang="de"],
    .VIEW.Award .OverviewItem [data-lang="it"] .link[data-lang="it"] {
      border-bottom: var(--borderFull) solid currentColor;
      margin: calc(var(--borderFull) * -1) 0;
    }
  `;

  return ["award.view", html, css];
};
