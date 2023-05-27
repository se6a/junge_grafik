module.exports = {
    meta: {
        title: "Award",
        description:
            "Submissions will open again in 2023! In the meantime you can check out the winning projects on our winner page.",
        indexed: true,
    },
    header: {
        title: "Award",
        content: /*html*/ `Is your graphic design work more than just a project? Then we’d love to see it. You can submit any work you’ve created as part of your studies during the last two years. Submissions will be accepted from 24.04.–19.06.2023.`,
    },
    sections: [
        {
            type: "columns",
            content: [
                {
                    type: "text",
                    title: "Award",
                    content:
                        "Junge Grafik recognizes innovative, diverse and exceptional graphic design created during a student’s education and training. The biennial Junge Grafik Award was created for both apprentices and students across Switzerland. The 30 winners will be nominated by a renowned jury and awarded their prize at the ceremony event. All winning entries will be featured on this website and in a printed publication – providing the prize winners with an ideal platform to promote their work.",
                },
                {
                    type: "overview",
                    details: [
                        {
                            title: "Participation",
                            items: [
                                `
                  <span onclick="setLanguage(this, event.target)">
                    <span>
                      <button class="textButton fr" type="button" data-lang="fr">FR</button> /
                      <button class="textButton de" type="button" data-lang="de">DE</button> /
                      <button class="textButton it" type="button" data-lang="it">IT</button>
                    </span>
                    <p class="langOption fr" lang="fr">La participation est ouverte aux étudiant·es en graphisme CFC en entreprise ou dans une école de maturité professionnelle ; aux étudiant·es d’une haute école spécialisée (Bachelor en communication visuelle / graphisme) ou en formation professionnelle supérieure (Designer ES en communication visuelle).</p>
                    <p class="langOption de" lang="de">Grafiklernende EFZ in einem Betrieb oder an einer Fachklasse Grafik; Studierende an einer Fachhochschule (BA-Studiengang Visuelle Kommunikation / Graphic Design) oder in der Höheren Berufsbildung (dipl. Gestalterin / dipl. Gestalter HF).</p>
                    <p class="langOption it" lang="it">Apprendisti grafici AFC presso un’azienda o presso una scuola di arte applicata; studenti di una scuola universitaria professionale (corso BA in comunicazione visiva / graphic design) o in una formazione professionale superiore (designer dipl. SSS).</p>
                  </span>
                `,
                                `– All levels of education (except master’s degree)`,
                                `– All years of study and training`,
                                `– Students from across Switzerland`,
                                `– Both group and individual work`,
                                `– All genres of visual communication and graphic design`,
                                `– Work completed within the last two school years`,
                            ],
                        },
                        {
                            title: "Submission",
                            items: [
                                "– Submissions will be accepted from 24.04.–19.06.2023.",
                            ],
                        },
                        {
                            title: "Prize",
                            items: [
                                "Winners will receive a certificate and a bag filled with great prizes such as typefaces, magazines, books, vouchers and much more! Most importantly: All the winning projects will be displayed in a publication and will be uploaded to the winner page on our website.",
                            ],
                        },
                        {
                            title: "Costs",
                            items: ["– CHF 20 (contribution per project)"],
                        },
                        {
                            title: "Award ceremony / Afterparty",
                            items: [
                                "At the ceremony and the afterparty the winners have the chance to network with other leading graphic designers.",
                            ],
                        },
                        {
                            title: "Publication",
                            items: [
                                /*html*/ `
                  <p>The Junge Grafik publication is a cross-section of the upcoming generation of Swiss graphic designers. On 128 pages, we present each year’s winning works, facts and figures about the submission process as well as a lot of information around the award itself.</p>
                `,
                            ],
                        },
                        {
                            title: "Platform",
                            items: [
                                "The winning entries will be featured on this website and shared on our social media channels.",
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: "rows",
            title: "Jury 2023",
            length: 4,
            content: [
                {
                    type: "card-with-image",
                    title: `<div>Alice Franchetti</div>`,
                    content: `<a class="textButton" href="https://alicefranchetti.ch" target="_blank">alicefranchetti.ch</a>`,
                },

                {
                    type: "card-with-image",
                    title: `<div>Cédric Oppliger</div>`,
                    content: `<a class="textButton" href="https://roli-deluxe.ch" target="_blank">roli-deluxe.ch</a>`,
                },
                {
                    type: "card-with-image",
                    title: `<div>Erich Brechbühl</div>`,
                    content: `<a class="textButton" href="https://erichbrechbuhl.ch" target="_blank">erichbrechbuhl.ch</a>`,
                },
                {
                    type: "card-with-image",
                    title: `<div>Giliane Cachin</div>`,
                    content: `<a class="textButton" href="https://gilianecachin.ch" target="_blank">gilianecachin.ch</a>`,
                },
                {
                    type: "card-with-image",
                    title: `<div>Leonardo Angelucci</div>`,
                    content: `<a class="textButton" href="https://leonardo-angelucci.ch" target="_blank">leonardo-angelucci.ch</a>`,
                },
                {
                    type: "card-with-image",
                    title: `<div>Léo Monnet</div>`,
                    content: `<a class="textButton" href="https://www.instagram.com/monnet_leo/" target="_blank">@monnet_leo</a>`,
                },
                {
                    type: "card-with-image",
                    title: `<div>Priscilla Balmer</div>`,
                    content: `<a class="textButton" href="https://balmerhahlen.ch" target="_blank">balmerhahlen.ch</a>`,
                },
                {
                    type: "card-with-image",
                    title: `<div>Sarah Owens</div>`,
                    content: `<a class="textButton" href="https://visualcommunication.zhdk.ch/personen/team/sarah-owens" target="_blank">visualcommunication.zhdk.ch</a>`,
                },
            ],
        },
    ],
    footer: true,
};
