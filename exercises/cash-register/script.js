// DOM objects
var form = document.querySelector("#entry");
var userInput = document.querySelector("#newEntry");
var total = document.querySelector("#total");
var entries = document.querySelector("#entries");

// Sets up event handler on submit
form.addEventListener("submit", function(evt){
  // Removes the default function for submit
  evt.preventDefault();
  //console.log(userInput.value);
  // Creates html elements to add to the table body
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var td2 = document.createElement("td");
  // td2 takes the value of the userInput global variable to two decimal points.
  td2.innerHTML = parseFloat(userInput.value).toFixed(2);
  // This is for aesthetic purposes. Without it td2 would be centered in the table body
  tr.appendChild(td)
  tr.appendChild(td2);
  // For every submit we add a new row with two columns to the table body
  entries.appendChild(tr);

  // Instantiates the previousTotal to the current total starting at the second position of the innerHTML in order to avoid the $ sign
  var previousTotal = total.innerHTML.substr(1);
  // Sets the new total to previousTotal + the value of new userInput
  var totes = parseFloat(previousTotal) + parseFloat(userInput.value);

  // Sets global total to the calculated total
  total.innerHTML = "$" + totes.toFixed(2);

  // Clears input field
  userInput.value = "";
});
