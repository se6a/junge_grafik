const TextShort = getSnippet("input-text-short");

module.exports = (data) => {
  data.subType = "email";
  data.typeAttr = `type="email"`;
  data.attr = `
    placeholder="${data.placeholder || ""}"
    pattern="^[\\w0-9._%+-]+@[\\w0-9.-]+\\.[\\w]{2,}$"
  `;

  return TextShort(data);
};
