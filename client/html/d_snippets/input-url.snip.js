const TextShort = getSnippet("input-text-short");

module.exports = (data) => {
  data.subType = "url";
  data.type = "text";
  data.attr = `
    pattern="(^https?://)?(www\\.)?([\\w.]+)(\\.\\w+)(/[\\w\\d/-_]*)?"
  `;

  return TextShort(data);
};
