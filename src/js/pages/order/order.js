import '../../../scss/components/pages/order/index.scss';

/*---------------number Spinner----------------*/
const numberSpinner = document.querySelectorAll("#numberSpinner");
numberSpinner.forEach((item) => {
    const increament = item.querySelector(".increament");
    const decreament = item.querySelector(".decreament");
    const input = item.querySelector("input");
    const minValue = input.getAttribute("min");
    const maxValue = input.getAttribute("max");
    const stepValue = input.getAttribute("step");

    input.value = minValue;

    increament.addEventListener("click", () => {
        if (+input.value < +maxValue) {
            input.value = +input.value + +stepValue;
        }
    });

    decreament.addEventListener("click", () => {
        if (+input.value > +minValue) {
            input.value = +input.value - +stepValue;
        }
    });
});

/*----------------active item & border-bottom-----------------*/

window.addEventListener("load", (() => {
    const e = document.querySelector("#filter-menu");
    if (e) {
        const t = e.querySelectorAll(".item"),
            n = e.querySelector(".line"),
            i = document.querySelectorAll("#filter-box >.box");

        for (let e = 0; e < t.length; e++) {
            if (window.innerWidth >= 426) {
                n.style.left = t[0].offsetLeft + "px";
                n.style.width = t[0].offsetWidth + "px";
            }

            t[e].addEventListener("click", (a => {
                t.forEach((n => {
                    n.classList.add("active"),
                        n != t[e] && n.classList.remove("active");
                    const a = t[e].dataset.id;
                    i.forEach((e => {
                        e.classList.remove("active");
                    }));
                    document.getElementById(a).classList.add("active");
                }));

                if (window.innerWidth >= 426) {
                    const o = a.target.offsetWidth + "px",
                        r = a.target.offsetLeft + "px";
                    n.style.left = r;
                    n.style.width = o;
                }
            }));
        }
    }
}));


