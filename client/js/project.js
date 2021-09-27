(() => {
  let [url, queryParamaters] = location.href.split("?");
  queryParamaters = queryParamaters
    ? queryParamaters
        .split("&")
        .filter((para) => para.startsWith("id"))
        .join("&")
    : "";

  history.pushState(
    null,
    "",
    url + (queryParamaters ? `?${queryParamaters}` : "")
  );

  // when clicking the browser back button after pushstate,
  // the user is still on the same site, just the queryParameters changed.
  // Therefore double it:
  window.onpopstate = (e) => {
    console.log("e", e);
    history.back();
  };
})();
