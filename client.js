$(document).ready (function (){
console.log('docready is working');

$('button').on('click', function(){
  console.log('a button was clicked');

  var color = $(this).data("color");
  console.log(color);
});//ends on click function (button)

});//ends doc ready
