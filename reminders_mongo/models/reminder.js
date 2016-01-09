require('../db/schema')
var mongoose = require('mongoose')

var ReminderModel = mongoose.model('Reminder')
module.exports = ReminderModel
