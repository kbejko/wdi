// var buffer = function(){
//   document.body.innerHTML = ("##################");
// }

var user_name = prompt("What's your name?");
//buffer();
document.body.innerHTML = ("Nice to meet you " + user_name);
var yes_or_no = prompt("Would you like to play a game? y/n");
//buffer();
if(yes_or_no == "y") {
  document.body.innerHTML = ("Great, let's get started");
} else {
  document.body.innerHTML = ("You have no choice, you have to play");
}
//buffer();
var character = prompt("Pick Bill or Phil b/p");
if(character = "b") {
  document.body.innerHTML = ("Hmm Bill is angry and has a cane");
    var answer = prompt("Do you stand and fight, or run away like a coward s/r");
    if(answer = "s") {
      document.body.innerHTML = ("Good choice. Bill is old and feeble at this point. You push him over and he falls in a pile of maure");
    } else {
      document.body.innerHTML = ("You get away, but your future son Marty is hackled for the rest of his days for his dad's cowardice");
    }
} else {
  if(character = "p"){
    var in_or_out = prompt("Phil is asking if you're in or out. What do you say? i/o");
    if(in_or_out = "i"){
      document.body.innerHTML = ("Bad call. Phil and his cronies rob the Hill Valley bank and frame you for it. You're done travelling.");
    } else {
      document.body.innerHTML = ("Good call. You deck Phil in the jaw and run away. He gives chase on his hoverboard and end up in a pile of manure");
    }
  }
}
