const Underlined = getSnippet("text-underlined");

module.exports = (text) => {
  if (!text) text = "";
  const langOptions = text instanceof Object ? text : { all: text };
  const lines = [];

  for (const _lang in langOptions) {
    const _text = langOptions[_lang];
    const _textParts = _text.replace(/ /g, " --").split("--");

    lines.push(`<div class="langOption ${_lang}">`);

    _textParts.forEach((_part) => {
      lines.push(Underlined(_part));
    });

    lines.push("</div>");
  }

  const html = [`<div class="textUnderlinedMulti">`, ...lines, `</div>`];

  const css = /*css*/ `
    .textUnderlinedMulti {
      width: 100%;
    }

    .textUnderlinedMulti .langOption {
      overflow-x: clip;
      overflow-y: visible;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }

    .textUnderlinedMulti .textUnderlined.outerBox {
      display: inline-flex;
    }

    .textUnderlinedMulti .textUnderlined.outerBox > * {
      flex-grow: 0;
    }

    .textUnderlinedMulti .textUnderlined.outerBox:first-child {
      margin-bottom: var(--size-S);
      position: relative;
    }

    .textUnderlinedMulti .textUnderlined.outerBox:first-child .line {
      bottom: calc(var(--borderFull) * -1);
      width: 100vw;
      position: absolute;
    }

    @media (-webkit-min-device-pixel-ratio: 1.5) {
      .textUnderlinedMulti .textUnderlined.outerBox .line {
        margin: unset;
      }
    }

    .textUnderlinedMulti .textUnderlined.outerBox:last-child {
      flex-grow: 1;
    }

    .textUnderlinedMulti .text {
      white-space: pre;
    }
  `;

  return ["text-underlined-multiline.snip", html, css];
};
