document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("DOM loaded");
  }
);

function makeId(addition = "") {
  const random = Math.round(Math.random() * 1000);
  return (new Date().getTime().toString(16) + random) + addition;
};
