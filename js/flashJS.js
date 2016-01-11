$('.carousel').carousel({
  interval: false
});

$('img').click(function() {
  $('.shown').toggle();
  $('.hddn').toggle();
});
