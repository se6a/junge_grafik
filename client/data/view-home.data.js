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
                        "Yes, we’re back! So get ready to submit your work for the second edition of Junge Grafik – Jeune Graphisme – Giovane Grafica. We look forward to seeing your projects, to a new jury and another great night to celebrate the new generation of swiss graphic designers.",
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
                    type: "overview",
                    title: "",
                    details: [
                        {
                            title: "Submission deadline",
                            hasArrow: true,
                            items: [
                                /*html*/ `
                                            <p>03.07.2023</p>
                                        `,
                            ],
                        },
                        {
                            title: "Awards ceremony",
                            hasArrow: true,
                            items: [
                                /*html*/ `
                                            <p>18.11.2023</p>
                                        `,
                                /*html*/ `
                                            <p>20:00</p>
                                        `,
                                /*html*/ `
                                            <p>Neubad, Lucerne</p>
                                        `,
                            ],
                        },
                        {
                            title: "Afterparty",
                            hasArrow: true,
                            items: [
                                /*html*/ `
                                            <p>18.11.2023</p>
                                        `,
                                /*html*/ `
                                            <p>22:00</p>
                                        `,
                                /*html*/ `
                                            <p>Neubad, Lucerne</p>
                                        `,
                            ],
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
                // {
                //     type: "image-box",
                //     image: {
                //         src: "logos/logo-mockup_maison.png",
                //         alt: "Logo of Mockup.Maison",
                //         classes: "logo",
                //         href: "https://www.mockup.maison",
                //     },
                // },
            ],
        },
    ],
    footer: true,
};
