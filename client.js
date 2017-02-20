$(document).ready (function (){

$('button').on('click', function(){
  var $color = $(this).data("color");
  $('.container').append('<div class = "color-cube ' + $color + '"></div>');
  numColorBlocks = $('#' + $color).text();
  $('#' + $color).text(parseFloat(numColorBlocks) + 1);
});//ends on click function (button)
});//ends doc ready
