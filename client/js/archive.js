document.addEventListener(
  "DOMContentLoaded",
  () => {
    const $filter = document.querySelector(".ProjectFilter input");
    const $projectCards = document.querySelectorAll(".Project.card");
    let selectedCategories = "all";

    console.log($filter);

    $filter.addEventListener("update", () => {
      const value = JSON.parse($filter.dataset.value);
      if (value.length) selectedCategories = value;
      else selectedCategories = "all";

      updateGallery();
    });

    function updateGallery() {
      console.log(selectedCategories);

      $projectCards.forEach(($card) => {
        const categories = [...$card.classList].filter((c) =>
          c.startsWith("#")
        );

        if (
          selectedCategories === "all" ||
          categories.some((c) => selectedCategories.includes(c))
        )
          $card.classList.remove("--hidden");
        else $card.classList.add("--hidden");
      });
    }
  },
  { once: true }
);
