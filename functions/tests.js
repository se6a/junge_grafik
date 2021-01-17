function attributes(attr = {}) {
  let $attributes = ""

  if (Object.keys(attr).length > 0) {
    $attributes = " "
                + Object.keys(attr)
                    .map((a) => `${a}="${attr[a]}"`)
                    .join(" ")
  }

  return $attributes
}

function el(tag, content = "", attr = {}) {
  return `<${tag}${attributes(attr)}>${content}</${tag}>`
}

function div(content = "", attr = {}) {
  return el("div", content, attr)
}

function ul(items = [], attr = {}, itemFn = null)
{ if (!itemFn) itemFn = (itm) => li(itm)

  const $items =  items.reduce(
                    (list, itm, indx) =>
                      list += itemFn(itm, indx)
                  , ""
                  )

  return el('ul', $items, attr)
}

function li(content = "", attr = {}) {
  return el('li', content, attr)
}