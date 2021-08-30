const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const CategoryBadges = getSnippet("category-badges");
const getProjects = getJs("get-projects");
const reproLinks = require("../../data/reprolinks.data");

function sanitizeInstaId(instaId) {
  return instaId
    .replace(/^(http?s:\/\/)?(www\.)?(instagram\.com\/)/, "")
    .replace(/\/$/, "");
}

function makeLinkLabel(link) {
  return link
    .toLowerCase()
    .replace(/^(https?:\/\/)?(www\.)?/, "")
    .replace(/\/$/, "");
}

function InstagramLink(project) {
  if (!project["link-instagram-profil"]) return {};

  const instaId = sanitizeInstaId(project["link-instagram-profil"]).replace(
    "instagram.com/",
    ""
  );

  return {
    title: "Instagram",
    items: [
      /*html*/ `
        <a class="textButton"
          href="https://instagram.com/${instaId}"
          target="_blank"
        >
          ${instaId}
        </a>
      `,
    ],
  };
}

function PortfolioLink(project) {
  if (!project["link-portfolio"]) return {};

  const link = project["link-portfolio"];
  const label = makeLinkLabel(link);

  return {
    title: "Portfolio",
    items: [
      /*html*/ `
        <a class="textButton"
          href="${link}"
          target="_blank"
        >
          ${label}
        </a>
      `,
    ],
  };
}

function ProjectLink(project) {
  if (!project["link-projektwebsite-prototyp"]) return {};

  const link = project["link-projektwebsite-prototyp"];
  const label = makeLinkLabel(link);

  console.log(link);

  return {
    title: "Project Website",
    items: [
      /*html*/ `
        <a class="textButton"
          href="${link}"
          target="_blank"
        >
          ${label}
        </a>
      `,
    ],
  };
}

module.exports = async ({ req }) => {
  const project = await getProjects.byId(req.query.id);
  project.reprografien = reproLinks[project.id];

  console.log(project);

  const html = splitTemp/*html*/ `
    <main class="VIEW Project">
      ${HeaderView({
        image: `https://api.jungegrafik.ch/workspace/medien/einreichungen/${project.reprografien[0]}`,
        title: `${project.vorname} ${project.familienname}`,
        content: [
          "projectHeader",
          splitTemp/*html*/ `
            <h1>${project.projekttitel}</h1>
            ${CategoryBadges(project)}
          `,
          "",
        ],
      })}

      ${Rows({
        length: 2,
        content: [
          {
            type: "text",
            content: project.projektbeschrieb,
          },
          {
            type: "overview",
            title: "",
            details: [
              {
                title: "Date of origin",
                items: [project.entstehungsjahr],
              },
              {
                title: "Educational institution",
                items: [project["name-ausbildungsinstitution-lehrbetrieb"]],
              },
              {
                title: "Level",
                items: [project.ausbildungsniveau],
              },
              PortfolioLink(project),
              InstagramLink(project),
              ProjectLink(project),
            ],
          },
        ],
      })}

      ${Rows({
        length: 1,
        content: project.reprografien.slice(1, 6).map((repr) => {
          return {
            type: "image-box",
            image: {
              src: `symphony/${repr}`,
            },
          };
        }),
      })}

      
    </main>
  `;
  const css = splitTemp/*css*/ `
    .VIEW.Project {
      background-color: var(--white);
    }

    .VIEW.Project > .HEADER-VIEW {
      min-height: unset;
    }

    .HeaderView.image {
      border-bottom: 2px solid black;
    }

    .HeaderView.title,
    .HeaderView.title .langOption {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  `;

  return ["project.view", html, css];
};
