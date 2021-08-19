const fetch = require("node-fetch");

function formatResponse(raw) {
  const formatted = {};

  Object.keys(raw).forEach((key) => {
    formatted[key]
      = raw[key]?.value
      || raw[key]?.item?.value
      || raw[key]?.date?.start?._iso
      || null;
  });

  return formatted;
}

module.exports.all = async () => {
  const raw = (
    await (
      await fetch(
        "https://api.jungegrafik.ch/symphony/api/entries/einreichungen?auth-token=02701d93&format=json",
        {
          method: "GET",
        }
      )
    ).json()
  ).response;

  const formatted = raw.entry.map((e) => formatResponse(e));

  return formatted;
};

module.exports.first = async () => {
  const raw = (
    await (
      await fetch(
        "https://api.jungegrafik.ch/symphony/api/entries/einreichungen/?auth-token=02701d93&format=json",
        {
          method: "GET",
        }
      )
    ).json()
  ).response.entry[0];

  const formatted = formatResponse(raw);

  return formatted;
};
