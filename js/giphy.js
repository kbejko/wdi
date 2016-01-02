$(document).ready(function(){
  // console.log('hi')
  $("form").on("submit", function(evt){
    evt.preventDefault()
    var term = $("#term").val().split(' ').join('+')
    console.log(term)
    // console.log(term)
    // var offset = 0
    var url = "http://api.giphy.com/v1/gifs/search?q="+term+"&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json",
    }).done(function(response){
      console.log(response.data[0].images.fixed_height.url)
      var url = response.data[0].images.fixed_height.url
      $("body").append("<div><img src="+url+"></div>")
    }).fail(function(){
      console.log("Fail")
    }).always(function(){
      // console.log("Always")
    })
  })

})
