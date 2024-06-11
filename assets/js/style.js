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


    $("ul.megamenu li.megamenu-item").click(function() {
        // e.preventDefault();
        $(this).toggleClass('active');
        $(this).children('.sub-menu').slideToggle();
    });

});


$('.collapse').on('shown.bs.collapse', function() {
    $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-right").addClass("fa-chevron-down");
}).on('hidden.bs.collapse', function() {
    $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
});
$('.expand-all').click(function() {
    var $this = $(this);
    if ($this.hasClass('collapse-all')) {
        $this.text('Expand All');
        $('.panel-collapse.show').collapse('hide');
        $this.removeClass('collapse-all');
    } else {
        $this.text('Collapse All');
        $('.panel-collapse:not(".show")').collapse('show');
        $this.addClass('collapse-all');
    }
});

$('#accordion').on('show.bs.collapse hide.bs.collapse', function(obj) {
    var $this = $(this);
    var $expand = $('.expand-all');
    if (obj.type == "show") {
        $expand.text('Collapse All').addClass('collapse-all');
    } else {
        if ($('.collapse.show').not(obj.target).length == 0) {
            $expand.text('Expand All').removeClass('collapse-all');
        }
    }
});


$('.accordion-group .accordion-item .accordion-heading').click(function() {
    $(this).toggleClass('active');
    $(this).parent('.accordion-item').children('.accordion-content').slideToggle();
    $(this).parents('.accordion-group').children('.accordion-item').find('.accordion-heading').not($(this)).removeClass('active');
    $(this).parents('.accordion-group').children('.accordion-item').find('.accordion-content').not($(this).parent('.accordion-item').children('.accordion-content')).slideUp();

});

$('.open-sidebar').click(function() {
    $('.content-aside').addClass('active');
    $('.sidebar-overlay').addClass('show');
});
$('#close-sidebar').click(function() {
    $('.content-aside').removeClass('active');
    $('.sidebar-overlay').removeClass('show');
});
$(document).mouseup(function(e) {
    if ($(e.target).closest(".content-aside").length === 0) {
        $('.content-aside').removeClass('active');
        $('.sidebar-overlay').removeClass('show');
    }
});




$(function() {
    $("#slider-range").slider({
        range: true,
        min: 130,
        max: 500,
        values: [130, 250],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});