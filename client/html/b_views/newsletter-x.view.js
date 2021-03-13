const HeaderView   = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="SuccessfullSubmission" class="VIEW SuccessfullSubmission" data-lang="de">
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

    </main>
  `;

  const css = /*css*/`
    body {
      --colorTheme: var(--violet);
    }
  `;

  return ["newsletter.view", html, css];
};
