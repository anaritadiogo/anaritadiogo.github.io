/* hide tagline + image by default */

/* type website title */

new TypeIt("#headline", {
  strings: ["Hi! I'm Ana Rita", "and this is my website. "],
  speed: 100,
  waitUntilVisible: true,
}).go();

/* fade in tagline + image */

$("#tagline").hide().delay(5500).fadeIn(2500);
$("#flex-item").hide().delay(5200).bind("load", function () { $(this).fadeIn(2500); });

/* scroll animation */

$(document).on("click","a",function(e){
  e.preventDefault();
  var id = $(this).attr("href"),
      topSpace = 30;
//alert(id);
  $('html, body').animate({
    scrollTop: $(id).offset().top - topSpace
  }, 800);
});
