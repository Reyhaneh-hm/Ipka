import '../../../scss/components/pages/home/hero.scss';

/*--------------slick slider---------------*/

import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

$(document).ready(function () {
    $('#slider-hero').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        focusOnSelect: true,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '7%',
        dots: true,
        arrows: false,
    });
});