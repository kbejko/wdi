var express = require("express")
var app = express()
var hbs = require("hbs")
var bottles = require("./controllers/bottles.js")
var bodyParser = require("body-parser")

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(4000)

app.get("/", function(req, res){
  res.render("welcome")
})

app.post("/", function(req, res){
  res.render("index", {
    player_name: req.body.player_name,
    bottles: 99,
    next: 98
  })
})

// app.get("/:number_of_bottles?", function(req, res){
//   var numBottles = req.params.number_of_bottles || 99
//   var takeOneDown = numBottles - 1
//   if (numBottles > 1) {
//     res.send(numBottles + " Bottles of beer on the wall <a href='/" + takeOneDown + "'> Take one down pass it around")
//   } else {
//     res.send("1 bottle of beer on the wall <a href='/'>Start Over")
//   }
// })

app.get("/:numberOfBottles?", bottles.index)
