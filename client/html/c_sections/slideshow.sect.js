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
        }

        .slideShowImages {
            position: relative;
            height: 80vh;
            overflow: hidden;
        }

        .slideShowImage {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
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
