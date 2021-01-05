const Express = require("Express")
const Router = Express.Router()

Router.get("/api/media/image-large.jpg", (req, res) => {
  console.log("1")
  res.send("got it")
})

Router.get("/media/image-large.jpg", (req, res) => {
  console.log("2")
  res.send("got it")
})


// Router.get("/", (req, res) => {
//   console.log("3")
//   res.send("got it")
// })

module.exports = Router