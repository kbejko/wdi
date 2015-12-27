require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

require_relative 'db/connection.rb'

require_relative 'controllers/artists.rb'
require_relative 'controllers/songs.rb'

require_relative 'models/artist'
require_relative 'models/song'

get '/' do
  erb :home
end
