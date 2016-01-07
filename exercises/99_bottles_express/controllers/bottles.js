module.exports = {
  index: function(req, res){
    var numberOfBottles = req.params.numberOfBottles || 99
    var next = numberOfBottles - 1
    res.render("index", {
      bottles: numberOfBottles,
      next: next
    })
  }
}
