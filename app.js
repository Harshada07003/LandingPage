window.onscroll = function() {
    stickyNavbar();
};

function stickyNavbar() {
    const navbar = document.querySelector('nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    } else {
        navbar.style.backgroundColor = "none";
        navbar.style.boxShadow = "none";
    }
}
