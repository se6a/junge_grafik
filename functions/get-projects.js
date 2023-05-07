const fetch = require("node-fetch");
const auth = "auth-token=02701d93";

function formatResponse(raw) {
    const formatted = {};

    Object.keys(raw).forEach((key) => {
        formatted[key] =
            raw[key]?.value ||
            raw[key]?.item?.value ||
            raw[key]?.date?.start?._iso ||
            null;
    });

    delete formatted._id;
    delete formatted._reprografien;

    formatted.id = raw._id;
    formatted.reprografien = raw._reprografien;

    return formatted;
}

module.exports.all = async () => {
    const raw = (
        await (
            await fetch(
                `https://api.jungegrafik.ch/symphony/api/entries/einreichungen?${auth}&format=json&limit=30`,
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
    try {
        const raw = (
            await (
                await fetch(
                    `https://api.jungegrafik.ch/symphony/api/entries/einreichungen/?${auth}&format=json&limit=1`,
                    {
                        method: "GET",
                    }
                )
            ).json()
        ).response.entry;

        const formatted = formatResponse(raw);

        return formatted;
    } catch (err) {
        console.error(err);
    }
};

module.exports.byId = async (id) => {
    try {
        const raw = (
            await (
                await fetch(
                    `https://api.jungegrafik.ch/symphony/api/entries/einreichungen/${id}/?${auth}&format=json`,
                    {
                        method: "GET",
                    }
                )
            ).json()
        ).response.entry;

        if (!raw) throw "no response";

        const formatted = formatResponse(raw);
        return formatted;
    } catch (err) {
        console.error(err);
    }
};

module.exports.reproLinksOf = async (id) => {
    const links = (
        await (
            await fetch(
                `https://api.jungegrafik.ch/symphony/api/entries/reprografien/?${auth}&format=json&filter[einreichung]=${id}&fields=datei`
            )
        ).json()
    ).response.entry.map((item) => item.datei.filename.value);

    return links;
};

module.exports.reproLinks = async () => {
    const links = (
        await (
            await fetch(
                `https://api.jungegrafik.ch/symphony/api/entries/reprografien/?${auth}&format=json&fields=datei,einreichung&limit=3000&order=asc`
            )
        ).json()
    ).response.entry.reduce((cache, item) => {
        if (!cache[item.einreichung.item._id]) {
            cache[item.einreichung.item._id] = [];
        }

        cache[item.einreichung.item._id].push(item.datei.filename.value);

        return cache;
    }, {});

    return links;
};
