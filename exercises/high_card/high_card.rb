# Use these two arrays to generate a deck of cards.
def card_deck
  cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ]
  suits = [ "hearts", "spades", "clubs", "diamonds" ]
  deck = []

  cards.each_with_index do |card, i|
    suits.each do |suit|
      deck.push({
        score: i,
        card: card,
        suit: suit,
      })
    end
  end

  return deck.shuffle
end

deck = card_deck
players = []

while true
  puts "#{players.length} players so far. Enter a player name, or type 'play':"
  input = gets.chomp.downcase
  break if input == "play"
  players.push(input)
end

cards = players.map { |player| deck.pop }

points = cards.map { |card| card[:i] }

most_points = points.max

winners = []

points.each_with_index do |point, i|
  winners.push(players[i]) if point == most_points
end

puts "Winner: #{winners.join(", ")}"
puts cards
