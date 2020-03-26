import Swiper from "swiper";
import $ from "jquery";

$(document).ready(function() {
    var swiper = new Swiper('.start__slider-content', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>';
            },
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
