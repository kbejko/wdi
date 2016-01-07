function squeeze(string){
  var doubleLetters = []
  var newString = ""
  // iterates over string array
  for (var i = 0; i < string.length; i++) {
    // if letter is not equal to neighbor on the right, add that letter to the newString variable
    if (string[i] !== string[i+1]) {
      newString += string[i]
      // if it does equal to neighbor, add letter to doubleLetters array
    } else {
      doubleLetters += string[i]
    }
  }
  // return array or newString and the letters removed
  return [newString, doubleLetters]
}

console.log(squeeze("AW-WEE-OO KILLER TOFU"))
