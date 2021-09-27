const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const CategoryBadges = getSnippet("category-badges");
const submissions = require("../../data/submissions/winner-2021");
const Button = getSnippet("button");

function makeLinkLabel(link) {
  return link
    .toLowerCase()
    .replace(/^(https?:\/\/)?(www\.)?/, "")
    .replace(/\/$/, "");
}

function Link(title, link) {
  if (!link) return {};

  const label = makeLinkLabel(link);

  return {
    title: title,
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
    hasArrow: false,
  };
}

module.exports = async ({ req }) => {
  const { project, student, education } = submissions[req.query.id];
  const prevWinnersOrder = req.query.winnersOrder || false;
  const prevWinnersFilter = req.query.winnersFilter || false;

  const html = splitTemp/*html*/ `
  <script defer type="text/javascript" src="/js/project.js"></script>

    <main class="VIEW Project">
      ${HeaderView({
        image: `projects/${project.images[0]}`,
        // title: `${student.firstname} ${student.lastname}`,
        content: [
          "projectHeader",
          splitTemp/*html*/ `
            <h3>${student.firstname} ${student.lastname}<h3>
            <h2>${project.title}</h2>
            ${CategoryBadges(["winner2021", ...project.tags])}
          `,
          "",
        ],
      })}

      ${Rows({
        length: 2,
        content: [
          {
            type: "text",
            content: project.description,
          },
          {
            type: "overview",
            columns: 1,
            title: "",
            details: [
              {
                title: "Date of origin",
                items: [project.year],
                hasArrow: false,
              },
              {
                title: "Educational institution",
                items: [education.at],
                hasArrow: false,
              },
              {
                title: "Level",
                items: [education.level],
                hasArrow: false,
              },
              Link("Portfolio", student.portfolio),
              Link("Instagram", student.instagram),
              Link("Website Prototype", project.protoSite),
            ],
          },
        ],
      })}

      <div class="gallery box">
        ${Rows({
          length: 1,
          content: project.images.slice(1, 6).map((image) => {
            return {
              type: "image-box",
              image: {
                classes: "projectImage",
                src: `projects/${image}`,
                href: `${ENV.host}/media/projects/2021/lg/${image}`,
              },
            };
          }),
        })}
        ${
          project?.videos
            ? Rows({
                length: 1,
                content: project?.videos.map((video) => {
                  return {
                    type: "video-box",
                    src: video,
                  };
                }),
              })
            : ""
        }
      </div>

      ${Button({
        classes: "BackToWinners",
        label: "&#8592 back to the winners",
        href: `${ENV.host}/__winners-okt?winnersOrder=${prevWinnersOrder}&winnersFilter=${prevWinnersFilter}&from=${project.id}`,
        type: "link",
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

    .--size-lg .Project .Overview.box {
      gap: 0;
      grid-template-columns: 1fr;
    }

    .Project .gallery {
      padding: 0;
    }

    .Project .gallery .Rows.content {
      gap: 2px;
    }

    .Project .gallery > :nth-child(2) .Rows.content {
      margin-top: 2px;
    }
  
    .Project .ImageBox.projectImage {
      border: unset;
    }

    .Project .ImageBox.projectImage.landscape {
      max-width: 75%;
    }

    .Project .ImageBox.projectImage.portrait {
      max-width: 37.5%;
    }

    :not(.--size-lg) .Project .ImageBox.projectImage {
      max-width: 100%;
    }

    .Project .VideoBox iframe {
      width: 75%;
      height: 40vw;
    }

    :not(.--size-lg) .Project .VideoBox iframe {
      width: 100%;
      height: 55vw;
    }

    .Project .ImageBox.projectImage::before {
      background-color: unset;
    }

    .Project .button.BackToWinners {
      border-width: var(--borderHalf);
      height: var(--size-2XL);
      justify-content: center;
      background-color: var(--violetBright);
    }

    .Project .button.BackToWinners .label {
      font-size: var(--fontSize-L);
    }

    .Project .videoBox {
      width: 75%;
    }
  `;

  return ["project.view", html, css];
};
