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
            "This year’s winners are online! Check out the stunning projects of our new generation of swiss graphic designers. Big up to all the students and apprentices who submitted their works to the Junge Grafik Award 2021. Grazie! Merci! Danke!",
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
            "Many thanks to all of you! We are still overwhelmed by all the outstanding projects. It was a close race, so make sure to submit your new projects in 2023! In the meantime you can check out the winning projects on our winner page.",
        },
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
