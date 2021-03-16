module.exports = {
  meta: {
    title: "Award",
    description: "Is your graphic design work more than just a project? Then we’d love to see it. You can submit any outstanding work you’ve created as part of your studies.",
    indexed: true
  },
  header: {
    title: "Award",
    content: "Is your graphic design work more than just a project? Then we’d love to see it. You can submit any outstanding work you’ve created as part of your studies."
  },
  sections: [
    {
      type: "columns",
      content: [
        {
          type: "text",
          title: "Award",
          content: "Junge Grafik recognizes innovative, diverse and exceptional graphic work created during a student’s education and training. The Junge Grafik Award was created for both apprentices and students across Switzerland. The 30 winners will be nominated by a renowned jury and awarded their prize at the Weltformat Graphic Design Festival. All winning entries will be exhibited in multiple locations across Switzerland and featured on this website and in a printed publication – providing the prize winners with an ideal platform to promote their work."
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
                `– All levels of education`,
                `– All years of study and training`,
                `– Students from across Switzerland`,
                `– Both group and individual work`,
                `– All genres of visual communication and graphic design`,
                `– Work completed within the last two years: school year 2019–2020 and 2020–2021`
              ]
            },
            {
              title: "Submission",
              items: [
                "– Via this website",
                "– Call for Entries will be launched on 15.03.2021",
                "– Deadline: 14.06.2021"
              ]
            },
            {
              title: "Award",
              items: [
                "– Awarded every two years",
                "– 30 entries selected",
                "– The first awards will be presented in October 2021"
              ]
            },
            {
              title: "Prize",
              items: [
                "Winners will receive a certificate, at least CHF 400 in cash per project and a range of other prizes (such as Dinamo Typefaces, Magazines, coupons usw.) Their work will also be featured in the publication “Junge Grafik 2021”."
              ]
            },
            {
              title: "Costs",
              items: [
                "– CHF 20 (contribution per project)"
              ]
            },
            {
              title: "Award ceremony / Afterparty",
              items: [
                "Winners will have the chance to network with other leading young designers over drinks at an exclusive afterparty as part of the Weltformat Graphic Design Festival. "
              ]
            },
            {
              title: "Exhibition",
              items: [
                "A travelling exhibition will showcase the winning entries in schools across Switzerland."
              ]
            },
            {
              title: "Publication",
              items: [
                "The publication “Junge Grafik 2021” will feature all the winning entries. Prize winners, sponsors, media contacts and participating schools will receive a free copy. Additional copies will be sold in the Junge Grafik online shop."
              ]
            },
            {
              title: "Platform",
              items: [
                "The winning entries will be featured on this website and shared on our social media channels."
              ]
            }
          ]
        }
      ]
    },
    {
      type: "rows",
      title: "Jury 2021",
      length: 4,
      content: [
        {
          type: "card-with-image",
          title: "Audrey Fleur Ljubenovic",
          image: {
            src: "jury/jg_jury_21-audrey_fleur_ljubenovic.png",
            alt: "Portait of jury member Audrey Fleur Ljubenovic"
          },
          content: `<a class="textButton" href="https://audreyfleur.ch" target="_blank">audreyfleur.ch</a>`
        },
        {
          type: "card-with-image",
          title: "Demian Conrad",
          image: {
            src: "jury/jg_jury_21-demian_conrad.png",
            alt: "Portait of jury member Demian Conrad"
          },
          content: `<a class="textButton" href="http://demianconrad.com" target="_blank">demianconrad.com</a>`
        },
        {
          type: "card-with-image",
          title: "Dennis Moya",
          image: {
            src: "jury/jg_jury_21-dennis_moya.png",
            alt: "Portait of jury member Dennis Moya"
          },
          content: `<a class="textButton" href="https://dennismoya.ch" target="_blank">dennismoya.ch</a>`
        },
        {
          type: "card-with-image",
          title: "Felix Pfäffli",
          image: {
            src: "jury/jg_jury_21-felix_pfaeffli.png",
            alt: "Portait of jury member Felix Pfäffli"
          },
          content: `<a class="textButton" href="https://studiofeixen.ch" target="_blank">studiofeixen.ch</a>`
        },
        {
          type: "card-with-image",
          title: "Jonas Vögeli",
          image: {
            src: "jury/jg_jury_21-jonas_voegeli.png",
            alt: "Portait of jury member Jonas Vögeli"
          },
          content: `<a class="textButton" href="https://hubertus-design.ch" target="_blank">hubertus-design.ch</a>`
        },
        {
          type: "card-with-image",
          title: "Larissa Kasper",
          image: {
            src: "jury/jg_jury_21-larissa_kasper.png",
            alt: "Portait of jury member Larissa Kasper"
          },
          content: `<a class="textButton" href="http://kasper-florio.ch" target="_blank">kasper-florio.ch</a>`
        },
        {
          type: "card-with-image",
          title: "Lena Ruppen",
          image: {
            src: "jury/jg_jury_21-lena_ruppen.png",
            alt: "Portait of jury member Lena Ruppen"
          },
          content: ""
        },
        {
          type: "card-with-image",
          title: "Marion Fink",
          image: {
            src: "jury/jg_jury_21-marion_fink.png",
            alt: "Portait of jury member Marion Fink"
          },
          content: ""
        },
        {
          type: "card-with-image",
          title: "Valeria Bonin",
          image: {
            src: "jury/jg_jury_21-valeria_bonin.png",
            alt: "Portait of jury member Valeria Bonin"
          },
          content: `<a class="textButton" href="https://bonbon.li" target="_blank">bonbon.li</a>`
        }
      ]
    }
  ],
  footer: true
};
