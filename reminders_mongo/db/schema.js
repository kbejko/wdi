// Requiring mongoose dependency
var mongoose = require('mongoose')

// Instantiate a name space for our Schema constructor defined by mongoose
var Schema = mongoose.schema,
  ObjectId = Schema.ObjectId

// Defining Schema for reminders
var ReminderSchema = new Schema({
  body: String
})

// Defining Schema for authors
var AuthorSchema = new Schmea({
  name: String,
  reminders: [ReminderSchema]
})

// Setting models in mongoose utilizing schemas defined above
var AuthorModel = mongoose.model("Author", AuthorSchema)
var ReminderModel = mongoose.model("Reminder", ReminderSchema)
