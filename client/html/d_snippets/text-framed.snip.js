module.exports = (data) => {
  const html = splitTemp/*html*/`
    <span class="textFramed">
      <p>${data?.text}</p>
    </span>
  `;

  const css = /*css*/`
    .textFramed {
      font-size: var(--fontSize-M);
      padding: 0 var(--size-S);
      display: block;
      border: var(--borderFull) solid currentColor;
      border-radius: var(--size-M);
      height: var(--size-M);
    }

    .textFramed > p {
      vertical-align: middle;
      display: inline;
    }

  `;

  return ["text-framed.snip", html, css];
};
