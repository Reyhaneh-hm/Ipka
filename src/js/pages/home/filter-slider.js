import '../../../scss/components/pages/home/filter-slider.scss';

import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*----------------Tab Content--------------------*/

window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title2]");
    const content = document.querySelectorAll("[tab_content_item2]");

    if (tabs && content) {

        for (let i = 0; i < tabs.length; i++) {
            tabs[0].click()
            tabs[0].classList.add('active')

            tabs[i].addEventListener("click", () => {
                tabs.forEach((item) => {
                    item.classList.remove("active");
                });
                tabs[i].classList.add("active");

                const contentId = tabs[i].getAttribute("tab_content_title2");

                content.forEach((item) => {
                    item.classList.remove("active");
                });

                const element = document.querySelector(
                    `[tab_content_item2="${contentId}"]`
                );
                element.classList.add("active");
            });
        }
    }
});


/*--------------slick slider---------------*/

$(document).ready(function () {
    $('#filterSlider1').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '10px',
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '42px',
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30.5px',
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '34px',
                }
            }
        ]
    });
});

