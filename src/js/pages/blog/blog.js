import '../../../scss/components/pages/blog/index.scss';

/*--------------show filter------------*/
document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.querySelector(".filterBtn");
    const modalFilter = document.querySelector(".modalFilter");
    const overlay = document.createElement("div");

    overlay.classList.add("overlay2");
    document.body.appendChild(overlay);

    filterBtn.addEventListener("click", () => {
        [overlay, modalFilter].forEach((item) => item.classList.add("active"));
    });
    overlay.addEventListener("click", () => {
        [overlay, modalFilter].forEach((item) => item.classList.remove("active"));
    });
});