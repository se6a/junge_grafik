(() => {
  const fromWinners = location.href.includes("winnersOrder");

  if (fromWinners) {
    const [url, originalQueryParamaters] = location.href.split("?");
    const projectId = originalQueryParamaters
      ? originalQueryParamaters
          .split("&")
          .filter((para) => para.startsWith("id"))
      : "";

    history.pushState(
      null,
      "",
      url + (projectId.length ? `?${projectId}` : "")
    );

    window.onpopstate = (e) => {
      const goTo =
        window.location.origin +
        "/__winners-okt" +
        (originalQueryParamaters.length ? `?${originalQueryParamaters}` : "");
      window.location.href = goTo;
    };
  }
})();
