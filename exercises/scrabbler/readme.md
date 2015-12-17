# Scrabble

## Setup.

1. Fork and clone (remember to clone YOUR fork).
2. Run `bundle install`.
3. Run `rspec` to see what code answers our specs.  You will find that to be...  not much. :)

###Prompt

* Work in the `lib/scrabble_word.rb file`

* If you've never played the game Scrabble before, you may want to ask your neighbor about the rules of the game and how words are scored.

* Define a class named ScrabbleWord with an `initialize` method that takes one argument, `word`, and stores it in an instance variable `@word`.

* Write a "getter" for this instance variable `@word` that returns the word as a lowercase string.

1. Define a method `.score` that returns the scrabble score of the word.

2. Define a method `.multiplier_score` that takes a multiplier as an argument and returns a multiplied value of the score. (Think double or triple word score.)

Here are the letter values. Think about how you might put this data in a usable format for your methods above.

```
  a : 1, b : 3, c : 3, d : 2, e : 1,
  f : 4, g : 2, h : 4, i : 1, j : 8,
  k : 5, l : 1, m : 3, n : 1, o : 1,
  p : 3, q : 10, r : 1, s : 1, t : 1,
  u : 1, v : 4, w : 4, x : 8, y : 4,
  z : 10
```

### RSpec

* Run RSpec to test your code. To run it, type `rspec` into your terminal in the current directory (the one where you can see the `lib` and `spec` folders)
* Fix any errors that come up. Once you are seeing all green text, try to refactor your methods to make them clearer / more concise. Re-run rspec to make sure your code still works.

## Deliverable

Submit a pull request with your current progress.  Include your Completeness (1-5) and Comfort (1-5).  We recommend you include your pseudo code, comments, and descriptions of areas where you add difficulty.

#### Bonus

* Tinker around with the `spec/scrabble_spec.rb` file and try different test cases.
