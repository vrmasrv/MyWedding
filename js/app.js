$(window).on('load', function() {
    "use strict";
    $('#ftco-loader').delay(1000).fadeOut('slow');
});
$(document).ready(function() {
    "use strict";
    var myElement = document.querySelector("nav");
    var headroom = new Headroom(myElement);
    headroom.init();
    $(window).scroll(function() { var top = $(window).scrollTop(); if (top >= 100) { $("nav").css("background-color", "#313F4C"); } else { $("nav").css("background-color", "transparent"); } });
    $('#countdown').countdown('2020/04/17', function(event) { var $this = $(this).html(event.strftime('' + '<div><span>%D</span><span>days</span></div>' + '<div><span>%H</span><span>hours</span></div>' + '<div><span>%M</span><span>min</span></div>' + '<div><span>%S</span><span>sec</span></div>')) });
    $('.popup-gmaps').magnificPopup({ type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false });
    var portfolioIsotope = $('.pple-container').isotope({ itemSelector: '.pple-item', layoutMode: 'fitRows' });
    $('#pple-filters button').on('click', function() {
        $("#pple-filters button").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
    var itemReveal = Isotope.Item.prototype.reveal;
    Isotope.Item.prototype.reveal = function() {
        itemReveal.apply(this, arguments);
        $(this.element).removeClass('isotope-hidden');
    };
    var itemHide = Isotope.Item.prototype.hide;
    Isotope.Item.prototype.hide = function() {
        itemHide.apply(this, arguments);
        $(this.element).addClass('isotope-hidden');
    };
    $('.pple-container').magnificPopup({ delegate: '.pple-item:not(.isotope-hidden) a.link-preview', type: 'image', gallery: { enabled: true, tPrev: "", tNext: "", tCounter: "%curr% / %total%" }, removalDelay: 100, mainClass: "mfp-fade", fixedContentPos: false });
    $('.single-item').slick({ autoplay: true, autoplaySpeed: 6000 });
    $('body').scrollspy({ target: '.navbar', offset: 120 });
    $('.navbar-nav a').on('click', function() { $.scrollTo(this.hash, 1000, { offset: 73 }); });
    $('.scroll-link').on('click', function() { $.scrollTo(this.hash, 1000, { offset: 73 }); });
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
});
var playPressed = false;
var isPaused = false;
var audio;

function playMusic() {
    if (!playPressed) {
        audio = new Audio('gallery/music/song.mp3');
        isPaused = false;
        playPressed = true;
        audio.loop = true;
        audio.play();
    } else {
        if (!audio.paused) {
            audio.pause();
        } else {
            audio.play();
        }
    }

}