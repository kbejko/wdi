require "pry"
class Monkey
  attr_reader :name, :species, :foods_eaten

  def initialize (name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten.push(food)
  end

  def introduce()
    return "Hello, my name is #{@name}, and I'm a #{@species} who has eaten #{@foods_eaten.join(", ")}."
  end
  
end

coco = Monkey.new("coco", "cute monkey")
coco.eat(["bananas", "strabwerries", "fish"])
coco.introduce
binding.pry
