$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:

  $("#sidebar-button").click(function(){
    if(!$(".sidebar-container").hasClass("sidebar-active")) {
      $(".sidebar-container").addClass("sidebar-active");
      $("#sidebar-button").addClass("button-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
        $("body").addClass("no-scroll");
      }, 300);
    } else {
      $(".sidebar-container").removeClass("sidebar-active");
      $("#sidebar-button").removeClass("button-active");
      $(".page-wrapper").removeClass("wrapper-active");
      $("body").removeClass("no-scroll");
    }
  });
  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
  $(".page-wrapper").hover(function(){
    if($(".sidebar-container").hasClass("sidebar-active")) {
      $(".sidebar-container").removeClass("sidebar-active");
      $("#sidebar-button").removeClass("button-active");
      $(".page-wrapper").removeClass("wrapper-active");
      $("body").removeClass("no-scroll");
    }
  });
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here

  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-next").click(function() {
  var left = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (left == -3840) {
    return false;
  } else {
    $("#carousel").css("margin-left", left - 960);
  }
});

$("#carousel-prev").click(function() {
  var left = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (left == 0) {
    return false;
  } else {
    $("#carousel").css("margin-left", left + 960);
  }
});


  //THIS IS NOT A REQUIRED QUESTION
  // EXTRA FOR EXPERTS

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});
