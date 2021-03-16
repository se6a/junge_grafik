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

    .VIEW.Award .OverviewItem .--fr .langOption.fr,
    .VIEW.Award .OverviewItem .--de .langOption.de,
    .VIEW.Award .OverviewItem .--it .langOption.it {
      pointer-events: initial;
      visibility: visible;
      position: initial;
    }

    span.--fr .textButton:not(.fr),
    span.--de .textButton:not(.de),
    span.--it .textButton:not(.it) {
      border-bottom: 0;
      margin: 0;
    }

    .--fr .textButton.fr,
    .--de .textButton.de,
    .--it .textButton.it {
      border-bottom: var(--borderFull) solid currentColor;
      margin: calc(var(--borderFull) * -1) 0;
    }
  `;

  return ["award.view", html, css];
};
