const TextShort = getSnippet("input-text-short");

module.exports = (data) => {
  data.subType = "url";
  data.type = "text";
  data.maxlength = 80;
  data.attr = `
    pattern="(^https?://)?(www\\.)?([\\w.]+)(\\.\\w+)(/.*)?"
  `;

  return TextShort(data);
};
