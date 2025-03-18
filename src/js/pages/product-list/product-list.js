import '../../../scss/components/pages/product-list/index.scss';

/*------------number Spinner & btn add product---------------*/

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item.add-product");

    items.forEach((item) => {
        const productCount = item.querySelector(".product-count");
        const increament = productCount.querySelector(".increament");
        const decreament = productCount.querySelector(".decreament");
        const input = productCount.querySelector("input");
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
            }
        });
    });
});

/*--------------------renger----------------------*/

document.addEventListener("DOMContentLoaded", function () {
    var priceSlider = document.getElementById("price-slider");
    var minPrice = document.getElementById("min-price");
    var maxPrice = document.getElementById("max-price");

    noUiSlider.create(priceSlider, {
        start: [30800000, 90800000],
        connect: true,
        range: {
            min: 1000000,
            max: 100000000,
        },
        step: 100000,
        direction: "rtl",
        format: {
            to: function (value) {
                return Math.round(value).toLocaleString();
            },
            from: function (value) {
                return Number(value.replace(/,/g, ""));
            },
        },
    });

    priceSlider.noUiSlider.on("update", function (values) {
        minPrice.textContent = values[0];
        maxPrice.textContent = values[1];
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var priceSlider = document.getElementById("price-slider2");
    var minPrice = document.getElementById("min-price2");
    var maxPrice = document.getElementById("max-price2");

    noUiSlider.create(priceSlider, {
        start: [30800000, 90800000],
        connect: true,
        range: {
            min: 1000000,
            max: 100000000,
        },
        step: 100000,
        direction: "rtl",
        format: {
            to: function (value) {
                return Math.round(value).toLocaleString();
            },
            from: function (value) {
                return Number(value.replace(/,/g, ""));
            },
        },
    });

    priceSlider.noUiSlider.on("update", function (values) {
        minPrice.textContent = values[0];
        maxPrice.textContent = values[1];
    });
});

/*-------------------Slider Product-------------------*/
window.addEventListener("load", () => {
    document.querySelectorAll("[scroll_container]").forEach(t => {
        let e = false, i, s;

        t.addEventListener("mousedown", n => {
            e = true;
            i = n.pageX - t.offsetLeft;
            s = t.scrollLeft;
            t.classList.add("active");
        });

        t.addEventListener("mouseleave", () => {
            e = false;
            t.classList.remove("active");
        });

        t.addEventListener("mouseup", () => {
            e = false;
            t.classList.remove("active");
        });

        t.addEventListener("mousemove", n => {
            if (!e) return;
            n.preventDefault();
            const r = (n.pageX - t.offsetLeft - i);
            t.scrollLeft = s - r;
            t.classList.add("active");
        });

        t.addEventListener("touchstart", n => {
            e = true;
            i = n.touches[0].pageX - t.offsetLeft;
            s = t.scrollLeft;
        });

        t.addEventListener("touchend", () => {
            e = false;
            t.classList.remove("active");
        });

        t.addEventListener("touchmove", n => {
            if (!e) return;
            const r = (n.touches[0].pageX - t.offsetLeft - i);
            t.scrollLeft = s - r;
            t.classList.add("active");
        });
    });
});

/*--------------------show filter----------------------*/
const filterBtn = document.querySelector(".filter-btn");
const modalFilter = document.querySelector(".modal-filter");
const overlay = document.createElement("div");

overlay.classList.add("overlay2");
document.body.appendChild(overlay);
filterBtn.addEventListener("click", () => {
    [overlay, modalFilter].forEach((item) => item.classList.add("active"));
});
overlay.addEventListener("click", () => {
    [overlay, modalFilter].forEach((item) => item.classList.remove("active"));
});
/*-----------------accordion menu--------------------*/
window.addEventListener("load", () => {
    const filterItem = document.querySelectorAll("[filte_item]");

    filterItem.forEach((item) => {
        if (!item) return;

        const headItem = item.querySelector(".head");
        const lists = item.querySelector(".box");

        item.style.height = headItem.offsetHeight + "px";
        const boxHeight = lists.offsetHeight;

        headItem.addEventListener("click", () => {
            filterItem.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.style.height = headItem.offsetHeight + "px";
                }
            });

            if (!item.classList.contains("active")) {
                item.classList.add("active");
                item.style.height = boxHeight + headItem.offsetHeight + "px";
            } else {
                item.classList.remove("active");
                item.style.height = headItem.offsetHeight + "px";
            }
        });
        filterItem[0].querySelector(".head").click();
    });

});