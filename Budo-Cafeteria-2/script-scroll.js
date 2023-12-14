$(document).ready(function () {
    var navbar = $("#navbar");
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        navbar.removeClass("bg-transparent").addClass("bg-custom"); /* Cambia el color de fondo al hacer scroll */
      } else {
        navbar.removeClass("bg-custom").addClass("bg-transparent"); /* Restaura el color de fondo inicial */
      }
    });

    $(".navbar-toggler").click(function () {
        navbar.removeClass("bg-transparent").addClass("bg-custom");
      });

  });