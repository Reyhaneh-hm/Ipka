import '../../../scss/components/pages/show-product/index.scss';
import { Fancybox } from "@fancyapps/ui";
/*------------number Spinner---------------*/

document.addEventListener("DOMContentLoaded", function () {
    const productCount = document.querySelector("#numberSpinner");
    const increament = productCount.querySelector(".increament");
    const decreament = productCount.querySelector(".decreament");
    const input = productCount.querySelector("input");
    const minValue = +input.getAttribute("min") || 1;
    const maxValue = +input.getAttribute("max") || 10;
    const stepValue = +input.getAttribute("step") || 1;

    increament.addEventListener("click", () => {
        if (+input.value < maxValue) {
            input.value = +input.value + stepValue;
        }
    });

    decreament.addEventListener("click", () => {
        if (+input.value > minValue) {
            input.value = +input.value - stepValue;
        }
    });
});

/*------------number Spinner & btn add product---------------*/

document.addEventListener("DOMContentLoaded", function () {
    const addProductBtnM = document.querySelector(".btn-add");
    const productCountM = document.querySelector(".count");
    const numSpinnerM = document.querySelectorAll("#numSpinner");

    numSpinnerM.forEach((item) => {
        const increament = item.querySelector(".increament");
        const decreament = item.querySelector(".decreament");
        const input = item.querySelector("input");
        const minValue = +input.getAttribute("min") || 1;
        const maxValue = +input.getAttribute("max") || 10;
        const stepValue = +input.getAttribute("step") || 1;

        input.value = minValue;

        const updateDecrementIcon = () => {
            if (+input.value === minValue) {
                decreament.classList.add("icon-Trush");
                decreament.classList.remove("icon-Minus");
            } else {
                decreament.classList.add("icon-Minus");
                decreament.classList.remove("icon-Trush");
            }
        };

        updateDecrementIcon();

        increament.addEventListener("click", () => {
            if (+input.value < maxValue) {
                input.value = +input.value + stepValue;
                updateDecrementIcon();
            }
        });

        decreament.addEventListener("click", () => {
            if (decreament.classList.contains("icon-Minus")) {
                input.value = +input.value - stepValue;
                updateDecrementIcon();
            } else {
                productCountM.classList.remove("d-flex");
                productCountM.classList.add("d-none");

                addProductBtnM.classList.remove("d-none");
                addProductBtnM.classList.add("d-flex");

                input.value = minValue;
                updateDecrementIcon();
            }
        });
    });

    addProductBtnM.addEventListener("click", function () {
        addProductBtnM.classList.remove("d-flex");
        addProductBtnM.classList.add("d-none");

        productCountM.classList.remove("d-none");
        productCountM.classList.add("d-flex");
    });
});

/*-------------------images and FancyBox----------------------*/

// document.addEventListener("DOMContentLoaded", function () {
//     const bigImageLink = document.querySelector(".big-img");
//     const bigImage = bigImageLink.querySelector(".img");
//     const galleryItems = document.querySelectorAll(".gallery .item");
//     const lastItem = galleryItems[galleryItems.length - 1];
//     const videoURL = "https://www.aparat.com/v/Xn02c?t=0";

//     /*--------------image product--------------*/
//     galleryItems.forEach(item => {
//         item.addEventListener("click", function () {
//             galleryItems.forEach(el => el.classList.remove("active"));
//             this.classList.add("active");

//             bigImageLink.innerHTML = "";

//             if (this === lastItem) {
//                 bigImageLink.innerHTML = `
//                     <video class="video" controls autoplay>
//                         <source src="${videoURL}" type="video/mp4">
//                         مرورگر شما از ویدیو پشتیبانی نمی‌کند.
//                     </video>
//                 `;
//                 bigImageLink.removeAttribute("href");
//             } else {
//                 const newSrc = this.getAttribute("data-src");
//                 bigImageLink.innerHTML = `<img class="img" src="${newSrc}" alt="">`;
//                 bigImageLink.setAttribute("href", newSrc);
//             }
//         });
//     });

//     /*--------------FancyBox--------------*/
//     document.addEventListener("click", function (event) {
//         if (event.target.closest("[data-fancybox='product']")) {
//             Fancybox.getInstance()?.on("Carousel.change", (fancybox, carousel, slide) => {
//                 const newSrc = slide.src;

//                 bigImageLink.innerHTML = `<img class="img" src="${newSrc}" alt="">`;
//                 bigImageLink.setAttribute("href", newSrc);

//                 galleryItems.forEach(item => {
//                     const img = item.querySelector("img");
//                     if (img && img.getAttribute("src") === newSrc) {
//                         galleryItems.forEach(el => el.classList.remove("active"));
//                         item.classList.add("active");
//                     }
//                 });
//             });
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const bigImageLink = document.querySelector(".big-img");
    const bigImage = bigImageLink.querySelector(".img");
    const galleryItems = document.querySelectorAll(".gallery .item");

    /*--------------image product--------------*/
    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            galleryItems.forEach(el => el.classList.remove("active"));
            this.classList.add("active");

            bigImageLink.innerHTML = "";

            if (this.classList.contains("video-item")) {
                const videoURL = this.getAttribute("data-src");
                bigImageLink.innerHTML = `
                    <iframe class="video" src="${videoURL}" frameborder="0" allowfullscreen></iframe>
                `;
            } else {
                const newSrc = this.getAttribute("data-src");
                bigImageLink.innerHTML = `<img class="img" src="${newSrc}" alt="">`;
            }
        });
    });

    /*--------------FancyBox--------------*/
    Fancybox.bind("[data-fancybox='product']", {
        infinite: true,
        keyboard: true,
        loop: true,
        buttons: [
            'zoom',
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close'
        ],
        animationEffect: "zoom",
        transitionEffect: "slide",
        thumbs: {
            autoStart: true
        },
        keyboard: true,
        touch: true,
        protect: true,
        idleTime: false,
        smallBtn: true,
        toolbar: true,
        animationDuration: 500,
        transitionDuration: 600,
    });
});
