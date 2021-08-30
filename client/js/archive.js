document.addEventListener(
  "DOMContentLoaded",
  () => {
    const $filter = document.querySelector(".ProjectFilter input");
    const $ProjectGallery = document.querySelector(".ProjectGallery.Rows");
    const $projectCards = $ProjectGallery.querySelectorAll(".Project.card");
    const $rowPlaceholderBox =
      $ProjectGallery.querySelector(".placeholder.box");
    const rowLengths = JSON.parse($ProjectGallery.dataset.length).reduce(
      (obj, rowLength, i) => {
        obj[Object.keys(PAGE.sizes)[i]] = rowLength;
        return obj;
      },
      {}
    );

    let selectedCategories = "all";
    let visibleCards = $projectCards.length;

    rowPlaceholderBoxVisibility();

    document.body.addEventListener("sizeChange", rowPlaceholderBoxVisibility);

    $filter.addEventListener("update", () => {
      const value = JSON.parse($filter.dataset.value);
      if (value.length) selectedCategories = value;
      else selectedCategories = "all";

      updateGallery();
    });

    function updateGallery() {
      $projectCards.forEach(($card, i) => {
        const categories = [...$card.classList].filter((c) =>
          c.startsWith("#")
        );

        if (
          selectedCategories === "all" ||
          categories.some((c) => selectedCategories.includes(c))
        ) {
          $card.classList.remove("--hidden");
          visibleCards++;
        } else {
          $card.classList.add("--hidden");
        }
      });

      rowPlaceholderBoxVisibility();
    }

    // Overwrite css handling of placeholder:
    function rowPlaceholderBoxVisibility() {
      const hasEmptyBoxes = visibleCards % rowLengths[PAGE.currentSize] > 0;
      $rowPlaceholderBox.style.display = hasEmptyBoxes ? "block" : "none";
    }
  },
  { once: true }
);
