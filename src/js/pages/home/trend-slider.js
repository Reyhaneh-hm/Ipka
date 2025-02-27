import '../../../scss/components/pages/home/trend-slider.scss';

import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*----------------Tab Content--------------------*/

window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title]");
    const content = document.querySelectorAll("[tab_content_item]");

    if (tabs && content) {

        for (let i = 0; i < tabs.length; i++) {
            tabs[0].click()
            tabs[0].classList.add('active')

            tabs[i].addEventListener("click", () => {
                tabs.forEach((item) => {
                    item.classList.remove("active");
                });
                tabs[i].classList.add("active");

                const contentId = tabs[i].getAttribute("tab_content_title");

                content.forEach((item) => {
                    item.classList.remove("active");
                });

                const element = document.querySelector(
                    `[tab_content_item="${contentId}"]`
                );
                element.classList.add("active");
            });
        }
    }
});

/*--------------slick slider---------------*/

$(document).ready(function () {
    $('#trendSlider1').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
    });
});
$(document).ready(function () {
    $('#trendSlider2').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
    });
});