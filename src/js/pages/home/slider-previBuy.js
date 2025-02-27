import '../../../scss/components/pages/home/slider-previBuy.scss';
import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*--------------slick slider---------------*/

$(document).ready(function () {
    $('#sliderPreviBuy').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
    });
});