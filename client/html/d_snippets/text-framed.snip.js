module.exports = (data) => {
  const html = splitTemp/*html*/`
    <span class="textFramed">
      <p>${data?.text}</p>
    </span>
  `;

  const css = /*css*/`
    .textFramed {
      font-size: var(--fontSize-M);
      padding: 0 var(--spacing-S);
      display: block;
      border: 2px solid black;
      border-radius: var(--circle-M);
      height: var(--circle-M);
    }

    .textFramed > p {
      vertical-align: middle;
      display: inline;
    }

  `;

  return ["text-framed.snip", html, css];
};
