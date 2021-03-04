const app = require("express")()
const PORT = 8080

app.listen(PORT, () => console.log("This dude is bullshittin"))

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "withSleeves",
    size: "medium",
  })
})
