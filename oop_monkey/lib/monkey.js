// don't forget to use module.exports to export your resulting Monkey constructor!
function Monkey(name, species) {
  this.name = name.charAt(0).toUpperCase() + name.slice(1);
  this.species = species;
  this.foodsEaten = [];
}

Monkey.prototype.eat = function(food) {
  if (!(food.charAt(0).toLowerCase().match(/[aeiou]/i))) {
    this.foodsEaten.push(food)
  }
}

Monkey.prototype.introduce = function() {
  return "Hello, my name is " + this.name + ". I am a " + this.species + ", and I've eaten " + this.foodsEaten
}

module.exports = Monkey
