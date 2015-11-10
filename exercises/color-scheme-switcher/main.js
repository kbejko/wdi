// var buttons = document.querySelectorAll("li");
//
// for (var x = 0; x < buttons.length; x++) {
//   buttons[x].addEventListener("click", function() {
//     document.body.className = this.className;
//   })
// }

document.querySelector("#switcher").addEventListener("click", function(evt){
  document.body.className = evt.target.className;
})
