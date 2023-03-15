$('.slider-1 .image img').on('click', function() {
    var imageselected = $(this).attr('src');
    $('.image-animation-selected img').attr('src', imageselected);
    $('.image-animation-selected').addClass('selected-item');
    setTimeout(function() {
        $('.image-animation-selected').removeClass('selected-item');
    }, 2000);
    $('html, body').animate({
        scrollTop: $("#product-section").offset().top
    }, 1000);

    $('.sec-4 .right-content .image img').attr('src', imageselected);
    $('.sec-5 .center-content .image img').attr('src', imageselected);
})


$('.sides').on('click', function() {
    $('.sides').removeClass('selected-side');
    $(this).addClass('selected-side');
})


$('.slider-1').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


/* testi slider */

$('.testi-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                arrows: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



// case study 


$('.auto-slider-1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    responsive: [

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});



$('.auto-slider-2').slick({
    slidesToShow: 3,
    slidesToScroll: -1,
    autoplay: true,
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    responsive: [

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

var count = -1;

function serviceactivate() {
    var service = $('.circle-items');
    var serviceslength = service.length - 1;
    count < serviceslength ? count++ : count = 0;
    service.removeClass('activeimage').eq(count).addClass('activeimage');
}

setInterval(serviceactivate, 6000);


$(".circle-items").mouseenter(function() {
    $(".circle-items").removeClass('activeimage');
});


/*mobile menu*/
$('.icon-bar').on('click', function() {
    $('.mobile-nav').toggleClass('open');
})