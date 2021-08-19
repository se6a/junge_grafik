const HeaderView = getSection("header-view");
const Rows = getSection("rows");
const CategoryBadges = getSnippet("category-badges");
const getProject = getJs("get-projects");

console.log(getProject);

module.exports = async () => {
  const data = await getProject.first();
  console.log("DATA", data);

  const html = splitTemp/*html*/ `
    <main class="VIEW Project">
      ${HeaderView({
        image: "media/theme/quite_late.svg",
        title: `${data.vorname} ${data.familienname}`,
        content: [
          "projectHeader",
          splitTemp/*html*/ `
            <h1>${data.projekttitel}</h1>
            ${CategoryBadges(data)}
          `,
          "",
        ],
      })}

      ${Rows({
        length: 2,
        content: [
          {
            type: "text",
            content: data.projektbeschrieb,
          },
          {
            type: "overview",
            title: "",
            details: [
              {
                title: "Date of origin",
                items: [data.entstehungsjahr],
              },
              {
                title: "Educational institution",
                items: [data["name-ausbildungsinstitution-lehrbetrieb"]],
              },
              {
                title: "Level",
                items: [data.ausbildungsniveau],
              },
              {
                title: "Website",
                items: [
                  '<a class="textButton" href="https://instagram.com/loanaboppart.ch">loanaboppart.ch</a>',
                ],
              },
              {
                title: "Instagram",
                items: [
                  '<a class="textButton" href="https://instagram.com/loana.boppart">loana.boppart</a>',
                ],
              },
            ],
          },
        ],
      })}

      ${Rows({ length: 1, title: "Media", content: [] })}

      
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
