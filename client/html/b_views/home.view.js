const HeaderView = getSection("header-view");

module.exports = (data) => {
  const html = splitTemp/*html*/ `
    <main class="VIEW Home">

      ${HeaderView(data.header)}
      ${buildSections(data.sections)}

      <div class="AnimatedBackground"></div>

    </main>
  `;

  const css = /*css*/ `
    body {
      --colorTheme: transparent;
    }

    .VIEW.Home .HEADER-VIEW {
      position: relative;
      min-height: unset;
      height: auto;
      position: relative;
    }

    .VIEW.Home .HeaderView.image {
      padding: 0;
      height: 100%;
      width: 100%;
      z-index: 20;
    }

    .VIEW.Home .HeaderView.textWrapper {
      position: absolute;
      padding: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
    }

    .--size-lg .VIEW.Home .HeaderView.content,
    .VIEW.Home .HeaderView.content {
      height: 100%;
      width: 100%;
    }

    .AnimatedBackground {
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: var(--blue);
      animation-name: colors;
      animation-duration: 60s;
      animation-iteration-count: infinite;
    }

    .VIEW.Home .ImageBox.logo::before {
      display: none;
    }

    @keyframes colors {
      0%   {background-color: var(--blue);}
      25%  {background-color: var(--red);}
      50%  {background-color: var(--yellow);}
      75%  {background-color: var(--green);}
      100% {background-color: var(--blue);}
    }
  `;

  return ["home.view", html, css];
};
