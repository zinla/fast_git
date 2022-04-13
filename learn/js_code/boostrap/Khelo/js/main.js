/**
*
* -----------------------------------------------------------------------------
*
* Template : Khelo | Sports HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    // wow init
    new WOW().init();

    // scrollTop init
    var totop = $('#scrollUp'); 
    if(totop.length){   
        win.on('scroll', function() {
            if (win.scrollTop() > 150) {
                totop.fadeIn();
            } else {
                totop.fadeOut();
            }
        });
        totop.on('click', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 500)
        });
    }

    // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomIn');
            }
        },
        gallery: {
            enabled: true
        }
    });

    //slider
    var slidercarousel = $('.slider-carousel');
    if(slidercarousel.length){
        $(".slider-carousel").owlCarousel({
            margin: 0,
            nav: true,
            navText:[
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            loop: true,
            dots: false,
            items: 1,
            autoplay: true,
            animateOut: 'fadeOut',
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsiveClass: true
        });
    }
   
    // Menu js
    if($(window).width() < 992) {
      $('.rs-menu').css('height', '0');
      $('.rs-menu').css('opacity', '0');
      $('.rs-menu').css('z-index', '-1');
      $('.rs-menu-toggle').on( 'click', function(){
         $('.rs-menu').css('opacity', '1');
         $('.rs-menu').css('z-index', '1');
     });
    }
    
    //Canvas Menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }
    var navclose = $('#nav-close');
    if(navclose.length){
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    }
     
    //Toggle search
    $(".cart li.search").on('click', function(){
        $(".search-bar").slideToggle();
    });

    /*-------------------------------------
     Preloder Js here
     ---------------------------------------*/
    $(window).load(function() {
        $("#loading").delay(800).fadeOut(800);
        $("#loading-center").click(function() {
        $("#loading").fadeOut(800);
        })
    })  
    
    /*-------------------------------------
    OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        centerMode = owlCarousel.data('center-mode'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            center: (centerMode ? true : false),
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false),
                    center: false,
                },
                576: {
                    items: (smDevice2 ? smDevice2 : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false),
                    center: false,
                },
                768: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false),
                    center: false,
                },
                992: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false)
                }
            }
        });
    });

    // Counter Up
    if ($('.counter-number').length) {
        $('.counter-number').counterUp({
            delay: 20,
            time: 1500
        });
    }

    //Videos popup jQuery 
    var popup = $('.popup-videos');
    if(popup.length) {
        $('.popup-videos').magnificPopup({
            disableOn: 10,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        }); 
    }

    /*----------------------------
    swiper progressbar Slider
    ------------------------------ */
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        mousewheel: true,
        direction: 'horizontal',
        grabCursor: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            481: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
    
    $(".swiper-container").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    /*----------------------------
    single-productjs active
    ------------------------------ */
    var single_product_image = $('.news-slider-full');
    if(single_product_image.length) {
        $('.news-slider-full').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.news-slider-nav'
        });
    }
    var single_product_nav = $('.news-slider-nav');
    if(single_product_nav.length) {
        $('.news-slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.news-slider-full',
            dots: false,
            arrows: false,
            vertical: true,
            focusOnSelect: true,
            centerMode:false,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  }
                }
              ] 
        });
    }

    //CountDown Timer
    var CountTimer = $('.CountDownTimer');
    if(CountTimer.length){ 
        $(".CountDownTimer").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: "#fff",
            circle_fg_color: "#fff",
            time: {
                Days:{
                    color: "#fbc02d"
                },
                Hours:{
                    color: "#fbc02d"
                },
                Minutes:{
                    color: "#fbc02d"
                },
                Seconds:{
                    color: "#fbc02d"
                }
            }
        }); 
    }
    
    // Rs Coutndown
    var countdown_first = $('#countdown');
    if(countdown_first.length){
        var countDownDate = new Date("Nov 12 2020, 19:00:00").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
                
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="countdown"
            document.getElementById("countdown").innerHTML = "<div>" + days + "<span>days</span>" + "</div>" + "<div>" + hours + "<span>hours</span> " + "</div>"
              + "<div>" + minutes + "<span>minutes</span> " + "</div>" + "<div>" + seconds + "<span>seconds</span>" + "</div>";
                
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "Game End Already";
            }
        });
    }
	
})(jQuery);