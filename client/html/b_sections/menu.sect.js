module.exports = () => {

  const html = splitTemp/*html*/`
    <section class="MENU box">
      <a>Award</a>
      <a>Association</a>
      <a>Contact</a>
    </section>
  `

  const css = splitTemp/*css*/`
    .MENU {
      background-color: var(--gray);
    }

    .MENU a {
      border-bottom: 2px solid black;
    }
  `

  return ["menu", html, css]
}