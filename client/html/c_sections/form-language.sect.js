const Select        = getSnippet("input-select");
const RoundedButton = getSnippet("button-rounded");

module.exports = () => {
  const html = splitTemp/*html*/`
    <form id="ProjectRegistrationLang" onsubmit="selectLanguage(event)">
      <fieldset class="formFieldGroup">
        <div class="formField Language">
          ${Select({
            options: [
              { id: "de", all: "german" },
              { id: "fr", all: "french" },
              { id: "it", all: "italian" }
            ],
            required: true,
            label: {
              all: "Language"
            },
            name: "language"
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
