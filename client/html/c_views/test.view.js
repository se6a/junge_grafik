module.exports = (data) => {
  const $intro = get$section("intro")

  const html = splitTemp/*html*/`
    <main class="VIEW Test">
      ${data}

    </main>
  `

  const css = /*css*/`
    :root {
      --mainColor: var(--orange)
    }
  `

  return ["test", html, css]
}