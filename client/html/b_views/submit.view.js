const $intro = get$section("intro");
const $underlined = get$snippet("text-underlined");
const $projectForm = get$section("form-project");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <main id="Submit" class="VIEW Submit">
      <section>
        <header>
          <h1>${$underlined("Neues Projekt")}</h1>
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
