const e = getJs("event-handler");

module.exports = ({
  type = "button",
  id,
  classes,
  label,
  onclick,
  href,
  onsubmit,
  icon
}) => {
  const tag = type === "link" ? "a" : "button";

  id = id ? `id="${id}"` : "";
  classes = classes || "";
  icon = icon || "";
  href = href ? `href="${href}"` : "";
  onclick = onclick ? e.onclick(onclick) : "";
  onsubmit = onsubmit ? e.onsubmit(onsubmit) : "";

  const html = splitTemp/*html*/`
    <${tag}
      ${id}
      class="button ${classes}"
      type=${type}
      ${href}
      ${onclick}
      ${onsubmit}
    >
      ${label}
      ${icon}
    </${tag}>
  `;

  const css = /*css*/`
    .button {
      position: relative;
      padding: 0 var(--size-S);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: background-color 200ms;
      border: var(--borderFull) solid var(--darkViolet);
    }

    .button.unstyled {
      background-color: transparent;
      border: none;
      padding: 0;
      width: auto;
      height: auto;
    }

    .button .label {
      pointer-events: none;
    }
    
    .button:hover {
      background-color: var(--colorKey);
      color: var(--white);
    }
    
    .button:focus {
      outline: none;
      background-color: var(--colorKey);
      color: var(--white);
    }
    
    
  `;

  return ["button-bare.snip", html, css];
};
