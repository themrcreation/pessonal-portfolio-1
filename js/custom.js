$(function(){

  'use strict';
    var typed = new Typed('.typing', {
        strings: ["Professional Coder.", "Web Developer.", "Digital Marketer."],
        typeSpeed: 40,
        backSpeed: 30,
        loop: true,
      });

      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 200){
            $('.navbar').addClass('sticky_header');
        }
        else {
             $('.navbar').removeClass('sticky_header');
        }
        });


      //copy 
      var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')

        },
        methods: function (e) {
            imJs.wowActive();
            imJs.stickyAdjust();
            imJs.testimonialActivation();
        },
        
        wowActive: function () {
            new WOW().init();
        },

        stickyAdjust: function (e) {
            // Sticky Top Adjust..,
            $('.mr-sticky-top-adjust').css({
                top: 120
            });

            $('.mr-sticky-top-adjust-two').css({
                top: 200
            });
            $('.mr-sticky-top-adjust-three').css({
                top: 25
            });
        },

        testimonialActivation: function () {
            $('.testimonial_activator').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i></button>'
            });
        },

    }
    imJs.m();


      //copy end

      

});