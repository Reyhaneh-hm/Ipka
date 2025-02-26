import '../../../scss/components/pages/home/trend-slider.scss';
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

/*-----------------------trend slider----------------*/

// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// document.addEventListener('DOMContentLoaded', () => {

//     const swiper = new Swiper('.swiper-container', {
//         loop: true, // چرخه بی‌نهایت
//         // spaceBetween: 20, // فاصله بین اسلایدها
//         slidesPerView: 4, // تعداد نمایش اسلاید در هر بار
//         autoplay: { // پخش خودکار
//             delay: 2000,
//             disableOnInteraction: false
//         },
//         navigation: { // دکمه‌های چپ و راست
//             // nextEl: '.swiper-button-next',
//             // prevEl: '.swiper-button-prev',
//         },
//         pagination: { // دایره‌های پایین اسلایدر
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         keyboard: { // کنترل با کیبورد
//             enabled: true,
//             onlyInViewport: true,
//         },
//         mousewheel: { // کنترل با اسکرول ماوس
//             invert: false,
//         },
//         breakpoints: { // واکنش‌گرایی برای سایزهای مختلف
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 }
//         }
//     });
// });

/*-----------------------------------------------------------------------*/

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import $ from "jquery";
// import "slick-carousel";

// $(document).ready(function () {
//     $(".slider").slick({
//         dots: true,            // نمایش دایره‌های نویگیشن
//         infinite: true,        // اسکرول بی‌نهایت
//         speed: 500,            // سرعت انیمیشن (به میلی‌ثانیه)
//         slidesToShow: 1,       // تعداد اسلایدهای نمایش داده شده همزمان
//         slidesToScroll: 1,     // تعداد اسلایدهایی که هنگام اسکرول جابجا می‌شوند
//         autoplay: true,        // پخش خودکار اسلایدر
//         autoplaySpeed: 2000,   // زمان تغییر اسلاید در حالت autoplay
//         arrows: true,          // نمایش دکمه‌های قبل و بعد
//         prevArrow: "<button class='slick-prev'>قبلی</button>",
//         nextArrow: "<button class='slick-next'>بعدی</button>",
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: false
//                 }
//             }
//         ]
//     });
// });
