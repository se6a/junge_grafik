const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const SelectMulti = getSnippet("input-select-multi");
const CategoryBadges = getSnippet("category-badges");
const reproLinks = require("../../data/reprolinks.data.js");

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

function ProjectCardContent(project) {
  const html = [
    /*html*/ `
      <p class="Description"></p>
      <div class="Categories">
    `,
    CategoryBadges(project),
    `</div>`,
  ];

  const css = splitTemp/*html*/ ``;

  return ["project-card.fn", html, css];
}

function categoryClasses(project) {
  const categories = Object.keys(project)
    .filter((k) => k.startsWith("tag-"))
    .map((k) => "#" + project[k].replace(" design", ""));

  return categories.join(" ");
}

function shuffleProjects(projects) {
  const shuffled = [];

  do {
    randomIndex = Math.floor(Math.random() * projects.length);
    shuffled.push(projects.splice(randomIndex, 1)[0]);
  } while (projects.length);

  return shuffled;
}

module.exports = async () => {
  const projects = await getProjects.all();
  const shuffledProjects = shuffleProjects([...projects]);

  const html = splitTemp/*html*/ `
    <script defer type="text/javascript" src="/js/archive.js"></script>

    <main class="VIEW Archive">
      ${HeaderView({
        title: "Winners 2021",
      })}

      <section style="z-index: 10; overflow: visible;" class="layoutSection fullpage box ProjectFilter">
        ${SelectMulti({ label: { all: "Filter" }, options })}
      </section>

      ${Rows({
        length: 4,
        classes: "ProjectGallery",
        content: shuffledProjects.map((project) => ({
          type: "card-with-image",
          classes: `Project ${categoryClasses(project)}`,
          image: {
            src: `symphony/${reproLinks[project.id][0]}`,
          },
          title: project.projekttitel,
          content: ProjectCardContent(project),
          link: `http://localhost:3000/project?id=${project.id}`,
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

    .Project.card > .contentWrapper > .box {
      justify-content: space-between;
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
