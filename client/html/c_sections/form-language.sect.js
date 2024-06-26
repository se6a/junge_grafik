const Select        = getSnippet("input-select");
const RoundedButton = getSnippet("button-rounded");

module.exports = () => {
  const html = splitTemp/*html*/`
    <form
      id="ProjectRegistrationLang"
      class="form"
      onsubmit="setFormLanguage(event)"
    >
      <fieldset class="formFieldGroup threeColumns">
        <div class="formField Language">
          ${Select({
            label: {
              all: "Language"
            },
            name: "language",
            options: [
              { id: "fr", all: "French" },
              { id: "de", all: "German" },
              { id: "it", all: "Italian" }
            ],
            required: true
          })}
        </div>
      </fieldset>
      <fieldset class="formFieldGroup">
        <div class="formField ConfirmLang">
          ${RoundedButton({
            label: { all: "Next \u2192" },
            type: "submit"
          })}
        </div>
      </fieldset>
    </form>
  `;

  const css = /*css*/`
  `;

  return ["form-language.view", html, css];
};
