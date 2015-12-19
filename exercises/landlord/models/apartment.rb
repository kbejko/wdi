require "pry"
class Apartment
  attr_accessor :address, :monthly_rent, :sqft, :num_beds, :num_baths, :renters

  def initialize(address, monthly_rent, sqft, num_beds, num_baths, renters)
    @address = address
    @monthly_rent = monthly_rent
    @sqft = sqft
    @num_beds = num_beds
    @num_baths = num_baths
    @renters = []
  end

  def add_tenant(person)
    if @renters.length < @num_beds
      @renters.push(person)
    end
  end

end

the_collins = Apartment.new("45 M St", 400, 200, 1, 1, 0)

the_collins.add_tenant("Jim")
the_collins.add_tenant("Stan")
binding.pry
