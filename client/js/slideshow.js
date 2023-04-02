document.addEventListener("DOMContentLoaded", () => {
    const NSlideShow = document.querySelector(".SlideShow");

    if (!NSlideShow) return;

    const interval = 4000;
    const NImages = [...NSlideShow.querySelectorAll(".slideShowImage")];
    let NLast = NSlideShow.querySelector(".isActive");
    let crntIndx = 0;

    if (!NImages?.length) return;

    setInterval(() => {
        NLast?.classList.remove("isActive");
        NImages[crntIndx]?.classList.add("isActive");

        NLast = NImages[crntIndx];
        crntIndx += 1;
        if (crntIndx > NImages.length - 1) crntIndx = 0;
    }, interval);
});
