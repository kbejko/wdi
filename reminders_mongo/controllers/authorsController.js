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
      res.render("authors/show", {author: doc})
    })
  },
  create: function(req, res){
    var author = new AuthorModel({name: req.body.name})
    author.save(function(err){
      if(!err){
        res.redirect("authors")
      }
    })
  },
  edit: function(req, res){
    AuthorModel.findById(req.params.id, function(err, doc){
      res.render("authors/edit", {author: doc})
    })
  },
  update: function(req, res){
    AuthorModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name
      docs.save(function(err){
        if(!err){
          res.redirect("/authors/" + req.params.id)
        }
      })
    })
  },
  delete: function(req, res){
    AuthorModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/")
      } else {
        console.log("could not delete")
      }
    })
  },
  addReminder: function(req, res){
    AuthorModel.findById(req.params.id, function(err, docs){
      docs.reminders.push(new ReminderModel({body: req.body.reminder}))
      docs.save(function(err){
        if(!err){
          res.redirect("/authors/" + req.params.id)
        }
      })
    })
  },
  removeReminder: function(req, res){
    AuthorModel.findByIdAndUpdate(req.params.authorId, {
      $pull:{
        reminders: {_id: req.params.id}
      }
    }, function(err, docs){
      if(!err){
        res.redirect("/authors/" + req.params.authorId)
      }
    })
  }
}

module.exports = authorsController
