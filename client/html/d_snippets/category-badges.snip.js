const Badge = getSnippet("badge");

module.exports = (project) => {
  function label(category) {
    return `#${category.replace(" design", "")}`;
  }

  const html = splitTemp/*html*/ `
    <div class="CategoryBadges">
      ${
        project[`tag-1`]
          ? Badge({ size: "S", label: label(project[`tag-1`]) })
          : ""
      }
      ${
        project[`tag-2`]
          ? Badge({ size: "S", label: label(project[`tag-2`]) })
          : ""
      }
      ${
        project[`tag-3`]
          ? Badge({ size: "S", label: label(project[`tag-3`]) })
          : ""
      }
    </div>
  `;

  const css = /*css*/ `
    .CategoryBadges {
      display: flex;
      flex-direction: row;
      gap: var(--size-XS);
      flex-wrap: wrap;
    }
  `;

  return ["category-badges.snip", html, css];
};
