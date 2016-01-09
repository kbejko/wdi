// Requiring mongoose dependency
var mongoose = require('mongoose')

// Instantiate a name space for our Schema constructor defined by mongoose
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

// Defining Schema for reminders
var ReminderSchema = new Schema({
  body: String
})

// Defining Schema for authors
var AuthorSchema = new Schema({
  name: String,
  reminders: [ReminderSchema]
})

// Setting models in mongoose utilizing schemas defined above
mongoose.model('Author', AuthorSchema)
mongoose.model('Reminder', ReminderSchema)
