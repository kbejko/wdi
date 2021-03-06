// express dependency for our application
var express = require('express')
// loads mongoose dependency
var mongoose = require('mongoose')
// loads dependency for middleware for paramters
var bodyParser = require('body-parser')
// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override')
// loads module containing all authors controller actions. not defined yet...
var authorsController = require('./controllers/authorsController')
// connect mongoose interfaces to reminders mongo db
mongoose.connect('mongodb://localhost/reminders')
var app = express()
// sets view engine to handlebars
app.set('view engine', 'hbs')
// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// allows for put/delete request in html form
app.use(methodOverride('_method'))
// connects assets like stylesheets
app.use(express.static(__dirname + '/public'))

// app server located on port 4000
app.listen(4000, function(){
  console.log('app listening on port 4000')
})
app.get('/', function(req, res){
  res.redirect('/authors')
})
// first route we'll define together ...
app.get('/authors', authorsController.index)
app.get('/authors/new', authorsController.new)
app.get('/authors/:id', authorsController.show)
app.post('/authors', authorsController.create)
app.get('/authors/:id/edit', authorsController.edit)
app.put('/authors/:id', authorsController.update)
app.delete('/authors/:id', authorsController.delete)
app.post("/authors/:id/reminders", authorsController.addReminder)
app.delete("/authors/:authorId/reminders/:id", authorsController.removeReminder)
