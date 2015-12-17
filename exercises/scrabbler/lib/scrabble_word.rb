require "pry"
# The raw data was not a hash and this is the only way I could figure out to turn it into that.
raw = "{a : 1, b : 3, c : 3, d : 2, e : 1,
       f : 4, g : 2, h : 4, i : 1, j : 8,
       k : 5, l : 1, m : 3, n : 1, o : 1,
       p : 3, q : 10, r : 1, s : 1, t : 1,
       u : 1, v : 4, w : 4, x : 8, y : 4,
       z : 10}".gsub " :", ":"
binding.pry

$points = {a: 1, b: 3, c: 3, d: 2, e: 1,
          f: 4, g: 2, h: 4, i: 1, j: 8,
          k: 5, l: 1, m: 3, n: 1, o: 1,
          p: 3, q: 10, r: 1, s: 1, t: 1,
          u: 1, v: 4, w: 4, x: 8, y: 4,
          z: 10}

class ScrabbleWord
  attr_reader :word

  def initialize(word)
    @word = word.downcase
  end

  def score
    score = 0
    @word.each_char { |char| score += $points[char.to_sym]}
    score
  end

  def multiplier_score(x)
    return self.score * x
  end

end
