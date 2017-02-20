$(document).ready (function (){

// $('#color-block-container').append('<div class = "color-cube"></div>');

$('button').on('click', function(){
  var $color = $(this).data("color");
  console.log($color);
  $('#color-block-container').append('<div class = "color-cube ' + $color + '"></div>');

  numColorBlocks = $('#' + $color).text();
  console.log(numColorBlocks);
  $('#' + $color).text(parseFloat(numColorBlocks) + 1);
});//ends on click function (button)
});//ends doc ready


//add colored divs when a button is pressed.

// when a button is pressed, the counter relative to that div goes up.
//  span ID = red
//for every time the button is clicked, number in text box it incremented.
