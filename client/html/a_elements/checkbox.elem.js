module.exports = (attr, callback) => {

  const html = splitTemp/*html*/`
    <input ${attr}${onchange(callback)}type="checkbox">
    <span class="checkmark"></span>
  `

  const css = /*css*/`
    input[type="checkbox"] {
      background-color: var(--white);
      width: 1.3em;
      height: 1.3em;
      margin: 0.2em 1em 0.2em 0.2em;
      display: block;
      border: 2px solid black;
      border-radius: 50%;
    }

    input[type="checkbox"]::after {
      content: "";
      width: 0.3em;
      height: 0.5em;
      margin: 0.35em 0 0 0.4em;
      border: solid black;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      transform-origin: top right;
      display: none;
    }

    input[type="checkbox"]:checked::after {
      display: block;
    }
  `

  function onchange(callback) {
    if (callback) {
      return /*html*/` onchange="this.checked ? ${callback} : null" `
    }
  }

  return ["checkbox", html, css]
}