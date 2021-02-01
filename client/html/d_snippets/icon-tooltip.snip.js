module.exports = (tooltip) => {
  console.log("TOOLTIP");

  const html = splitTemp/*html*/`
    <div class="tooltip">
      <i class="icon"></i>
      <p class="content">
        ${tooltip}
      </p>
    </div>
  `;

  const css = /*css*/`
    .tooltip {
      width: 100%;
      font-size: var(--fontSize-S);
    }

    .tooltip > .content {
      display: none;
      width: 100%;
      background-color: var(--gray);
      border: 2px solid black;
      position: absolute;
      padding: var(--spacing-S);
      margin-top: var(--spacing-XS);
      left: 0;
      z-Index: 1000;
    }

    .tooltip > .icon {
      display: flex;
      border: 2px solid black;
      margin-left: 10px;
      border-radius: 100%;
      height: var(--circle-M);
      width: var(--circle-M);
      text-align: center;
      cursor: pointer;
      position: relative;
    }

    .tooltip:hover .icon {
      background-color: white;
    }

    .tooltip:hover .content {
      display: inline-block;
    }

    .tooltip .icon::after {
      content: "?";
      margin: auto;
    }
  `;

  return ["icon-info.snip", html, css];
};
