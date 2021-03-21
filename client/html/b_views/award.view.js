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

    .VIEW.Award .textButton {
      box-sizing: border-box;
      outline: none;
    }

    body[data-lang="fr"] .VIEW.Award .textButton.fr,
    body[data-lang="de"] .VIEW.Award .textButton.de,
    body[data-lang="it"] .VIEW.Award .textButton.it {
      border-bottom: var(--borderFull) solid currentColor;
      margin: calc(var(--borderFull) * -1) 0;
    }

    body[data-lang="fr"] .VIEW.Award .textButton:not(.fr):not(:hover),
    body[data-lang="de"] .VIEW.Award .textButton:not(.de):not(:hover),
    body[data-lang="it"] .VIEW.Award .textButton:not(.it):not(:hover) {
      border-bottom: 0;
      margin: 0;
    }
  `;

  return ["award.view", html, css];
};
