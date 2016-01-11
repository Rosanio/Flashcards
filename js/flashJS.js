$('.carousel').carousel({
  interval: false
});

$('img').click(function() {
  $('.shown').toggle();
  $('.hddn').toggle();
});

$('.carousel').on('slide.bs.carousel', function() {
  $('.carousel').carousel({
    number: 0;
  });
});
