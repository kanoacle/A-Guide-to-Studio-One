/*jshint esversion: 6*/
var id = localStorage.id.toString();
$(document).ready(function() {
  $(window).scrollTop($('#' + id).offset().top);
});
$('.home-btn').click(function() {
  localStorage.id = 0;
});