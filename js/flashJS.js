$('.carousel').carousel({
  interval: false
});

$('img').click(function() {
  $('.shown').toggle();
  $('.hddn').toggle();
});

//Great idea using the carousel so you don't have all the cards on screen at one time!
