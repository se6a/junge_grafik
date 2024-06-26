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
                        "The winning projects are online! Check out the stunning works of the next generation of swiss graphic designers. Big up to all the students and apprentices who submitted their works to the Junge Grafik Award 2023. Grazie! Merci! Danke!",
                },
            ],
        },
        {
            type: "columns",
            content: [
                {
                    type: "text",
                    title: "Award",
                    content:
                        "Anyone studying graphic design in Switzerland is welcome to apply. Thirty prizes will be awarded. The award ceremony will take place every two years at the Neubad in Lucerne.",
                },

                {
                    type: "columns",
                    content: [
                        {
                            type: "text",
                            title: "2023 Junge Grafik publication",
                            content: /*html*/ `
                    <a href="/shop" title="Go to the Shop" >
                      <figure>
                        <img class="image" alt="Preview of 2023 Junge Grafik publication " src="/media/publication/md/publication-preview-2023-md-lnd-01.jpg">
                      </figure>
                    </a>
                    <p>
                        The 2023 Junge Grafik publication offers a behind-the-scenes glimpse into this years edition, the works of the 30 winners and the meticulous selection process. Across 120 visible pages (and a few discreetly hidden ones), the publication unfolds in 4 acts, narrating a curated story that features some of the project’s most important actresses and actors such as the jury, the celebrated winners and a selection of esteemed patrons and sponsors.
                    </p>
                    <br>
                    <a class="textButton" href="/shop" target="_blank">
                        Order your copy – here and now!
                    </a>
                  `,
                        },
                    ],
                },
            ],
        },
        {
            type: "rows",
            length: 1,
            content: [
                {
                    type: "slideshow",
                    title: "2023 Junge Grafik award ceremony",
                    images: [
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-01.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-02.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-03.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-04.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-05.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-06.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-07.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-08.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-09.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-10.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-11.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-12.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-13.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-14.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-15.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-16.jpg",
                            alt: "2023 award ceremony impression",
                        },
                        {
                            src: "ceremony2023/jg-ceremony-2023-__SIZE__-lnd-17.jpg",
                            alt: "2023 award ceremony impression",
                        },
                    ],
                },
                {
                    type: "slideshow",
                    title: "2021 Junge Grafik award ceremony",
                    images: [
                        {
                            src: "ceremony2021/jg-ceremony-2021-__SIZE__-lnd-02.jpg",
                            alt: "2021 award ceremony impression",
                        },
                        {
                            src: "ceremony2021/jg-ceremony-2021-__SIZE__-lnd-03.jpg",
                            alt: "2021 award ceremony impression",
                        },
                        {
                            src: "ceremony2021/jg-ceremony-2021-__SIZE__-lnd-04.jpg",
                            alt: "2021 award ceremony impression",
                        },
                        {
                            src: "ceremony2021/jg-ceremony-2021-__SIZE__-lnd-05.jpg",
                            alt: "2021 award ceremony impression",
                        },
                        {
                            src: "ceremony2021/jg-ceremony-2021-__SIZE__-lnd-06.jpg",
                            alt: "2021 award ceremony impression",
                        },
                    ],
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
                        src: "logos/logo-luzi_type.png",
                        alt: "Logo of Luzi type",
                        classes: "logo",
                        href: "https://www.luzi-type.ch/",
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
                // {
                //     type: "image-box",
                //     image: {
                //         src: "logos/logo-egon_und_ingrid_hug_stiftung.png",
                //         alt: "Logo of Egon und Ingrid Hug Stiftung",
                //         classes: "logo",
                //         href: "https://stiftungen.stiftungschweiz.ch/organisation/egon-und-ingrid-hug-stiftung",
                //     },
                // },
                // {
                //     type: "image-box",
                //     image: {
                //         src: "logos/logo-wetalents.png",
                //         alt: "Logo of We-Talents",
                //         classes: "logo",
                //         href: "https://wetalents.net/",
                //     },
                // },
                // {
                //     type: "image-box",
                //     image: {
                //         src: "logos/logo-grafikmagazin.png",
                //         alt: "Logo of Grafikmagazin",
                //         classes: "logo",
                //         href: "https://grafikmagazin.de/",
                //     },
                // },
                // {
                //     type: "image-box",
                //     image: {
                //         src: "logos/logo-extraset.png",
                //         alt: "Logo of Extraset",
                //         classes: "logo",
                //         href: "https://extraset.ch/",
                //     },
                // },
            ],
        },
    ],
    footer: true,
};
