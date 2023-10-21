const HeaderView = getSection("header-view");
const LanguageForm = getSection("form-language");
const ProjectForm = getSection("form-submit-project");
const ButtonUnderlined = getSnippet("button-underlined");

const winners23 = require("../../data/submissions/winners-2023");

module.exports = (data) => {
    const ids = Object.keys(winners23);

    const winner = ids.map((id, index) => {
        const prjdata = winners23[id];
        const { students = [], education = {}, project = {} } = prjdata;

        return /*html*/ `
        <div class="dataset">

            <div class="head">
                <div class="projectNumber">${id}</div>
                <div class="title">${project?.title}</div>
                <div class="index">${index + 1}</div>
            </div>
        
            <div class=" dataGroup students">
                <div class="subTitle">Students</div>

                ${students
                    .map(
                        (student) => `
                        <ul>
                            ${Object.keys(student)
                                .map(
                                    (key /*html*/) =>
                                        `<li>
                                            <div>${key}</div>
                                            <div>${student[key]}</div>
                                        </li>
                                        `
                                )
                                .join("")}
                        </ul>`
                    )
                    .join("")}
            </div>

            <div class="dataGroup education">
                <div class="subTitle">Education</div>
                <ul>
                    ${Object.keys(education)
                        .map(
                            (key) => `
                                <li>
                                    <div>${key}</div>
                                    <div>${education[key]}</div>
                                </li>`
                        )
                        .join("")}
                </ul>
            </div>

            <div class="dataGroup project">
                <div class="subTitle">Project</div>
                <ul>
                    ${Object.keys(project)
                        .map(
                            (key) => `
                                <li>
                                    <div>${key}</div>
                                    <div>${project[key]}</div>
                                </li>`
                        )
                        .join("")}
                </ul>
            </div>
        </div>
        `;
    });

    const html = splitTemp/*html*/ `
    <main id="Submit" class="VIEW Data" lang="">

        <div class="DataList">
            ${winner.join("")}
        </div>

    </main>
  `;

    const css = /*css*/ `
        body {
            --colorTheme: transparent;
        }

        .VIEW.Data .DataList {
            display: flex;
            flex-direction: column;
            padding: 2em;
        }

        .VIEW.Data .DataList {
            display: flex;
            flex-direction: column;
            gap: 6em;
            background: gainsboro;
        }

        .VIEW.Data .dataset {
            background: white;
            border: 1px solid black;
            padding: 2em;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .VIEW.Data .dataset .head {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .VIEW.Data .dataset .title {
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1em;
            max-width: 30ch;
        }

        .VIEW.Data .dataGroup {
            width: 100%;
        }

        .VIEW.Data .dataGroup + .dataGroup {
            margin-top: 2em;
        }

        .VIEW.Data .dataGroup .subTitle {

            text-align: center;
            width: 100%;
            border-bottom: 1px solid black;
            margin-bottom: 1em;
        }

        .VIEW.Data .dataGroup.students ul + ul {
            margin-top: 1em;
        }

        .VIEW.Data ul {
            display: flex;
            flex-direction: column;
            gap: 0.2em;
        }

        .VIEW.Data li {
            display: flex;
            gap: 1em
        }

        .VIEW.Data li > * {
            flex: 1;
        }

        .VIEW.Data li :first-child {
            text-align: right;
        }

        .VIEW.Data li:hover {
            background: gainsboro;
            color: black;
        }



        .View__daten .HEADER,
        .View__daten .FOOTER {
            display: none !important;
        }
  `;

    return ["__daten.view", html, css];
};
