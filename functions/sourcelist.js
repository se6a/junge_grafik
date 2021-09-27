module.exports = (src) => {
  let source = "";
  let type = "general";

  if (src instanceof Object) {
    if (Object.values(src)[0].startsWith("project/")) type = "project";

    const media = {
      general: {
        sm: "max-width: 599px",
        md: "min-width: 600px",
        lg: "min-width: 1200px",
      },
      project: {
        md: "max-width: 1000px",
        lg: "min-width: 1001px",
      },
    };

    for (const size in src) {
      const path =
        type === "project"
          ? `/media/projects/2021/${size}/${src[size].replace("project/", "")}`
          : `/media/${src[size]}`;

      source += `<source media="(${media[type][size]})" srcset="${path}">`;
    }
  } else {
    source = `<source media="" srcset="/media/${src}">`;
  }

  return source;
};
