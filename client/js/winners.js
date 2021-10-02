let urlSearchParams;
let queryParams;
let $filterContainer;
let $filter;
let $filterDisplay;
let $ProjectGallery;
let $projectCards;
let $rowPlaceholderBox;
let rowLengths;
let visibleCards;
let selectedCategories;

(() => {
  urlSearchParams = new URLSearchParams(window.location.search);
  queryParams = Object.fromEntries(urlSearchParams.entries());

  // Remove query parameters:
  const url = location.href.split("?")[0];
  history.pushState(null, "", url);
})();

function maybeRestoreScroll() {
  // If coming back from project, scroll to position of that project in the winners gallery:
  if (queryParams.from) {
    const $card = document.querySelector(`.P-${queryParams.from}`);
    scrollTo(0, $card.offsetTop);
  }
}

function maybeRestoreFilter() {
  if (!queryParams.winnersFilter || queryParams.winnersFilter === "false")
    return;

  const prevSelected = queryParams.winnersFilter.split(",").map((c) => `#${c}`);

  // Create SelectItems for Filter Input:
  prevSelected.forEach((selected) => {
    const $item = selectMultiItem(selected, selected);
    const $option = $filterContainer.querySelector(
      `.option[data-id="${selected}"`
    );

    $filterDisplay.insertAdjacentElement("beforeend", $item);

    $item.addEventListener("click", () => {
      let values = JSON.parse($filter.dataset.value);
      values = values.filter((v) => v !== $item.id);
      $filter.dataset.value = JSON.stringify(values);
      $item.remove();
      $option.classList.remove("--selected");
      $filter.dispatchEvent(new InputEvent("update"));
    });
  });

  $filter.dataset.value = JSON.stringify(prevSelected);

  $filter.dispatchEvent(new Event("update"));
}

function updateFilter() {
  const value = JSON.parse($filter.dataset.value);
  if (value.length) selectedCategories = value;
  else selectedCategories = "all";
  updateCardsATag();
  updateGallery();
}

function updateCardsATag() {
  [...$projectCards].forEach(($card) => {
    const $aTag = $card.querySelector("a");
    const oldLink = $aTag.getAttribute("href");
    const newLink = oldLink.replace(
      /winnersFilter=[^&']*/,
      `winnersFilter=${
        Array.isArray(selectedCategories)
          ? selectedCategories.join(",").replace(/#/g, "")
          : "false"
      }`
    );
    $aTag.setAttribute("href", newLink);
  });
}

function updateGallery() {
  $projectCards.forEach(($card, i) => {
    const cardCategories = [...$card.classList].filter((c) =>
      c.startsWith("#")
    );

    if (
      selectedCategories === "all" ||
      Array.isArray(selectedCategories) === false ||
      selectedCategories.every((c) => cardCategories.includes(c))
    ) {
      $card.classList.remove("--hidden");
      visibleCards++;
    } else {
      $card.classList.add("--hidden");
    }
  });

  rowPlaceholderBoxVisibility();
}

function rowPlaceholderBoxVisibility() {
  // Overwrite css handling of placeholder:
  const hasEmptyBoxes = visibleCards % rowLengths[PAGE.currentSize] > 0;
  $rowPlaceholderBox.style.display = hasEmptyBoxes ? "block" : "none";
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    $filterContainer = document.querySelector(".ProjectFilter");
    $filter = $filterContainer.querySelector("input");
    $filterDisplay = $filterContainer.querySelector(".input");
    $ProjectGallery = document.querySelector(".ProjectGallery.Rows");
    $projectCards = $ProjectGallery.querySelectorAll(".Project.card");
    $rowPlaceholderBox = $ProjectGallery.querySelector(".placeholder.box");
    rowLengths = JSON.parse($ProjectGallery.dataset.length).reduce(
      (obj, rowLength, i) => {
        obj[Object.keys(PAGE.sizes)[i]] = rowLength;
        return obj;
      },
      {}
    );
    selectedCategories = "all";
    visibleCards = $projectCards.length;

    document.body.addEventListener("sizeChange", rowPlaceholderBoxVisibility);
    $filter.addEventListener("update", updateFilter);

    rowPlaceholderBoxVisibility();
    maybeRestoreFilter();
    maybeRestoreScroll();
  },
  { once: true }
);
