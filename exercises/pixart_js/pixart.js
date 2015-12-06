for (var x = 0; x < 2; x++) {
  $(".controls").append("<div class=brush></div>");
}

$("#form").submit(function(event){
  event.preventDefault();
  $(".brush").each(function() {
    $(this).css("background", $("#color-field").val());
  })
})

for (var i = 0; i < 8000; i++) {
  $("body").append("<div class=square></div>");
}

$(".square").each(function() {
  $(this).mouseover(function() {
    $(this).css("background", $("#color-field").val());
  })
})
