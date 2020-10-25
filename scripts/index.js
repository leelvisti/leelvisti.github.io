document.addEventListener('DOMContentLoaded', () => {
    //I'm using "click" but it works with any event
    document.addEventListener('click', (event) => {
        // hamburger initialization for click event
        const hamburger = document.querySelector('.hamburger-container');
        const menu = document.querySelector('#menu-sidebar');

        // check if menu currently opened
        if (hamburger && menu) {
            const isHamburgerClicked = hamburger.contains(event.target);
            const isMenuClicked = menu.contains(event.target);
            const infoPage = document.querySelector('#info-page');

            // handle hamburger click
            if (isHamburgerClicked) {

                hamburger.classList.toggle('active-one');
                
                // open menu if active
                if (hamburger.className.includes('active-one')) {
                    menu.style.display = 'block';
                    menu.style.boxShadow = '-10px 0px 30px -15px black';
                    infoPage.style.filter = 'blur(4px)';
                    document.body.style.overflow = 'hidden';
                } else {
                    // close menu
                    menu.style.display = 'none';
                    infoPage.style.filter = 'unset';
                    document.body.style.overflow = 'auto';
                }
            } else {
                // when menu is opened and user clicks off, close menu
                if (hamburger.className.includes('active-one') && !isMenuClicked) {
                    hamburger.classList.toggle('active-one');
                    menu.style.display = 'none';
                    infoPage.style.filter = 'unset';
                    document.body.style.overflow = 'auto';
                }
            }
        }
    });
});

window.onload = () => {
    // if hash in window location, dont show landing page animation
    const landingPage = document.getElementById('landing-page');
    const infoPage = document.getElementById('info-page');
    const menuIcon = document.getElementById('menu-icon');

    if (window.location.hash) {
        landingPage.style.display = 'none';
        infoPage.style.display = 'block';
        if (menuIcon)
        menuIcon.style.display = 'block';
    } else {
        setTimeout(function() {
            landingPage.style.display = 'none';
            infoPage.style.display = 'block';
            if (menuIcon)
            menuIcon.style.display = 'block';
        }, 3000);
    }
};