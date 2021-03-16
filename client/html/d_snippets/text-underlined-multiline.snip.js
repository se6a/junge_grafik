const Underlined = getSnippet("text-underlined");

module.exports = (text) => {
  const dings = text instanceof Object
              ? text
              : { all: text };

  const lines = [];

  for (const _lang in dings) {
    const _text = dings[_lang];
    const _textParts = _text.replace(" ", " --").split("--");

    lines.push(`<div class="langOption ${_lang}">`);

    _textParts.forEach((_part) => {
      lines.push(Underlined(_part));
    });

    lines.push("</div>");
  }

  const html = [
    `<div class="textUnderlinedMulti">`,
      ...lines,
    `</div>`
  ];

  const css = /*css*/`
    .textUnderlinedMulti {
      width: 100%;
    }

    .textUnderlinedMulti .langOption {
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: var(--size-S);
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

    .textUnderlinedMulti .textUnderlined.outerBox:last-child {
      flex-grow: 1;
    }

    .textUnderlinedMulti .text {
      white-space: pre;
    }
  `;

  return ["text-underlined-multiline.snip", html, css];
};
