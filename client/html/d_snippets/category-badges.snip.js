const Badge = getSnippet("badge");

module.exports = (tags) => {
  function label(category) {
    return `#${category.replace(" design", "")}`;
  }

  const html = splitTemp/*html*/ `
    <div class="CategoryBadges">
      ${tags?.[0] ? Badge({ size: "S", label: label(tags[0]) }) : ""}
      ${tags?.[1] ? Badge({ size: "S", label: label(tags[1]) }) : ""}
      ${tags?.[2] ? Badge({ size: "S", label: label(tags[2]) }) : ""}
      ${tags?.[3] ? Badge({ size: "S", label: label(tags[3]) }) : ""}
    </div>
  `;

  const css = /*css*/ `
    .CategoryBadges {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .CategoryBadges .button.RoundedButton {
      border: unset;
      background-color: var(--colorKey);
      color: var(--white);
    }

    .--size-sm .CategoryBadges .button.RoundedButton {
      height: calc(var(--size-S) * 1.5);
      border-radius: calc(var(--size-S) * 1.5 / 2);
    }

    .--size-sm .CategoryBadges .button.RoundedButton .label {
      font-size: calc(var(--fontSize-S) / 1.3);
    }
  `;

  return ["category-badges.snip", html, css];
};
