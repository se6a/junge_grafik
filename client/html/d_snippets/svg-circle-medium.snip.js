module.exports = (classes = "") => {
  const html = splitTemp/*html*/`
    <svg class="svg circle medium">
      <circle class="circle"></circle>
    </svg>
`;

const css = /*css*/`
  .svg.circle.medium {
    --center: calc(var(--circle-M) / 2);
    --radius: calc(var(--circle-M) / 2 - var(--borderHalf));
    background: yellow;
    display: flex;
    min-width: var(--circle-M);
    min-height: var(--circle-M);
  }

  .svg.circle.medium .circle {
    cx: var(--center);
    cy: var(--center);
    r: var(--radius);
    fill: none;
    stroke: currentColor;
    stroke-width: var(--borderFull);
  }
`;

return ["icon-medium-blank.snip", html, css];
};
