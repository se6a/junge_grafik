const Tooltip = getSnippet("tooltip");

module.exports = ({ label, required, tooltip }) => {
  required = required ? "--required" : "";

  const html = splitTemp/*html*/`
    <div class="formField Email ${required}">
      <header class="header">
        <label class="label">
          ${label?.de}
        </label>
        ${Tooltip(tooltip)}
      </header>

      <input
        id="footer-newsletter-email"
        class="input Email"
        name="email"
        type="email"
        placeholder="Your email"
        ${required ? "required" : ""}
      />
    </div>
  `;

  const css = /*css*/`
  `;

  return ["input-email.snip", html, css];
};
