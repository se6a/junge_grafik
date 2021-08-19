const ButtonRounded = getSnippet("button-rounded");

module.exports = (badge) => {
  badge.classes = badge.classes ? "useAsBadge" + badge.classes : "useAsBadge";

  const html = ["", ButtonRounded(badge), ""];

  const css = /*css*/ `
    .RoundedButton.useAsBadge {
      pointer-events: none;
    }
  `;

  return ["badge.snip", html, css];
};
