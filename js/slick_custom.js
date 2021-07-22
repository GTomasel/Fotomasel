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