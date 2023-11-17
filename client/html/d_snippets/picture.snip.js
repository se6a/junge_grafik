const contexts = {
    general: {
        sizes: {
            sm: "max-width: 599px",
            md: "min-width: 600px",
            lg: "min-width: 1200px",
        },
        path: "/media/__CONTEXT__/__SIZE__/__FILENAME__",
    },
    slideshow: {
        sizes: {
            sm: "max-width: 599px",
            md: "min-width: 600px",
        },
        path: "/media/__CONTEXT__/__SIZE__/__FILENAME__",
    },
    projects2021: {
        sizes: {
            md: "max-width: 1000px",
            lg: "min-width: 1001px",
        },
        path: "/media/projects/2021/__SIZE__/__FILENAME__",
    },
    projects2023: {
        sizes: {
            md: "max-width: 1000px",
            lg: "min-width: 1001px",
        },
        path: "/media/projects/2023/__SIZE__/__FILENAME__",
    },
    logos: {
        sizes: { all: "min-width: 1px" },
        path: "/media/logos/__FILENAME__",
    },
};

const SourceList = (filename, context) => {
    let source = "";

    const props = contexts?.[context] ? contexts[context] : contexts.general;

    for (const size in props.sizes) {
        const path = props.path
            .replace("__CONTEXT__", context)
            .replace("__SIZE__", size)
            .replace("__FILENAME__", filename.replace("__SIZE__", size));

        const media = props.sizes[size];

        source += `<source media="(${media})" srcset="${path}">`;
    }

    return source;
};

module.exports = (
    { src = "", alt = "No Description.", defaultSize = "md" },
    { classes = "" } = {}
) => {
    const isSvg = src.endsWith(".svg");
    const parts = src.match(/^(\w+)\/(.+)/);
    let context = "";
    let filename = "";

    if (Array.isArray(parts)) {
        filename = parts[2];
        context = parts[1];
    }

    const html = /*html*/ `
    <picture class="${classes ? ` ${classes}` : ""}">
      ${!isSvg ? SourceList(filename, context) : ""}
      <img
        class="image"
        alt="${alt}"
        src="${
            isSvg
                ? `media/${src}`
                : `media/${context}/${defaultSize}/${filename.replace(
                      "__SIZE__",
                      defaultSize
                  )}`
        }"
      >
    </picture>
  `;

    const css = /*css*/ `
    picture {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    picture > .image {
      display: block;
      position: relative;
      max-width: 100%;
    }
  `;

    return ["picture.snip", html, css];
};
