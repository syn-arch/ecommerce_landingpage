$(function () {

    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slideToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});
