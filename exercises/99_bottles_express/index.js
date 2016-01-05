var express = require("express")
var app = express()
var hbs = require("hbs")
app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))
app.listen(4000)

app.get("/", function(req, res){
  res.redirect("/99")
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

app.get("/:numberOfBottles?", function(req, res){
  var numberOfBottles = req.params.numberOfBottles || 99
  var next = numberOfBottles - 1
  res.render("index", {bottles: numberOfBottles, next: next})
})
