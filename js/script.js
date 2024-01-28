// toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const shoppingCartButton = document.querySelector('.shopping-cart');
// ketika icon di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

document.querySelector('#shopping-cart-button').onclick = () => {
    shoppingCartButton.classList.toggle('active');
}

// jika klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const scb = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!scb.contains(e.target) && !shoppingCartButton.contains(e.target)) {
        shoppingCartButton.classList.remove('active');
    }
})

// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// ketika hamburgernya menu di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}