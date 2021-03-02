const TextShort = getSnippet("input-text-short");

module.exports = (data) => {
  data.subType = "number";
  data.type = "number";
  data.attr = `
    min="${data.min || 0}"
    max="${data.max || 9999999}"
  `;

  const html = splitTemp/*html*/`
    ${TextShort(data)}
  `;

  const css = /*css*/`
    /* Chrome, Safari, Edge, Opera */
    .TextShort input::-webkit-outer-spin-button,
    .TextShort input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    .TextShort input[type=number] {
      -moz-appearance: textfield;
    }
  `;

  return ["input.number.snip", html, css];
};
