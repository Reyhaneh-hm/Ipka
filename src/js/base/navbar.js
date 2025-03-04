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

