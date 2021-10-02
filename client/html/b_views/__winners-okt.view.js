const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const SelectMulti = getSnippet("input-select-multi");
const CategoryBadges = getSnippet("category-badges");
const submissions = require("../../data/submissions/winners-2021");

const options = [
  { id: "Animation design", all: "Animation design" },
  { id: "Corporate design", all: "Corporate design" },
  { id: "Editorial design", all: "Editorial design" },
  { id: "Environmental design", all: "Environmental design" },
  { id: "Exhibition design", all: "Exhibition design" },
  { id: "Illustration", all: "Illustration" },
  { id: "Infographic design", all: "Infographic design" },
  { id: "Interaction design", all: "Interaction design" },
  // { id: "Packaging design", all: "Packaging design" },
  { id: "Photography", all: "Photography" },
  { id: "Poster design", all: "Poster design" },
  // { id: "Signage design", all: "Signage design" },
  { id: "Typeface design", all: "Typeface design" },
  { id: "Typography", all: "Typography" },
  { id: "Web design", all: "Web design" },
].map(({ all }) => ({
  id: "#" + all.replace(" design", ""),
  all: "#" + all.replace(" design", ""),
}));

function CardContent(project) {
  const html = [
    /*html*/ `
      <p class="Description"></p>
      <div class="Categories">
    `,
    CategoryBadges(project.tags),
    `</div>`,
  ];

  const css = splitTemp/*html*/ ``;

  return ["project-card.fn", html, css];
}

function categoryClasses(project) {
  const categories = project.tags.map(
    (tag) => `#${tag.replace(" design", "")}`
  );

  return categories.join(" ");
}

function shuffleSubmissions(submissions, useOrder) {
  const shuffled = [];
  let shuffledIds = [];

  if (useOrder && useOrder !== "false") {
    // Use defined order:
    shuffledIds = useOrder.split(",");
    shuffledIds.forEach((id) => shuffled.push(submissions[id]));
  } else {
    // Make new order:
    submissions = Object.values(submissions);
    do {
      randomIndex = Math.floor(Math.random() * submissions.length);
      const submission = submissions.splice(randomIndex, 1)[0];
      shuffled.push(submission);
      shuffledIds.push(submission.project.id);
    } while (submissions.length);
  }

  return [shuffled, shuffledIds];
}

module.exports = async (data) => {
  const useOrder = data.req.query.winnersOrder || false;
  const [shuffledSubmissions, shuffledSubmissionsIds] = shuffleSubmissions(
    submissions,
    useOrder
  );

  const html = splitTemp/*html*/ `
    <script defer type="text/javascript" src="/js/winners.js"></script>

    <main class="VIEW Winners">
      ${HeaderView({
        title: "Winners 2021",
      })}

      <section style="z-index: 10; overflow: visible;" class="layoutSection fullpage box ProjectFilter">
        ${SelectMulti({ label: { all: "Filter" }, options })}
      </section>

      ${Rows({
        length: 4,
        classes: "ProjectGallery",
        content: shuffledSubmissions.map(({ project, students }) => ({
          type: "card-with-image",
          classes: `Project P-${project.id} ${categoryClasses(project)}`,
          attr: `role="button" aria-pressed="false"`,
          image: {
            src: "projects/" + project.images?.[0] || "",
          },
          title: `
            <p class="students">
              ${students
                .map((st) => `${st.firstname} ${st.lastname}`)
                .join(", ")}
            </p>
            <p class="project">${project.title}</p>
          `,
          content: CardContent(project),
          link: `${ENV.host}/project?id=${
            project.id
          }&winnersOrder=${shuffledSubmissionsIds.join(
            ","
          )}&winnersFilter=false`,
        })),
      })}

    </main> 
  `;

  const css = splitTemp/*css*/ `
    body {
      --colorTheme: var(--white);
    }

    .Project.card {
      overflow: visible;
    }

    .Project.card .title .students {
      margin-bottom: var(--size-XS);
    }

    .Project.card .title .project {
      font-size: var(--fontSize-S);
      margin-bottom: var(--size-XS);
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

    .Winners section {
      position: relative;
      overflow-y: visible;
    }

    .Winners .HEADER-VIEW {
      min-height: unset;
      border-bottom: 0;
    }

    .Winners > .layoutSection.ProjectFilter {
      border-top: 0;
      flex-grow: 1;
    }

    .Winners .ImageCard .image {
      max-width: unset;
      height: 100%;
    }

    .Winners .input.SelectMulti > .selectedItem {
      background-color: var(--darkViolet);
      border: unset;
      color: var(--white);
    }

    .Winners .selectedItem:hover {
      background-color: inherit;
    }
  `;

  return ["__winners-okt.view", html, css];
};
