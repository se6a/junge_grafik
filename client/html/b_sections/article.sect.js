module.exports = (content = "") => {

  const html = splitTemp/*html*/`
    <article class="article">
    
      <header class="title">
        <h1>Content</h1>
      </header>
    
      <div class="content">
        ${content}
      </div>
    
    </article>
  `

  const css = /*css*/`
  `

  return ["article", html, css]
}

