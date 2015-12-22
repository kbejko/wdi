require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "<h1>99 Bottle of Beer on the Wall</h1> <a href='/98'>Take one Down</a>"
end

get '/:num_bottles' do
  num_bottles = params[:num_bottles].to_i
  if num_bottles == 0
    "<h1>No Bottles on the Wall</h1> <a href='/99'>Start Over</a>"
  else
    "<h1>#{num_bottles} Bottles of Beer on the Wall</h1> <a href='/#{num_bottles-1}'>Take one Down</a>"
  end
end
