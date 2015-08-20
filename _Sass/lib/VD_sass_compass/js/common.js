$(document).ready(function() {

    var w_Window = $(window).width();

    // Tooltip
    $('.wd-tooltip').tooltipster();

    // Royal Slider
    $('#wd-banner-royal-slider').royalSlider({
        arrowsNav: false,
        arrowsNavAutoHide: false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'bullets',
        imageScaleMode: 'none',
        imageAlignCenter: false,
        blockLoop: true,
        loop: true,
        numImagesToPreload: 6,
        transitionType: 'fade',
        keyboardNavEnabled: true,
        imageScaleMode: 'fill',
        autoScaleSlider: true,
        autoScaleSliderWidth: 1596,
        autoScaleSliderHeight: 617,
        block: {
            delay: 500
        },
        autoPlay: {
            enabled: true,
            pauseOnHover: false
        }
    });

    $('#wd-sidebar-royal-slider').royalSlider({
        arrowsNav: true,
        arrowsNavAutoHide: true,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'bullets',
        imageScaleMode: 'none',
        imageAlignCenter: false,
        blockLoop: true,
        loop: true,
        numImagesToPreload: 6,
        transitionType: 'fade',
        keyboardNavEnabled: true,
        imageScaleMode: 'fill',
        autoScaleSlider: true,
        autoScaleSliderWidth: 332,
        autoScaleSliderHeight: 220,
        block: {
            delay: 500
        },
        autoPlay: {
            enabled: true,
            pauseOnHover: false
        }
    });

    // Magnific Popup
    $('.wd-parent-container').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
        });
    });

    $(".wd-open-popup-order, .wd-btn-mark-bonus, .wd-link-forgot-pass").magnificPopup({
        type: 'inline',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });

    // Toggle cart
    var cart_hidden = $(".wd-your-cart .wd-content-hidden");
    $(".wd-your-cart .wd-heading-cart").toggle(function() {
        cart_hidden.slideDown(200);
        $(this).addClass("wd-open");
    }, function() {
        cart_hidden.slideUp(200);
        $(this).removeClass("wd-open");
    });

    // Accordion
    $(".wd-accordion .wd-content-heading:not(:first)").hide();
    $(".wd-accordion .wd-heading").click(function() {
        $('.wd-accordion .wd-current').removeClass('wd-current');
        $('.wd-accordion .wd-content-heading').slideUp('normal');
        if ($(this).next('.wd-content-heading').is(':hidden') === true) {
            $(this).addClass('wd-current');
            $(this).next('.wd-content-heading').slideDown('normal');
        }
    });


    // Datepicker
    // maxDate: '-1d' : Lấy ngày từ hiện tại trở về quá khứ
    // minDate: 0: Lấy ngày từ hiện tại đến tương lai
    $('.wd-date-any').datepicker({
        inline: true,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dateFormat: 'dd/mm/yy',
        yearRange: '-100y:c+nn',
        showOn: 'both',
        buttonImageOnly: true,
        buttonImage: "img/front/date-picker.png",
        changeMonth: true,
        changeYear: true
    });
    $(".wd-date-after").datepicker({
        inline: true,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dateFormat: 'dd/mm/yy',
        yearRange: '-100y:c+nn',
        minDate: 0,
        showOn: 'both',
        buttonImageOnly: true,
        buttonImage: "img/front/date-picker.png",
        changeMonth: true,
        changeYear: true
    });
    $('.ui-datepicker-trigger').addClass('wd-icon-in-input');

    // Timepicker
    $('.wd-time').timepicker();

    // Tabs responsive
    $('#wd-tabs').easyResponsiveTabs();

    // // Hide/show form login
    // $(".wd-icon-func li").each(function() {
    //     var $body = $('html,body'),
    //         btnClick = $(this).find("a"),
    //         btnClickHref = btnClick.attr("href"),
    //         formOpen = $(btnClickHref);

    //     btnClick.click(function(e) {
    //         if (formOpen.is(":hidden")) {
    //             formOpen.css("display", "block");
    //             if (formOpen.parents("li").siblings().find("id^=wd-box").is(":visible")) {
    //                 console.log($(this));
    //                 // $(this).css("display", "none");
    //             }
    //         } else if (formOpen.is(":visible")) {
    //             formOpen.css("display", "none");
    //         }
    //         e.stopPropagation();
    //         return false;
    //     });
    //     formOpen.click(function(e) {
    //         e.stopPropagation();
    //     });
    //     $body.click(function(e) {
    //         formOpen.css("display", "none");
    //     });
    // });

    var $body = $('html,body'),
        formSearch = $("#wd-box-search"),
        formLogin = $("#wd-box-login");
    $(".wd-icon-func li a.wd-icon-search").click(function(e) {
        if (formSearch.is(":hidden")) {
            formSearch.css("display", "block");
            formLogin.css("display", "none");
        } else if (formSearch.is(":visible")) {
            formSearch.css("display", "none");
        }
        e.stopPropagation();
        return false;
    });
    formSearch.click(function(e) {
        e.stopPropagation();
    });

    $(".wd-icon-func li a.wd-icon-login").click(function(e) {
        if (formLogin.is(":hidden")) {
            formLogin.css("display", "block");
            formSearch.css("display", "none");
        } else if (formLogin.is(":visible")) {
            formLogin.css("display", "none");
        }
        e.stopPropagation();
        return false;
    });
    formLogin.click(function(e) {
        e.stopPropagation();
    });

    $body.click(function(e) {
        formSearch.css("display", "none");
        formLogin.css("display", "none");
    });

    // Custom Scrollbar
    if (w_Window > 600) {
        $(".wd-top-mark-bonus").mCustomScrollbar();
    }

    // Menu responsive
    $('#wd-menu-vertical').mmenu();

    // Owl carousel
    var owl = $(".wd-related-product-detail #wd-owl-carousel");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 2],
            [600, 2],
            [700, 2],
            [900, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
        ],
        navigation: true,
        pagination: false,
        autoPlay: true,
        stopOnHover: true
    });

    var owl = $(".wd-related-teach-cook #wd-owl-carousel");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 2],
            [600, 2],
            [700, 2],
            [900, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
        ],
        navigation: true,
        pagination: false,
        autoPlay: true,
        stopOnHover: true
    });

    // Pagination table "Lịch sử mua hàng"
    var countRowHistoryBuy = $(".wd-table-history-buy tbody tr").length;
    $('#wd-history-buy').smartpaginator({
        totalrecords: countRowHistoryBuy,
        recordsperpage: 10,
        datacontainer: 'wd-table-history-buy',
        dataelement: 'tr'
    });

    // Pagination table "Lịch sử khuyến mãi"
    var countRowHistoryPromotion = $(".wd-table-history-promotion tbody tr").length;
    $('#wd-history-promotion').smartpaginator({
        totalrecords: countRowHistoryPromotion,
        recordsperpage: 10,
        datacontainer: 'wd-table-history-promotion',
        dataelement: 'tr'
    });

    $('#wd-scrollbar').slimScroll({
        height: '144',
        wheelStep: 5
    });

    // FIX FOR IE7 AND IE8
    (function($) {
        $.support.placeholder = ('placeholder' in document.createElement('input'));
    })(jQuery);

    $(function() {
        if (!$.support.placeholder) {
            $("[placeholder]").focus(function() {
                if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
            }).blur(function() {
                if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
            }).blur();

            $("[placeholder]").parents("form").submit(function() {
                $(this).find('[placeholder]').each(function() {
                    if ($(this).val() == $(this).attr("placeholder")) {
                        $(this).val("");
                    }
                });
            });
        }
    });

    // If device support touch event then use click event OR hover event
    if (Modernizr.touchevents) {
        $(".wd-list li").toggle(function() {
            $(this)
                .find(".wd-mask").stop().fadeIn(300)
                .end()
                .find(".wd-icon").stop().animate({
                    'top': '50%',
                    'margin-top': '-23px'
                }, 300);
        }, function() {
            $(this)
                .find(".wd-mask").stop().fadeOut(300)
                .end()
                .find(".wd-view-detail").stop().animate({
                    'top': '120%',
                    'margin-top': 0
                }, 300)
                .end()
                .find(".wd-add-cart").stop().animate({
                    'top': '-50%',
                    'margin-top': 0
                }, 300);
        });
    } else {
        $(".wd-list li").hover(function() {
            $(this)
                .find(".wd-mask").stop().fadeIn(300)
                .end()
                .find(".wd-icon").stop().animate({
                    'top': '50%',
                    'margin-top': '-23px'
                }, 300);
        }, function() {
            $(this)
                .find(".wd-mask").stop().fadeOut(300)
                .end()
                .find(".wd-view-detail").stop().animate({
                    'top': '120%',
                    'margin-top': 0
                }, 300)
                .end()
                .find(".wd-add-cart").stop().animate({
                    'top': '-50%',
                    'margin-top': 0
                }, 300);
        });
    }


});