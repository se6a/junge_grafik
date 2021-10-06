const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const CategoryBadges = getSnippet("category-badges");
const submissions = require("../../data/submissions/winners-2021");
const Button = getSnippet("button");

function linkToLabel(link) {
  return link
    .toLowerCase()
    .replace(/^(https?:\/\/)?(www\.)?/, "")
    .replace(/\/$/, "");
}

function Link(title, links) {
  if (!links || links.length < 1) return {};
  if (Array.isArray(links) === false) links = [links];
  const isInsta = title === "Instagram";

  links = links.map((link) => ({
    href: isInsta ? "https://instagram.com/" + link : link,
    label: linkToLabel(link),
  }));

  console.log("LINKS", links);
  return {
    title: title,
    items: [
      links
        .map(
          (link) => /*html*/ `<a class="textButton"
          href="${link.href}"
          target="_blank"
        >
          ${link.label}
        </a>`
        )
        .join(", "),
    ],
    hasArrow: false,
  };
}

module.exports = async ({ req }) => {
  const { project, students, education } = submissions[req.query.id];
  const prevWinnersOrder = req.query.winnersOrder || false;
  const prevWinnersFilter = req.query.winnersFilter || false;

  const html = splitTemp/*html*/ `
  <script defer type="text/javascript" src="/js/project.js"></script>

    <main class="VIEW Project">
      ${HeaderView({
        image: `projects/${project.images[0]}`,
        content: [
          "projectHeader",
          splitTemp/*html*/ `
            <h3>${students
              .map((st) => `${st.firstname} ${st.lastname}`)
              .join(", ")}<h3>
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
                title: "School",
                items: [
                  `${education.type}, ${
                    ["1st", "2nd", "3rd", "4th"][education.year - 1]
                  } year, ${education.institution}`,
                ],
                hasArrow: false,
              },
              education.company
                ? {
                    title: "Company",
                    items: [`${education.company}`],
                    hasArrow: false,
                  }
                : {},
              {
                title: "Mentoring",
                items: [project.teacher.join(", ")],
                hasArrow: false,
              },
              Link(
                "Portfolio",
                students.filter((st) => st.portfolio).map((st) => st.portfolio)
              ),
              Link(
                "Instagram",
                students.filter((st) => st.instagram).map((st) => st.instagram)
              ),
            ],
          },
        ],
      })}

      <div class="gallery box">
        ${
          project?.images?.length
            ? Rows({
                length: 1,
                classes: "images",
                content: project.images.slice(1, 6).map((image) => {
                  return {
                    type: "image-box",
                    image: {
                      classes: "projectImage",
                      src: `projects/${image}`,
                      // href: `${ENV.host}/media/projects/2021/lg/${image.replace(
                      //   "__SIZE__",
                      //   "lg"
                      // )}`,
                    },
                  };
                }),
              })
            : ""
        }
        ${
          project?.videos?.length
            ? Rows({
                length: 1,
                classes: "videos",
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

    body.--size-lg .Project .Overview.box {
      gap: 0;
      grid-template-columns: 1fr;
    }

    .Project .OverviewItem .textButton {
      display: inline-block;
    }

    .Project .gallery {
      padding: 0;
    }

    .Project .gallery .Rows.content {
      gap: 2px;
    }

    .Project .gallery .images ~ .videos {
      margin-top: 2px;
    }

    .Project .ImageBox.projectImage {
      border: unset;
    }

    .Project .ImageBox.projectImage picture {
      justify-content: flex-start;
    }

    .Project .ImageBox.projectImage.landscape {
      max-width: 75%;
    }

    .Project .ImageBox.projectImage.portrait {
      max-width: 37.5%;
    }

    body:not(.--size-lg) .Project .ImageBox.projectImage {
      max-width: 100%;
    }

    .Project .VideoBox iframe {
      width: 75%;
      height: 40vw;
    }

    body:not(.--size-lg) .Project .VideoBox iframe {
      width: 100%;
      height: 55vw;
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
