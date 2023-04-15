const Underlined = getSnippet("text-underlined-multiline");
const Picture = getSnippet("picture");

module.exports = ({ classes = "", title, images = [] }) => {
    const useTitle = title ? "--use" : "";

    const html = [
        /*html*/ `
            <section class="SlideShow box">
                <div class="slideShowImages">`,
        ...images.map((image, i) =>
            Picture(image, {
                classes: `slideShowImage${i === 0 ? " isActive" : ""}`,
            })
        ),
        /*html*/ `
                </div>
            </section>
      `,
    ];

    const css = /*css*/ `

        .SlideShow {
            padding: 0;
            flex-direction: row;
            height: 80vh;
        }

        .slideShowImages {
            position: relative;
            overflow: hidden;
            display: grid;
            max-height: 80vh;
            grid-template-columns: 1fr;
            grid-template-rows: 100%;
        }


        .slideShowImage {
            grid-row: 1;
            grid-column: 1;
            position: relative;
            display: flex;
        }

        .slideShowImage img {
            object-fit: contain;
            max-height: 100%;
            max-width: 100%;
            opacity: 0;
            transition: opacity 1000ms;
            margin-right: auto;
        }

        .slideShowImage.isActive img {
            opacity: 1;
        }
    `;

    return ["slideshow.sect", html, css];
};
