puts "What is the starting temp?"
user_temp = gets.chomp.to_i

puts "What is the temp unit (F, C, or K)?"
temp_unit = gets.chomp.capitalize

quit = nil

while quit != "Y"

  f_to_c = (user_temp - 32)/1.8
  f_to_k = (user_temp + 459.67)/1.8
  c_to_f = user_temp * 1.8 + 32
  c_to_k = user_temp + 273.15
  k_to_c = user_temp - 273.15
  k_to_f = user_temp * 1.8 - 459.67

  if temp_unit == "F"
    puts "Fahrenheit: #{user_temp}"
    puts "to Celsius: #{f_to_c}"
    puts "to Kelvin: #{f_to_k}"
  elsif temp_unit == "C"
    puts "Celsius: #{user_temp}"
    puts "to Fahrenheit: #{c_to_f}"
    puts "to Kelvin: #{c_to_k}"
  else
    puts "Kelvin: #{user_temp}"
    puts "to Celsius: #{k_to_c}"
    puts "to Fahrenheit: #{k_to_f}"
  end

  puts "Do you want to quit? (Y/N)"
  quit = gets.chomp.capitalize

  if quit == "N"
    puts "What is the starting temp?"
    user_temp = gets.chomp.to_i

    puts "What is the temp unit (F, C, or K)?"
    temp_unit = gets.chomp.capitalize
  end
  
end
