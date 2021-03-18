module.exports = (text, classes = "") => {
  const html = splitTemp/*html*/`
    <div class="textUnderlined outerBox ${classes}">
      <div class="textUnderlined innerBox">
        <span class="text">${text}</span>
      </div>
      <span class="line"></span>
    </div>
  `;

  const css = /*css*/`
    .textUnderlined.outerBox {
      display: flex;
      flex-direction: column;
    }

    .textUnderlined.innerBox {
      font-size: 1em;
      padding-top: 0.5em;
      line-height: 0;
      margin-bottom: var(--borderHalf);
    }
    
    .textUnderlined .text {
      vertical-align: super;
    }
  `;

  return ["text-underlined.snip", html, css];
};
