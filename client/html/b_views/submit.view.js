const $intro = get$section("intro");
const $projectForm = get$section("form-project");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="Submit" class="VIEW Submit">
      <section>
        <header>
          <h1>Neues Projekt</h1>
        </header>

        ${$projectForm()}
      </section>
    </main>
  `;
  const css = /*css*/`
    .VIEW.Submit > section {
      border: 1px solid black;
    }
  `;

  return ["submit.view", html, css];
};
