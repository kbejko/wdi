var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var Compliment = function(compliment){
  compliments.push(compliment)
  return compliment
}

Compliment.prototype = {
  destroy: function(index){
    compliment.splice(index, 1)
  }
}

Compliment.all = function(){
  return compliments
}

Compliment.find = function(index){
  return Compliment.all()[index]
}

Compliment.create = function(compliment){
  compliments.push(compliment)
  return compliment
}


module.exports = Compliment
