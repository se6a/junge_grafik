const interval = 4000;

document.addEventListener("DOMContentLoaded", () => {
    const NSlideShows = [...document.querySelectorAll(".SlideShow")];
    NSlideShows.forEach((NSlideShow) => slideshow(NSlideShow));
});

const slideshow = (NSlideShow) => {
    if (!NSlideShow) return;

    const NImages = [...NSlideShow.querySelectorAll(".slideShowImage")];
    let NLast = NSlideShow.querySelector(".isActive");
    let crntIndx = 0;

    if (!NImages?.length) return;

    const nextImage = () => {
        NLast = NImages[crntIndx];
        NLast?.classList.remove("isActive");
        crntIndx += 1;
        if (crntIndx > NImages.length - 1) crntIndx = 0;
        NImages[crntIndx]?.classList.add("isActive");
    };

    let intervalId;
    intervalId = setInterval(nextImage, interval);

    NSlideShow.addEventListener("click", () => {
        clearInterval(intervalId);
        nextImage();
        intervalId = setInterval(nextImage, interval);
    });
};
