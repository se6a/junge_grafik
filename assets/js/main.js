document.addEventListener(
  "DOMContentLoaded"
, () => {
    console.log("DOM loaded")
  }
)

const mdl = {
    s: window.matchMedia("(max-width: 739px)")
  , m: window.matchMedia("(min-width: 740px) and (max-width: 1299px)")
  , l: window.matchMedia("(min-width: 1300px)")
}

Object.keys(mdl).forEach((size) => {
  mdl[size].addEventListener(
    "change"
  , (e) => { if (e.matches) setImages(size) }
  )
})

function setImages(size) {
  const $images = document.querySelectorAll("img")
  for (let i = 0; i < $images.length; i++) {
    const _$image = $images[i]
    _$image.src = `http://localhost:3000/media/img-${size}.jpg`
  }
}