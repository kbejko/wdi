require('../db/schema')
var mongoose = require('mongoose')

var AuthorModel = mongoose.model('Author')
module.exports = AuthorModel
