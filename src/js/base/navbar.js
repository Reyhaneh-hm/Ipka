// import '../../scss/components/public/navbar.scss';

/*-----------------------show search-box------------------------*/
const searchButton = document.getElementById('search');
const inputSearch = document.querySelector('#box-search2');
const overlay = document.querySelector('.overlay');

function toggleSearchBox() {
    if (inputSearch.classList.contains('active')) {
        inputSearch.classList.remove('active');
        overlay.classList.remove('active');
    } else {
        inputSearch.classList.add('active');
        overlay.classList.add('active');
    }
}

searchButton.addEventListener('click', toggleSearchBox);

overlay.addEventListener('click', () => {
    inputSearch.classList.remove('active');
    overlay.classList.remove('active');
});

/*-----------------------show filterProduct------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const filterIcon = document.getElementById("filter");
    const filterModal = document.querySelector(".filterProduct");
    const overlay = document.createElement("div");

    overlay.classList.add("overlay2");
    document.body.appendChild(overlay);

    filterIcon.addEventListener("click", function () {
        if (filterModal.classList.contains("active")) {
            filterModal.classList.remove("active");
            overlay.classList.remove("active");
        } else {
            filterModal.classList.add("active");
            overlay.classList.add("active");
        }
    });

    overlay.addEventListener("click", function () {
        filterModal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

