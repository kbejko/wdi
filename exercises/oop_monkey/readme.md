# Monkies!!

Create a `Monkey` class in `lib/monkey.rb`, which has the following attributes:
* name - (a string)
* species - (a string)
* foods_eaten - (an array)

And the following methods:
* eat(food) - adds the food (a string) to the list of foods eaten
* introduce - introduces self, with name, species, and what it's eaten.


## Goal

Run tests using `rspec`. Write code in your Monkey class to make the tests pass.

### What is RSpec?

RSpec is a tool for writing automated tests for programs written in ruby. We
write tests in ruby (see `spec/monkey_spec.rb` for example), that describe what
we expect to happen when we use our code (usually classes/objects).

When we run the tests, it compares what our code does to what our tests expect,
and tells us which pass and which fail.



## Bonus

Uncomment the bonus tests in `spec/monkey_spec` and make them pass.
