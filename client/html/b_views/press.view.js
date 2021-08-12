const HeaderView = getSection("header-view");
const Rows = getSection("rows");

module.exports = () => {
  const html = splitTemp/*html*/ `
    <main class="VIEW Press">
      ${HeaderView({
        title: "Press",
      })}

      ${Rows({
        length: 2,
        content: [
          {
            type: "card-simple",
            content: `hello there`,
          },
          {
            type: "card-simple",
            content: `hello there`,
          },
        ],
      })}
    </main>
  `;

  const css = splitTemp/*css*/ `
      body {
        --colorTheme: var(--gray);
      }

      .VIEW.Press {
        min-height: unset;
        height: auto;
      }

      .Press .HEADER-VIEW {
        min-height: 40vh;
        flex-grow: 0;
      }
  `;

  return ["press.view", html, css];
};
