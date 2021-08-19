const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const Select = getSnippet("input-select-multi");
const CategoryBadges = getSnippet("category-badges");

const getProjects = getJs("get-projects");

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
].map(({ id, all }) => ({
  id: "#" + all.replace(" design", ""),
  all: "#" + all.replace(" design", ""),
}));

function ProjectCard(project) {
  const html = [
    /*html*/ `
      <p class="Description">
        Zwanzig Jahre Kulturbüro Zürich
      </p>
      <div class="Categories">
    `,
    CategoryBadges(project),
    `</div>`,
  ];

  const css = splitTemp/*html*/ ``;

  return ["project-card.fn", html, ""];
}

function categoryClasses(project) {
  const categories = Object.keys(project)
    .filter((k) => k.startsWith("tag-"))
    .map((k) => "#" + project[k].replace(" design", ""));

  return categories.join(" ");
}

module.exports = async () => {
  const projects = await getProjects.all();

  const html = splitTemp/*html*/ `
    <script defer type="text/javascript" src="/js/archive.js"></script>

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
        content: projects.map((project) => ({
          type: "card-with-image",
          classes: `Project ${categoryClasses(project)}`,
          image: {
            src: "logos/logo-dinamo.png",
          },
          title: project.projekttitel,
          content: ProjectCard(project),
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

    .Project.card.--hidden {
      display: none
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
