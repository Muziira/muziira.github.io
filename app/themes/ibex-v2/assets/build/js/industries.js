jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1750) {
            $('.main-nav.industries').addClass('fixed');
        } else {
            $('.main-nav.industries').removeClass('fixed');
        }
    });



    var $status = $('.pagingInfo');
    var $slickElement = $('.industry-details-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    // $slickElement.slick({
    //     slide: 'img',
    //     autoplay: true,
    //     dots: true
    // });

    // Industries section sliders
    $('#technology .industry-details-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.prev',
        nextArrow: '.next',
         fade: true
    });

    // $('#travel .industry-details-slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '.prev2',
    //     nextArrow: '.next2',
    //      fade: true
    // });
    //
    // $('#communications .industry-details-slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '.prev3',
    //     nextArrow: '.next3',
    //      fade: true
    // });
    //
    // $('#financial .industry-details-slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '.prev4',
    //     nextArrow: '.next4',
    //      fade: true
    // });
    //
    // $('#education .industry-details-slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '.prev5',
    //     nextArrow: '.next5',
    //      fade: true
    // });
    //
    // $('#automotive .industry-details-slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '.prev6',
    //     nextArrow: '.next6',
    //      fade: true
    // });
    //
    // $('#retail .industry-details-slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '.prev7',
    //     nextArrow: '.next7',
    //      fade: true
    // });
    //
    // $('#health .industry-details-slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '.prev8',
    //     nextArrow: '.next8',
    //      fade: true
    // });


    // Scroll Spy
    $('.industry-section').on('scrollSpy:enter', function() {
        console.log('enter:', $(this).attr('id'));

        $('.main-nav.industries').find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
    });

    $('.industry-section').on('scrollSpy:exit', function() {
        console.log('exit:', $(this).attr('id'));
        $('.main-nav.industries').find('a[href="#'+$(this).attr('id')+'"]').parent('li').removeClass('active');
    });

    $('.industry-section').scrollSpy();
});