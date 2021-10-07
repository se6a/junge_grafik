(() => {
  const fromWinners = location.href.includes("winnersOrder");

  if (fromWinners) {
    const [url, originalQueryParamaters] = location.href.split("?");
    const projectId = originalQueryParamaters
      ? originalQueryParamaters
          .split("&")
          .filter((para) => para.startsWith("id"))
      : "";

    const newQuery = originalQueryParamaters
      ? "?" + originalQueryParamaters.replace("id=", "from=")
      : "";

    history.pushState(
      null,
      "",
      url + (projectId.length ? `?${projectId}` : "")
    );

    window.onpopstate = (e) => {
      const goTo = window.location.origin + "/winners" + newQuery;
      window.location.href = goTo;
    };

    const $winnerButton = document.querySelector(".GoToWinner");
    $winnerButton.href += newQuery;
  }
})();
