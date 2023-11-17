const Underlined = getSnippet("text-underlined-multiline");
const Picture = getSnippet("picture");

module.exports = ({ classes = "", title, images = [] }) => {
    const useTitle = title ? "--use" : "";

    const html = [
        /*html*/ `
    <section class="SlideShow box ${classes}">
        <header class="${useTitle}">
            <h2>`,
        Underlined(title),
        `   </h2>
        </header>

        <div class="slideShowImages">`,
        ...images.map((image, i) =>
            Picture(image, {
                classes: `slideShowImage${i === 0 ? " isActive" : ""}`,
            })
        ),
        `</div>
    </section>
`,
    ];

    const css = /*css*/ `

        .SlideShow {
            padding: 0;
            flex-direction: column;
            height: 80vh;
        }

        .SlideShow header {
            padding: var(--size-S);
            padding-bottom: 0;
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
