$("#form").submit(function(event){
  event.preventDefault();
  $(".brush").css("background", $("#color-field").val());
})
