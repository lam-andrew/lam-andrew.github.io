/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainElement = document.querySelector('main');
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(mainElement, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
        document.addEventListener('scroll', () => {
            console.log('Scroll position:', window.scrollY);
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const overlapEls = document.querySelectorAll(".overlap")
|| [];

overlapEls.forEach((el) => {
    const chars = [...el.textContent];
    el.innerHTML = "";
    chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.setProperty("--index", index);
        el.append(span);
    });
});