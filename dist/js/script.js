// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const navFixed = header.offsetTop;

    // console.log(window.pageYOffset, navFixed); // Cek nilai scroll dan offsetTop

    if (window.pageYOffset > navFixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}