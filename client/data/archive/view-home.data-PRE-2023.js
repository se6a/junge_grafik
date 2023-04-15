module.exports = {
    meta: {
        title: "",
        description:
            "Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.",
        indexed: true,
    },
    header: {
        image: "theme/winners.svg",
        content: '<div class="HeaderColors"></div>',
    },
    sections: [
        {
            type: "fullpage",
            content: [
                {
                    type: "text",
                    size: "l",
                    content:
                        "Yes, we’re back! The next awards are just around the corner. So get ready to submit your work for the second edition of the Junge Grafik – Jeune Graphisme – Giovane Grafica Awards. We look forward to seeing your projects, to a new jury and another great night to celebrate the new generation of swiss graphic designers.",
                },
            ],
        },
        {
            type: "columns",
            content: [
                {
                    type: "overview",
                    title: "Travelling exhibition",
                    details: [
                        {
                            title: "Lucerne",
                            items: [
                                /*html*/ `
                  <p>9.10.2021, 15:30</p>
                  <p>Opening and introduction with Demian Conrad (jury) and Meret Fischli (Junge Grafik)</p>
                `,
                                "</br>",
                                /* html */ `
                  <p>9. – 17.10.2021</p>
                  <p><a class="textButton" href="https://weltformat-festival.ch/2021/ausstellungen/junge-grafik" target="_blank">
                    Weltformat Graphic Design Festival, Luzern
                  </a></p>
                  <p>Kapelle, Rössligasse 12, 6004 Luzern</p>
                  <p>Mon–Sun 12:00–18:00</p>
                `,
                            ],
                            hasArrow: false,
                        },

                        {
                            title: "Zurich",
                            items: [
                                /*html*/ `
                  <p>29.10.2021, 17:00</p>
                  <p>Opening and introduction with Yannic Cserhati (winner), Ladina Dörig (winner), Audrey Fleur Ljubenovic (jury) and Remo Stahl (Junge Grafik)</p>
                  <p>Flurstrasse 89, 8047 Zurich</p>
                `,
                                "</br>",
                                /*html*/ `
                  <p>30.10. – 7.11.2021</p>
                  <p><a class="textButton" href="https://ffzh.ch/Ausstellung/?EventId=2758" target="blank">
                    F+F Schule für Kunst und Design Zürich
                  </a></p>
                  <p>Flurstrasse 89, 8047 Zurich</p>
                  <p>Mon–Fri 9:00–18:00, Sat–Sun 14:00–18:00</p>
                `,
                            ],
                            hasArrow: false,
                        },

                        {
                            title: "Sierre",
                            items: [
                                /*html*/ `
                  <p>27.11. – 4.12.2021</p>
                  <p><a class="textButton" href="https://edhea.ch/evenements/jeune-graphisme" target="blank">
                    EDHEA – Ecole de design et haute école d’art du Valais, Sierre
                  </a></p>
                  <p>Route de la Bonne-Eau 16, 3960 Sierre</p>
                  <p>Mon–Fri 9:00–18:00, Sat 10:00–18:00</p>
                `,
                            ],
                            hasArrow: false,
                        },

                        {
                            title: "Geneva",
                            items: [
                                /*html*/ `
                  <p>13. – 17.12.2021</p>
                  <p><a class="textButton" href="https://cfparts.ch/event/exposition-junge-grafik/" target="blank">
                    CFP Arts Genève
                  </a></p>
                  <p>Rue Necker 2, 1201 Genève</p>
                `,
                            ],
                            hasArrow: false,
                        },
                    ],
                },
            ],
        },
        {
            type: "columns",
            content: [
                {
                    type: "text",
                    title: "Junge Grafik 2021 publication",
                    content: /*html*/ `
            <a href="/media/publication/publication-preview-lg.jpg" target="_blank">
              <figure>
                <img class="image" src="/media/publication/publication-preview-lg.jpg">
              </figure>
            </a>
            <p>
              The Junge Grafik 2021 publication is a cross-section of the upcoming generation of Swiss graphic designers. On 128 pages, we present this year’s winning works, facts and figures about the submission process as well as interviews with the jury, a selection of patrons and various graphic designers.
            </p>
            <br>
            <a class="textButton" href="https://checkoutpage.co/c/jungegrafik/junge-grafik-2021-publication" target="_blank">
              Buy your copy – here and now!
            </a>
          `,
                },
            ],
        },
        {
            type: "rows",
            length: 8,
            content: [
                {
                    type: "image-box",
                    image: {
                        src: "logos/logo-sgv.png",
                        alt: "Logo of SGV",
                        classes: "logo",
                        href: "https://sgv.ch",
                    },
                },
                {
                    type: "image-box",
                    image: {
                        src: "logos/logo-sgd.png",
                        alt: "Logo of SGD",
                        classes: "logo",
                        href: "https://sgd.ch",
                    },
                },
                {
                    type: "image-box",
                    image: {
                        src: "logos/logo-engelberger_druck.png",
                        alt: "Logo of Engelberg Druck",
                        classes: "logo",
                        href: "https://engelbergerdruck.ch",
                    },
                },
                {
                    type: "image-box",
                    image: {
                        src: "logos/logo-wetalents.png",
                        alt: "Logo of We-Talents",
                        classes: "logo",
                        href: "https://wetalents.net/",
                    },
                },
                {
                    type: "image-box",
                    image: {
                        src: "logos/logo-grafikmagazin.png",
                        alt: "Logo of Grafikmagazin",
                        classes: "logo",
                        href: "https://grafikmagazin.de/",
                    },
                },
                {
                    type: "image-box",
                    image: {
                        src: "logos/logo-extraset.png",
                        alt: "Logo of Extraset",
                        classes: "logo",
                        href: "https://extraset.ch/",
                    },
                },
                {
                    type: "image-box",
                    image: {
                        src: "logos/logo-mockup_maison.png",
                        alt: "Logo of Mockup.Maison",
                        classes: "logo",
                        href: "https://www.mockup.maison",
                    },
                },
            ],
        },
    ],
    footer: true,
};
