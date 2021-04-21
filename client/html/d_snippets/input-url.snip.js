const TextShort = getSnippet("input-text-short");

module.exports = (data) => {
  data.subType = "url";
  data.type = "text";
  data.maxlength = 80;
  data.attr = `
    pattern="(^https?://)?(www\\.)?([^www][a-zA-Z0-9-æøåöäüéÆØÅÖÄÜÉ]{2,})(\\.[a-zA-Z]{2,})(/.*)?"
  `;

  return TextShort(data);
};
