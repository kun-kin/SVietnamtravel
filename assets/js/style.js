$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});



$(document).ready(function() {


    // $(".hasDatepicker").flatpickr({
    //     dateFormat: "d/m/Y"
    // });
    // $("#check-in").flatpickr({
    //     dateFormat: "d/m/Y"
    // });
    // $("#check-out").flatpickr({
    //     dateFormat: "d/m/Y"
    // });

    //hover function
    // $(".nav-link").mouseover(function() {
    //     $(this).css('opacity', '.7');
    // });
    // $(".nav-link").mouseout(function() {
    //     $(this).css('opacity', '1');
    // });



    // $('.selectpicker').select2();

    // $(document).mouseup(function(e) {
    //     if ($(e.target).closest(".popup-search").length ===
    //         0) {
    //         $('.popup-search').hide();
    //     }
    // });

    $(".search-header-w .icon-search").click(function() {
        $(this).toggleClass('active');
        $('.search-form-inner').slideToggle(200);
    });

    if ($(window).width() > 992) {
        $("ul.megamenu li.megamenu-item").hover(function(e) {
            $(this).children('.sub-menu').show();
        }, function(e) {
            $(this).children('.sub-menu').hide();
        });
    }
    $(window).resize(function() {
        if ($(window).width() > 992) {
            $("ul.megamenu li.megamenu-item").hover(function(e) {
                $(this).children('.sub-menu').show();
            }, function(e) {
                $(this).children('.sub-menu').hide();
            });
        }
    });


    $(".navbar-toggle").click(function() {
        $('.megamenu-wrapper').addClass('active');
    });
    $(".close-megamenu").click(function() {
        $('.megamenu-wrapper').removeClass('active');
    });


    $("ul.megamenu li.megamenu-item").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).children('.sub-menu').slideToggle();
    });

});