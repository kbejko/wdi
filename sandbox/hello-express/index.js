var express = require("express")
var app = express()

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/:name", function(req, res){
  res.send("Hello " + req.params.name)
})
