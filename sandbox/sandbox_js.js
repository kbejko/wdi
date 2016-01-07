function squeeze(string){
  var doubleLetters = []
  var newString = ""
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[i+1]) {
      newString += string[i]
    } else {
      doubleLetters += string[i]
    }
  }
  return [newString, doubleLetters]
}

console.log(squeeze("AW-WEE-OO KILLER TOFU"))
