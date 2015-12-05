$("#form").submit(function(event){
  event.preventDefault();
  $(".brush").css("background", $("#color-field").val());
})


// var squareDiv = "<div class=square></div>";

for (var i = 0; i < 21; i++) {
  $("body").append("<div class=square></div>");
  $(".square").css("background", "green");
}
