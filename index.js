const express = require("express")
const app = express()
const PORT = 8080

app.listen(PORT, () => console.log("This dude is bullshittin"))

app.use(express.json())

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "shirt",
    size: "medium",
  })
})

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params
  const { logo } = req.body

  if (!logo) {
    res.status(418).send({ message: "More input needed" })
  }

  res.send({
    tshirt: `shirt with your ${logo} and ID of ${id}`,
  })
})
