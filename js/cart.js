//MENUOPENER      
$(".bar-opener.mobile-toggle").click(function (e) {
  $("html").toggleClass("noscroll");
  $("body").toggleClass("noscroll");
});
//INICIARSESIONFONDO
/*$(".mt-top-bar").click(function (e) {
  $("html").toggleClass("noscroll");
  $("body").toggleClass("noscroll");
});*/
$(".login > h1").click(function (e) {
  $("html").addClass("noscroll");
  $("body").addClass("noscroll");
});
$(".login > div > .fa.fa-times").click(function (e) {
  $("html").removeClass("noscroll");
  $("body").removeClass("noscroll");
});

function carrito() {
  $(".cart-opener").toggleClass("open");
  setTimeout(function (e) {
    if ($(".cart-opener").hasClass("open")) {
      $("#nav").scrollTop(250);
    } else {
      $("#nav").scrollTop(0);
    }
  }, 250);
}
