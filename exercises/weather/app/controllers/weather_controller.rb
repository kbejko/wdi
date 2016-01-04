class WeatherController < ApplicationController
  def get_weather
    if params[:city] && params[:state]
      @forecast = Forecast.new(params[:city], params[:state])
    else
      @forecast = Forecast.new("washington", "dc")
    end
  end
end
