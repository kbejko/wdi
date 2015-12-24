require 'sinatra'

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

get '/' do
  @greeting = "Hi there!"
  @rand_compliment = compliments.sample
  @rand_color = colors.sample
  erb :compliment
end

get '/:name' do
  name = params[:name]
  @greeting = "Hi there, #{name.capitalize}!"
  @rand_compliment = compliments.sample
  @rand_color = colors.sample
  erb :compliment
  erb :form
end

post '/' do
  compliments.push(params[:compliment])
  redirect '/'
end
