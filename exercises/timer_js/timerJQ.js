$(document).ready(function(){
  var seconds = 0
  var timerId
  $("#start").on("click", function(){
    timerId = setInterval(function(){
      $("#timer").text("Time elapsed: " + seconds++)
    }, 1000)
  })
  $("#reset").on("click", function(){
    clearInterval(timerId)
    seconds = 0
    $("#timer").text("Stop Watch")
  })
  $("#pause").on("click", function(){
    clearInterval(timerId)
  })
})
