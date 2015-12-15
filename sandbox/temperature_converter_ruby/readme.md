# Exercise: Temperature Converter

Goal: create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.
- Try the bonus goals if you have extra time!

## Setup

- Fork and clone this repo to your computer.
- Open `temp_converter.rb`.

## PART 1

### Instructions

* Ask the user for starting temperatures in (1) Fahrenheit, (2) Celsius and (3) Kelvin.
* Convert each of those values to the other two temperatures. Display the starting and converted temperatures.
  * Conversion formulae: [http://www.csgnetwork.com/temp2conv.html](http://www.csgnetwork.com/temp2conv.html)
  * Sample temperatures: 32F = 0C = 273.15K

* Your output should look something like this...

```ruby
Fahrenheit: ...
to Celsius: ...
to Kelvin: ...

Celsius: ...
to Fahrenheit: ...
to Kelvin: ...

Kelvin: ...
to Fahrenheit: ...
to Celsius: ...
```

Feel free to turn to your tablemates for help!  

## PART 2

### Instructions

* Ask the user for (1) a starting temperature value and (2) temperature unit (e.g., F, C, K). Store each of those in a variable.
* Create an if-elsif-else statement that contains a block for each unit of temperature. It will look something like this...

```ruby
if temp_unit == "F"
  ...
elsif temp_unit == "C"
  ...
else
  ...
end
```

* Each conditional block should convert the starting temperature to its equivalent value in the other two units (e.g., F should be converted to C and K).
  * Conversion formulae: [http://www.csgnetwork.com/temp2conv.html](http://www.csgnetwork.com/temp2conv.html)
  * Sample temperatures: 32F = 0C = 273.15K
* Display the starting and converted values in the console.
  * **NOTE:** You should only be displaying the starting and converted values for the temperature the user selected at the beginning.

```ruby
# User selected "F" at the start of the program. So the output is...
Fahrenheit: ...
to Celsius: ...
to Kelvin: ...
```

Feel free to turn to your tablemates for help!  

### Bonus 1

Store the starting and converted temperatures in a hash. When you print those values to the console, do it by accessing the values in the hash.

### Bonus 2

Encapsulate the program's conversion logic in a method(s) (or in Javascript terms, functions).

### Bonus 3

Keep the program running until the user decides to quit.
* **HINT:** Requires a `while` loop.
* When the program starts, the user should be prompted to enter a temperature OR quit the program.
* After the program displays the starting/converted temperatures, it should return to the initial user prompt.
