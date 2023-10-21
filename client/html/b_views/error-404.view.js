const HeaderView = getSection("header-view");
const Rows = getSection("rows");

module.exports = () => {
    const html = splitTemp/*html*/ `
    <main class="VIEW Error-404">
      ${HeaderView({
          title: "404 Not Found",
      })}
    </main>
  `;

    const css = splitTemp/*css*/ `
      body {
        --colorTheme: var(--gray);
      }

      body >  {
        width: 100%;
      }

      .VIEW.Error-404 {
        height: auto;

      }

      .Error-404 .HEADER-VIEW {
        min-height: 100vh;
        flex-grow: 0;
      }
  `;

    return ["error-404.view", html, css];
};
