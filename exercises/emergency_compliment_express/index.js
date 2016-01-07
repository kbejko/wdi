var express = require("express")
var app = express()
var complimentsController = require("./controllers/complimentsController")
var hbs = require("hbs")
var bodyParser = require("body-parser")
var Compliment = require("./models/compliment")

app.listen(4000)
app.set("view engine", "hbs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("*.json", function(req, res, next){
  req.headers.accept = "application/json"
  next()
})

app.get("/", function(req, res){
  res.redirect("/compliments")
})

app.get("/compliments/:index.:format?", complimentsController.show)
app.post("/compliments/?:format?", complimentsController.create)
app.put("/compliments/:index.:format?", complimentsController.update)
app.delete("/compliments/:index.:format?", complimentsController.destroy)
app.get("/compliments/?:format?", complimentsController.index)
