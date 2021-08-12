const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const Select = getSnippet("input-select-multi");
const ButtonRounded = getSnippet("button-rounded");

const options = [
  { id: "Animation design", all: "Animation design" },
  { id: "Corporate design", all: "Corporate design" },
  { id: "Editorial design", all: "Editorial design" },
  { id: "Environmental design", all: "Environmental design" },
  { id: "Exhibition design", all: "Exhibition design" },
  { id: "Photography", all: "Photography" },
  { id: "Illustration", all: "Illustration" },
  { id: "Interaction design", all: "Interaction design" },
  { id: "Infographic design", all: "Infographic design" },
  { id: "Packaging design", all: "Packaging design" },
  { id: "Poster design", all: "Poster design" },
  { id: "Signage design", all: "Signage design" },
  { id: "Typeface design", all: "Typeface design" },
  { id: "Typography", all: "Typography" },
  { id: "Web design", all: "Web design" },
].map(({ id, all }) => ({ id, all: "#" + all.replace(" design", "") }));

function ProjectGallery() {
  const html = [
    /*html*/ `
      <p class="Description">
        Zwanzig Jahre Kulturbüro Zürich
      </p>
      <div class="Categories">
    `,
    ...options.reduce((categories, option) => {
      categories.push(
        ButtonRounded({
          classes: "badge Category",
          size: "S",
          label: option.all,
        })
      );
      return categories;
    }, []),
    `</div>`,
  ];

  const css = splitTemp/*html*/ ``;

  return ["project-gallery.fn", html, ""];
}

module.exports = () => {
  const html = splitTemp/*html*/ `
    <main class="VIEW Archive">
      ${HeaderView({
        title: "Winners 2021",
      })}

      <section style="z-index: 10; overflow: visible;" class="layoutSection fullpage box ProjectFilter">
        Filter
        ${Select({ options })}
      </section>

      ${Rows({
        length: 4,
        classes: "ProjectGallery",
        content: [1, 2, 3, 4].map((project) => ({
          type: "card-with-image",
          classes: "Project",
          image: {
            src: "logos/logo-dinamo.png",
          },
          title: "Hello",
          content: ProjectGallery(),
        })),
      })}

    </main> 
  `;

  const css = splitTemp/*css*/ `
    body {
      --colorTheme: var(--white);
    }

    .Project.card .Description {
      margin-bottom: var(--size-S)
    }

    .Project.card .Categories {
      display: flex;
      gap: var(--size-XS);
      flex-wrap: wrap;
    }

    .badge.Category {
      width: auto;
    }

    .imageWrapper {
      background: silver;
    }

    .Archive section {
      position: relative;
      overflow-y: visible;
    }

    .Archive .HEADER-VIEW {
      min-height: unset;
      border-bottom: 0;
    }

    .Archive > .layoutSection.ProjectFilter {
      border-top: 0;
      flex-grow: 1;
    }
  `;

  return ["archive.view", html, css];
};
