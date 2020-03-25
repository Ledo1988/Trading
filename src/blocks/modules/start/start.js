import Swiper from "swiper";
import $ from "jquery";

$(document).ready(function() {
    var swiper = new Swiper('.start__slider-content', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
