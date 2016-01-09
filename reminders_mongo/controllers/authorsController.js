var AuthorModel = require("../models/author")
var ReminderModel = require("../models/reminder")

var authorsController = {
  index: function(req, res){
    AuthorModel.find({}, function(err, docs){
      res.render("authors/index", {authors: docs})
    })
  },
  new: function(req, res){
    res.render("authors/new")
  },
  show: function(req, res){
    AuthorModel.findById(req.params.id, function(err, doc){
      res.render("authors/show", {authors: doc})
    })
  },
  create: function(req, res){
    var author = new AuthorModel({name: req.body.name})
    author.save(function(err){
      if(!err){
        res.redirect("authors")
      }
    })
  }
}

module.exports = authorsController
