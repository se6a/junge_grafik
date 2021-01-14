const style = /*css*/ `


`

module.exports = (content = "") => /*html*/ `
<style>${style}</style>

<article class="article">

  <header class="title">
    <h1>Content</h1>
  </header>

  <div class="content">
    ${content}
  </div>

</article>

`