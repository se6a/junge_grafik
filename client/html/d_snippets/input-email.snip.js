const TextShort = getSnippet("input-text-short");

module.exports = (data) => {
  data.subType = "email";
  data.typeAttr = `type="email"`;
  data.attr = `
    placeholder="${data.placeholder || ""}"
  `;

  return TextShort(data);
};
