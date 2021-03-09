const e = getJs("event-handler");
const Underlined = getSnippet("text-underlined");

module.exports = ({
  type = "button",
  id,
  classes,
  label,
  onclick,
  href,
  target = "_blank"
}) => {
  const tag = type !== "link" ? "button" : "a";

  label = label instanceof Object
        ? lang`${label}`
        : label;

  id = id ? `id="${id}"` : "";
  classes = classes || "";
  href = href ? `href="${href}"` : "";
  onclick = onclick ? e.onclick(onclick) : "";

  const html = splitTemp/*html*/`
    <${tag}
      ${id}
      class="link styledLink ${classes}"
      type=${type}
      ${href}
      ${onclick}
      ${target}
    >
      <label class="label">
        ${Underlined("looo")}
      </label>
    </${tag}>
  `;

  const css = /*css*/`
  `;

  return ["link.snip", html, css];
};
