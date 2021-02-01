const $textinput = get$snippet("input-text");
const $checkbox = get$snippet("input-checkbox");
const $selection = get$snippet("input-select");

module.exports = (data) => {
  const html = splitTemp/*html*/`
    <form>
      <!-- Titel und Jahr -->
      <fieldset class="group">
        ${$textinput({ label: "Projekttitel", tooltip: "Informationen zu diesem Input. Informationen zu diesem Input." })}
        ${$textinput({ label: "Entstehungsjahr", attr: "pattern='20[0,1,2]\\d'" })}
      </fieldset>
      <!-- Tags -->
      <fieldset class="group">
        ${$selection({ label: "Tag #1", required: true })}
        ${$selection({ label: "Tag #2" })}
        ${$selection({ label: "Tag #3" })}
      </fieldset>
      <!-- Beschreibung -->
      <fieldset class="group Description">
        ${$textinput({ label: "Projektbeschrieb", type: "textarea" })}
      </fieldset>
      <!-- Ausbildung -->
      <fieldset class="group Education">
        ${$textinput({ label: "Ausbildungsniveau" })}
        ${$textinput({ label: "Ausbildungsjahr" })}
      </fieldset>
      <fieldset class="group Institution">
        ${$textinput({ label: "Name Ausbildungsinstitution/Büro" })}
      </fieldset>
      <!-- Gestalter -->
      <fieldset class="group Designer">
        ${$textinput({ label: "Weitere Gestalter bei Gruppenarbeiten" })}
      </fieldset>
      <!-- Dozenten -->
      <fieldset class="group Teacher">
        ${$textinput({ label: "Dozenten" })}
      </fieldset>
      <!-- Websites -->
      <fieldset class="group Website">
        ${$textinput({ label: "Link Projekt-Website" })}
      </fieldset>
      <!-- Uploads -->
      <fieldset class="group Upload">
        ${$textinput({ label: "Upload Reprografien" })}
      </fieldset>
      <!-- bestätigung -->
      <fieldset class="group ProjectWebsite" style="width: 50%">
        ${$checkbox()}
      </fieldset>
      <!-- senden -->
      <fieldset class="group">
        <input type="submit" />
      </fieldset>
    </form>
  `;

  const css = /*css*/`
    form > .group {
      display: grid;
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      column-gap: var(--spacing-M);
    }

    .formField {
      flex-grow: 1;
      width: 100%;
    }

    .inputBox {
      position: relative;
      display: flex;
    }

    .formField .label,
    .formField .input {
      display: flex;
      height: var(--spacing-L);
      font-size: var(--fontSize-M);
      align-items: flex-end;
    }

    .formField .input {
      height: var(--spacing-L);
      width: 100%;
      background-color: white;
      border: 2px solid black;
      font-size: var(--fontSize-M);
      padding: var(--spacing-S);
    }

    /* form.--checked .--required .input:empty {
      background-color: var(--yellow);
    } */

    .formField .label {
      padding-bottom: var(--spacing-XS);
      position: relative;
    }

    .formField.--required .label::after {
      content: "*";
      padding-left: var(--spacing-XS);
    }

    .label

    @media screen and (max-width: 1024px) {
      form > .group {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
        margin-bottom: var(--spacing-L);
      }

      form > .group.Upload,
      form > .group.Description {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 750px) {
      form > .group {
        grid-template-columns: 1fr;
      }
    } 
  `;

  return ["form-project.sect", html, css];
};
