const HeaderView = getSection("header-view");
const Rows = getSection("rows");

module.exports = (data) => {
    const html = splitTemp/*html*/ `
    <main class="VIEW TermsSubmission">

      ${HeaderView({
          title: "Terms of submission",
          content: ``,
      })}

      ${Rows({
          length: 2,
          content: [
              {
                  type: "card-simple",
                  content: `
              <p>The following are invited to participate:</p>
              </br>
              <p>DE: Grafiklernende EFZ in einem Betrieb oder an einer Fachklasse Grafik; Studierende an einer Fachhochschule (BA-Studiengang Visuelle Kommunikation / Graphic Design) oder in der Höheren Berufsbildung (dipl. Gestalterin / dipl. Gestalter HF).</p>
              </br>
              <p>IT: Apprendisti grafici AFC presso un’azienda o presso una scuola di arte applicata; studenti di una scuola universitaria professionale (corso BA in comunicazione visiva / graphic design) o in una formazione professionale superiore (designer dipl. SSS).</p>
              </br>
              <p>FR: La participation est ouverte aux étudiant·es en graphisme CFC en entreprise ou dans une école de maturité professionnelle ; aux étudiant·es d’une haute école spécialisée (Bachelor en communication visuelle / graphisme) ou en formation professionnelle supérieure (Designer ES en communication visuelle).</p>
            `,
              },
              {
                  type: "card-simple",
                  content: `
              <ul>
                <li class="arrow">
                  Participation is independent of age, nationality and language.
                </li>
                <li class="arrow">
                  Any number of projects can be submitted online. There is a fee of CHF 20 per project.
                </li>
                <li class="arrow">
                    Works created during school year 2021/22 or 2022/23 will be judged. Participation is only possible within the entry period.
                </li>
                <li class="arrow">
                  The jury will select the winners (approximately 30 works).
                </li>
                <li class="arrow">
                  All works created by the participant’s own contribution are eligible for participation.
                </li>
              </ul>
            `,
              },
          ],
      })}

      ${Rows({
          length: 2,
          content: [
              {
                  type: "text",
                  title: "Intellectual property",
                  content: `
              <ul>
                <li class="arrow">Participants are responsible for ensuring that their works contain the necessary rights of use from third parties and have been deposited as intellectual property prior to submission.</li>
                <li class="arrow">The participants agree that the submitted works as well as pictures and names of the participants may be used and published in connection with the award ceremony, the publication, the website and the exhibition but also in the context of the public relations work of Junge Grafik.</li>
              </ul>
            `,
              },
              {
                  type: "text",
                  title: "Exclusion",
                  content: `
              <ul>
                <li class="arrow">Excluded from participation are works or their contents that violate Swiss law or are contemptuous of human rights, discriminatory against race, gender, religion, nationality or personality, hurtful or hostile. </li>

                <li class="arrow">Also excluded are submissions for which the fees have not been paid in due time. </li>
                
                <li class="arrow">Refunds of entry fees are excluded.</li>
                
                <li class="arrow">Submissions from Junge Grafik jury members will not be accepted.</li>

                </br>
                <h3>Awards</h3>
                </br>
                
                <li class="arrow">
                    The winners will be recognized in the publication, on the website and at the award ceremony.
                </li>
                
                <li class="arrow">The winners are entitled to use the Junge Grafik Award logo provided for their own advertising purposes.</li>
                
                <li class="arrow">By registering, participants accept the terms and conditions of the competition. No correspondence will be entered into.</li>

                </br>
                <h3>Jury and judging procedure</h3>
                </br>

                <li class="arrow">The jury consists of 9 professional graphic designers from different disciplines, language regions and age groups. Among them are representatives from vocational training, tertiary education and business.</li>
                
                <li class="arrow">
                  <ul>
                    <li>The jury members commit themselves to the following rules:</li>
                    <li class="dash">They judge neutrally.</li>
                    <li class="dash">The discussion during the evaluation is treated confidentially.</li>
                    <li class="dash">Majority decisions will be recognized by each member.</li>
                  </ul>
                </li>
                <li class="arrow">The jury evaluates the submitted works on the basis of defined evaluation criteria and selects approximately 30 winners. </li>
                
                <li class="arrow">The winners will be recognized and announced at the award ceremony.</li>
                
                <li class="arrow">The judging procedure is determined by the jury. It does not give reasons for entries that do not win. The decision of the jury is final. The legal process is excluded.</li>
              </ul>
            `,
              },
          ],
      })}

    </main>
  `;

    const css = splitTemp/*css*/ `
    body {
      --colorTheme: var(--gray);
    }

    .VIEW.TermsSubmission .HEADER-VIEW {
      min-height: 50vh;
    }
  `;

    return ["terms-of-submission.view", html, css];
};
