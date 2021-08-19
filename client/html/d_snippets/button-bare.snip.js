const e = getJs("event-handler");

module.exports = ({
  type = "button",
  id,
  classes,
  label,
  onclick,
  href,
  onsubmit,
  icon,
  attr,
  size = "M",
}) => {
  const tag = type === "link" ? "a" : "button";

  size = `--${size}`;
  id = id ? `id="${id}"` : "";
  classes = (`${classes} ` || "") + size;
  icon = icon || "";
  href = href ? `href="${href}"` : "";
  onclick = onclick ? e.onclick(onclick) : "";
  onsubmit = onsubmit ? e.onsubmit(onsubmit) : "";

  const html = splitTemp/*html*/ `
    <${tag}
      ${id}
      class="${classes} button"
      type=${type}
      ${attr}
      ${href}
      ${onclick}
      ${onsubmit}
    >
      ${label}
      ${icon}
    </${tag}>
  `;

  const css = /*css*/ `
    .button:not(.unstyled) {
      font-family: FeixenSansEdgy;
      position: relative;
      padding: 0 var(--size-S);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: background-color 200ms;
      border: var(--borderFull) solid var(--darkViolet);
      cursor: pointer;
    }

    .button:not(.unstyled).--S {
      padding: 0 calc(var(--size-S) / 2);
    }

    .button:not(.unstyled).--S .label {
      font-size: var(--fontSize-S);
    }

    .button .label {
      pointer-events: none;
      white-space: nowrap;
    }
    
    .button:not(.unstyled):hover {
      background-color: var(--colorKey);
      color: var(--white);
    }
    
    .button:not(.unstyled):focus {
      outline: none;
      background-color: var(--colorKey);
      color: var(--white);
    }
  `;

  return ["button-bare.snip", html, css];
};
