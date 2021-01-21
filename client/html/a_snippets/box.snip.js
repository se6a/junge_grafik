module.exports = (data) => {

  const html = splitTemp/*html*/`
    <div class="box">
      <header class="boxTitle">
        <h2>${data?.title}</h2>
      </header>
      <div class="boxContent">
        ${data?.content}
      </div>
    </div>
  `

  const css = /*css*/``

  return ["box", html, css]
}