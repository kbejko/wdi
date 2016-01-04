class Forecast
  attr_reader :temp_f, :weather, :city, :state

  def initialize(city, state)
    
    @city = city.capitalize
    @state = state.upcase

    url = "http://api.wunderground.com/api/#{ENV["wunderground_api_key"]}/conditions/q/#{state.gsub(/\s/, "_")}/#{city.gsub(/\s/, "_")}.json"

    response = HTTParty.get(url)


    @temp_f = response["current_observation"]["temp_f"]
    @weather = response["current_observation"]["weather"]

  end
end
