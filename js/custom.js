$(function() {

    'use strict';

    // 下スクロールするとheaderをfadeOut
    // 上スクロールするとheaderをfadeIn
    var startPos = 0
    var winScrollTop = 0;
    $(window).on('scroll', function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            $('header nav').stop().fadeOut();
        } else {
            $('header nav').stop().fadeIn();
        }
        startPos = winScrollTop;
    });

    // smooth scroll
    $('.navbar-nav a').on('click', function() {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutCubic')
        // スクロール中はヘッダーを非表示
    });

    $('.backToTop').on('click', function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutCubic')
    });

});