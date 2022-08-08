$(function () {
    // $('.TopBanner i').on('click', function () {
    //     $('.TopBanner').slideUp();
    // })

    // // $('.pop button').on('click', function () {
    // //     // $(this).parent().hide(); 하나씩 눌러 지우려면
    // //     $(this).parent().hide();
    // // })

    var closeBanner = () => {
        // $('TopBanner'), toggleClass('on');
        $('.TopBanner'), slideToggle();
        // document.querySelector('.TopBanner').classList.toggle('on')
    }

    $('.TopBanner i').on('click', closeBanner)

    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    })

    $('.ProductSlider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
        ]
    });

    //e.currentTarget

    function toggleClass() {
        $(this).toggleClass('on')
        $('.Footer .popup').toggleClass('on')
    }

    $('.pop li').on('click', toggleClass);
    $('.pop i').on('click', toggleClass);

    function mopen() {
        $(this)
    }

    $('.mopen').on('click', mopen)
})
