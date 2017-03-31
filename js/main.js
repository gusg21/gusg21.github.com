$(function() { /* stuff */ });

$(".exit").click(function() {
  alert("Please do not do that.");
});

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  $("body").css("background-image","url('http://i1.kym-cdn.com/entries/icons/original/000/000/091/cancer.png')"); // Onclick of button the background image of body will be test here. Give the image path in url
  $(".fake-window").addClass("rotating");
  $("h1").html("WHEEEEEEEE");
});
