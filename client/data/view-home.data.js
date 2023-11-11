module.exports = {
    meta: {
        title: "",
        description:
            "Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.",
        indexed: true,
    },
    header: {
        image: "theme/excited.svg",
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
                            title: "Junge Grafik 2023 publication",
                            content: /*html*/ `
                    <a href="/media/publication/publication-preview-lg.jpg" target="_blank">
                      <figure>
                        <img class="image" src="/media/publication/publication-preview-lg.jpg">
                      </figure>
                    </a>
                    <p>
                        The 2023 Junge Grafik publication offers a behind-the-scenes glimpse into this years edition, the works of the 30 winners and the meticulous selection process. Across 120 visible pages (and a few discreetly hidden ones), the publication unfolds in 4 acts, narrating a curated story that features some of the project’s most important actresses and actors such as the jury, the celebrated winners and a selection of esteemed patrons and sponsors.
                    </p>
                    <br>
                    <a class="textButton" href="mailTo:info@jungegrafik.ch" target="_blank">
                        Order your copy – here and now!
                    </a>
                  `,
                        },
                    ],
                },
            ],
        },
        {
            type: "columns",
            content: [
                {
                    type: "slideshow",
                    title: "Impressions: Award Cermenoy 2021",
                    images: [
                        {
                            src: "slideshow/2021-award-ceremony-impressions-__SIZE__-lnd-02.jpg",
                            alt: "",
                        },
                        {
                            src: "slideshow/2021-award-ceremony-impressions-__SIZE__-lnd-03.jpg",
                            alt: "",
                        },
                        {
                            src: "slideshow/2021-award-ceremony-impressions-__SIZE__-lnd-04.jpg",
                            alt: "",
                        },
                        {
                            src: "slideshow/2021-award-ceremony-impressions-__SIZE__-lnd-05.jpg",
                            alt: "",
                        },
                        {
                            src: "slideshow/2021-award-ceremony-impressions-__SIZE__-lnd-06.jpg",
                            alt: "",
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
