var form = document.querySelector("#entry");
var userInput = document.querySelector("#newEntry");
var total = document.querySelector("#total");
var entries = document.querySelector("#entries");

form.addEventListener("submit", function(evt){
  evt.preventDefault();
  //console.log(userInput.value);
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var td2 = document.createElement("td");
  td2.innerHTML = parseFloat(userInput.value).toFixed(2);
  tr.appendChild(td)
  tr.appendChild(td2);
  entries.appendChild(tr);

  var previousTotal = total.innerHTML.substr(1);
  var totes = parseFloat(previousTotal) + parseFloat(userInput.value);

  total.innerHTML = "$" + totes.toFixed(2);

  userInput.value = "";
});
