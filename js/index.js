
// hide the part
$( ".contact-form i").hide(); 
$( ".contact-form p").hide();
$( ".contact-form form").hide();

// show the part
$( ".contact-form" ).click(function() {
  $( ".contact-form p").slideDown(500)
  $( ".contact-form i").slideDown(500)
  $( ".contact-form form").slideDown(500)
});

// close the hidden part
$( ".contact-form i" ).click(function() {
  $(this).slideUp(500)
  $( ".contact-form p").slideUp(500)
  $( ".contact-form form").slideUp(500)
    return false
});