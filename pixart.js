$("#form").submit(function(event){
  event.preventDefault();
  $(".brush").css("background", $("#color-field").val());
})

for (var i = 0; i < 8001; i++) {
  $("body").append("<div class=square></div>");
}

$(".square").each(function() {
  $(this).mouseover(function() {
    $(this).css("background", $("#color-field").val());
  })
})
