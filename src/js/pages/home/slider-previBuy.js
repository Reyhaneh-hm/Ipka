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
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '10px',
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '65px',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '8px',
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '21.5px',
                }
            }
        ]
    });
});