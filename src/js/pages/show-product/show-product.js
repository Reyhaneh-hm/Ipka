import '../../../scss/components/pages/show-product/index.scss';

/*------------number Spinner & btn add product---------------*/

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

/*-------------------image product----------------------*/


// document.addEventListener("DOMContentLoaded", function () {
//     const bigImage = document.querySelector(".big-img .img"); // تصویر اصلی
//     const galleryItems = document.querySelectorAll(".gallery .item"); // تصاویر گالری

//     galleryItems.forEach(item => {
//         item.addEventListener("click", function () {
//             // حذف کلاس active از همه آیتم‌ها
//             galleryItems.forEach(el => el.classList.remove("active"));

//             // اضافه کردن کلاس active به آیتم کلیک شده
//             this.classList.add("active");

//             // تغییر تصویر بزرگ به تصویر کلیک شده
//             const newSrc = this.querySelector("img").getAttribute("src");
//             bigImage.setAttribute("src", newSrc);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const bigImageContainer = document.querySelector(".big-img");
    const galleryItems = document.querySelectorAll(".gallery .item");
    const lastItem = galleryItems[galleryItems.length - 1];
    const videoURL = "https://www.aparat.com/v/Xn02c?t=0";

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            galleryItems.forEach(el => el.classList.remove("active"));
            this.classList.add("active");

            bigImageContainer.innerHTML = "";

            if (this === lastItem) {
                bigImageContainer.innerHTML = `
                    <video class="video" controls autoplay>
                        <source src="${videoURL}" type="video/mp4">
                        مرورگر شما از ویدیو پشتیبانی نمی‌کند.
                    </video>
                `;
            } else {
                const newSrc = this.querySelector("img").getAttribute("src");
                bigImageContainer.innerHTML = `<img class="img" src="${newSrc}" alt="">`;
            }
        });
    });
});

