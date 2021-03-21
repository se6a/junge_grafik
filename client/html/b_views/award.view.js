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

    .VIEW.Award .OverviewItem .langOption {
      margin: var(--size-XS) 0 var(--size-S);
    }

    .VIEW.Award .OverviewItem .langOption {
      pointer-events: initial;
      position: initial;
    }

    body[data-lang="fr"] .textButton.fr,
    body[data-lang="de"] .textButton.de,
    body[data-lang="it"] .textButton.it {
      border-bottom: var(--borderFull) solid currentColor;
      margin: calc(var(--borderFull) * -1) 0;
    }

    body[data-lang="fr"] .textButton:not(.fr),
    body[data-lang="de"] .textButton:not(.de),
    body[data-lang="it"] .textButton:not(.it) {
      border-bottom: 0;
      margin: 0;
    }
  `;

  return ["award.view", html, css];
};
