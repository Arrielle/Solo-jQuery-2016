$(document).ready (function (){

// $('#color-block-container').append('<div class = "color-cube"></div>');

$('button').on('click', function(){

  var color = $(this).data("color");
  console.log(color);

  $('#color-block-container').append('<div class = "color-cube ' + color + '"></div>');

// $('.container').append('<div  id = "color-cube" class ="' + color + '"></div>');

});//ends on click function (button)

});//ends doc ready


//add colored divs when a button is pressed.
