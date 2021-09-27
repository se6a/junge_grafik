function addVideo() {
  const playerFrame =
    document.currentScript.previousElementSibling.children[0].children[0];

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player(playerFrame, {
      videoId: "M7lc1UVf-VE",
      events: {
        onStateChange: onPlayerStateChange,
      },
    });
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      document.getElementById("playerWrap").classList.add("shown");
    }
  }

  document.getElementById("playerWrap").addEventListener("click", function () {
    player.seekTo(0);
    document.getElementById("playerWrap").classList.remove("shown");
  });
}
