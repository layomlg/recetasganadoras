//MENUOPENER      
$(".bar-opener.mobile-toggle").click(function (e) {
  $("html").toggleClass("noscroll");
  $("body").toggleClass("noscroll");
});
//INICIARSESIONFONDO
$(".mt-top-bar").click(function (e) {
  $("html").toggleClass("noscroll");
  $("body").toggleClass("noscroll");
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
