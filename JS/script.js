$(document).ready(function() {

// Initial fadeout of popup
$('.detail_container').fadeOut(0);

//Tooltip function
$('.tooltip').click(function() {

$('.tooltip').fadeOut(200);
$('.detail_container').fadeOut(200);
$('div.test').removeClass('focus');
});
//




$('div.test').click(function(){
  //this relates to the actual dot that was clicked on wanna get value of attribute of city that was the actual dot
    // for when hover over axe


  //selected was css rule that shifts icon to green
  $('div.test').removeClass('focus');
  // first remove selected class from all the pic then add selected pic to whatever we hover/click on
  $(this).addClass('focus');

  //Next is JS to fadeIn popup when user clicks on a certain grid section
  //set up string to target the city detail with an ID of whatever city name value matches the ID inside of the city detail, amd this relates to all of the IDs in the hidden HTML that matches the city attributes
  var mine = '.sec_detail#' + $(this).attr('section');
  var htmlCode = $(mine).html();
  // ^^^ use to target hidden div in hidden html and pull out into new variable called html code
  //first fade out then run callback function
  $('.detail_container').fadeOut(0, function(){
    $('.detail_container .sec_detail').html(htmlCode);
    $('.detail_container').fadeIn(100);
    $('.tooltip').fadeIn(800);
    //idea is click on dot, html fade out, change html text, and fade back in
  });


  });



});
