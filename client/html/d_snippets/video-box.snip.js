module.exports = (video) => {
    const { src = "", classes = "", href = "" } = video;
    const parts = src.match(/([^/]+)$/);
    const videoId = Array.isArray(parts) ? parts[1] : "";

    const html = splitTemp/*html*/ `
    <div class="VideoBox box">
      <iframe
        src="https://www.youtube.com/embed/${videoId}"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  `;

    const css = /*css*/ `
    .VideoBox {
        padding: 0;
        position: relative;
        width: 50%;
        height: auto;
        overflow: hidden;
        border: unset;
    }
  `;

    return ["video-box.snip", html, css];
};
