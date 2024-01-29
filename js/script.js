// toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const shoppingCartButton = document.querySelector('.shopping-cart');
// ketika icon di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCartButton.classList.toggle('active');
    e.preventDefault();
}

// jika klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!sc.contains(e.target) && !shoppingCartButton.contains(e.target)) {
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


// ketik klik icon mata dan muncul modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('#item-detail-button');

// ketika item button di klik
itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }
});

// ketika klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
}

// ketika klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}