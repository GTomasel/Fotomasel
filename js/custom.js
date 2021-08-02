//Slick Custom

$('.youtube').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    infinite: true,
    variableWidth: true,
    centerMode: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
        breakpoint: 801,
        settings: {
            arrows: false
            }
        }
    ]
});


//Boton subir a top
var botonVolver = document.getElementById("botonVolver");

var rootElement = document.documentElement;

window.onscroll = function() {scrollFunction()};

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

botonVolver.addEventListener("click", scrollToTop);

var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.95 ) {
    // Show button
    botonVolver.classList.add("flechaVolver--show")
  } else {
    // Hide button
    botonVolver.classList.remove("flechaVolver--show")
  }
}

document.addEventListener("scroll", handleScroll)

//Collapse navbar on click
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});