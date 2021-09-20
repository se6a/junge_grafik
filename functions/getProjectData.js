// const link = `https://api.jungegrafik.ch/symphony/api/entries/einreichungen/?auth-token=${auth}}`;
// const fetch = require("node-fetch");
// const params = ["filter[gewinner]=Yes"];

// const operationFreedom = async () => {
//   const data = await (
//     await fetch(link, {
//       method: "GET",
//     })
//   ).json();

//   console.log("");
// };
const fs = require("fs");
// const data = require("./projects-original");

// const fields = {
//   vorname: "firstname",
//   familienname: "lastname",
//   geschlecht: "gender",
//   sprache: "lang",
//   geburtsjahr: "born",
//   "strasse-nummer": "street",
//   "postleitzahl-ort": "location",
//   "e-mail": "email",
//   mobile: "mobile",
//   "link-instagram-profil": "instagram",
//   "link-portfolio": "portfolio",

//   ausbildungsniveau: "eduNiveau",
//   ausbildungsjahr: "eduYear",
//   "kanton-des-ausbildungsortes": "eduCanton",

//   dozenten: "teacher",

//   "projekt-id": "projectId",

//   projekttitel: "projectTitle",
//   entstehungsjahr: "originYear",
//   entstehungort: "originLocationType",
//   "name-ausbildungsinstitution-lehrbetrieb": "originLocation",
//   projektbeschrieb: "description",

//   gruppenarbeit: "groupWork",

//   "tag-1": "tag1",
//   "tag-2": "tag2",
//   "tag-3": "tag3",
// };

// const keys = [
//   "_id",
//   "_reprografien-einreichung",
//   "_reprografien",
//   "familienname",
//   "vorname",
//   "geschlecht",
//   "sprache",
//   "geburtsjahr",
//   "strasse-nummer",
//   "postleitzahl-ort",
//   "e-mail",
//   "mobile",
//   "entstehungsjahr",
//   "tag-1",
//   "tag-2",
//   "ausbildungsniveau",
//   "ausbildungsjahr",
//   "kanton-des-ausbildungsortes",
//   "hash",
//   "einreichedatum",
//   "projekt-id",
//   "gewinner",
//   "gezahlter-betrag",
//   "gezahlt-am",
//   "zahlungsart",
//   "teilnahmegebuehr-bestaetigt",
//   "paketsendung",
//   "paketsendung-abgeholt",
//   "gruppenarbeit",
//   "projekttitel",
//   "entstehungsort",
//   "name-ausbildungsinstitution-lehrbetrieb",
//   "name-ausbildungsinstitution-lehrbetrieb-bearbeitet",
//   "name-ausbildungsinstitution-lehrbetrieb-zeile-2",
//   "dozenten",
//   "projektbeschrieb",
//   "neue-reprografien-angefragt",
//   "redaktion-abgeschlossen",
//   "bewertung-audrey-fleur-ljubenovic",
//   "bewertung-demian-conrad",
//   "bewertung-dennis-moya-razafimandimby",
//   "bewertung-felix-pfaeffli",
//   "bewertung-jonas-voegeli",
//   "bewertung-larissa-kasper",
//   "bewertung-lena-ruppen",
//   "bewertung-marion-fink",
//   "bewertung-valeria-bonin",
//   "reihenfolge",
//   "bemerkungen",
//   "projektbeschrieb-bearbeitet",
//   "link-portfolio",
//   "link-instagram-profil",
//   "tag-3",
//   "dozenten-bearbeitet",
//   "link-videomaterial",
//   "projekttitel-bearbeitet",
//   "link-projektwebsite-prototyp",
//   "weitere-gestalter",
// ];

// const keys = {
//   general: ["einreichedatum", "_id", "_reprografien", "reihenfolge"],
//   student: [
//     "link-portfolio",
//     "link-instagram-profil",
//     "weitere-gestalter",
//     "familienname",
//     "vorname",
//     "geschlecht",
//     "sprache",
//     "geburtsjahr",
//     "strasse-nummer",
//     "postleitzahl-ort",
//     "e-mail",
//     "mobile",
//   ],
//   education: [
//     "name-ausbildungsinstitution-lehrbetrieb",
//     "name-ausbildungsinstitution-lehrbetrieb-bearbeitet",
//     "name-ausbildungsinstitution-lehrbetrieb-zeile-2",
//     "ausbildungsniveau",
//     "ausbildungsjahr",
//     "kanton-des-ausbildungsortes",
//   ],
//   project: [
//     "link-projektwebsite-prototyp",
//     "entstehungsjahr",
//     "entstehungsort",
//     "tag-1",
//     "tag-2",
//     "tag-3",
//     "gruppenarbeit",
//     "dozenten",
//     "projekt-id",
//     "projekttitel-bearbeitet",
//     "dozenten-bearbeitet",
//     "projekttitel",
//     "projektbeschrieb",
//     "projektbeschrieb-bearbeitet",
//     "link-videomaterial",
//   ],
// };

// const dataFiltered = {};

// data.forEach((project) => {
//   const id = project["projekt-id"].value;
//   dataFiltered[id] = {};

//   Object.keys(keys).forEach((keyGroup) => {
//     dataFiltered[id][keyGroup] = {};
//     const keyGroupKeys = keys[keyGroup];
//     keyGroupKeys.forEach((key) => {
//       if (project?.[key]) {
//         const chunk = project[key]?.item?.value
//           ? project[key].item.value
//           : project[key]?.value
//           ? project[key].value
//           : project[key];

//         dataFiltered[id][keyGroup][key] = chunk;
//       }
//     });
//   });
// });

// fs.writeFile("here.json", JSON.stringify(dataFiltered), (err) => {
//   if (err) throw err;
//   console.log("DONE");
// });

// const projects2 = require("../client/data/projects/projects-2");
// const projects3 = {};

// for (const id in projects2) {
//   const project = projects2[id];

//   project.general.einreichedatum =
//     project.general.einreichedatum.date.start._iso;

//   project.general.symphonyId = project.general._id;
//   delete project.general._id;

//   project.general.reprografien = project.general._reprografien;
//   delete project.general._reprografien;

//   project.project.tags = [
//     project.project?.["tag-1"],
//     project.project?.["tag-2"],
//     project.project?.["tag-3"],
//   ].filter((tag) => tag);

//   projects3[id] = project;
// }

// fs.writeFile(
//   "projects-3.js",
//   "module.exports = " + JSON.stringify(projects3) + ";",
//   (err) => {
//     if (err) throw err;
//     console.log("DONE");
//   }
// );

// console.log(projects3);

const targetFolder = "../client/media/projects/2021/large";

const images = {};

const projects = require("./projects-3");

fs.readdir(targetFolder, (err, files) => {
  if (err) throw err;
  files = files.filter((file) => file !== "__MACOSX");

  files.forEach((file) => {
    const id = parseInt(file.match(/2021-(\d+)/)[1]);

    if (Array.isArray(projects[id].project.images) === false) {
      projects[id].project.images = [];
    }

    projects[id].project.images.push(file.replace(/-\d{4}px-/, "-__SIZE__-"));
  });

  fs.writeFile(
    "projects-4.js",
    "module.exports = " + JSON.stringify(projects) + ";",
    (err) => {
      if (err) throw err;
      console.log("DONE");
    }
  );

  // console.log();
});
