module.exports = ({ text, size = "M" }) => {
  const html = splitTemp/*html*/`
    <span class="textFramed --${size}">
      <span>
        ${text}
      </span>
    </span>
  `;

  const css = /*css*/`
    .textFramed {
      font-family: FeixenSansEdgy;
      display: inline-flex;
      border: var(--borderFull) solid currentColor;
      align-items: center;
    }

    .--S.textFramed {
      font-size: var(--fontSize-S);
      padding: 0 var(--size-XS);
      border-radius: var(--size-S);
      height: var(--size-S);
    }

    .--M.textFramed {
      font-size: var(--fontSize-M);
      padding: 0 var(--size-S);
      border-radius: var(--size-M);
      height: var(--size-M);
    }

    .--L.textFramed {
      font-size: var(--fontSize-L);
      padding: 0 var(--size-M);
      border-radius: var(--size-L);
      height: var(--size-L);
    }

    .textFramed > span {
      vertical-align: middle;
      display: inline;
    }
  `;

  return ["text-framed.snip", html, css];
};
