document.addEventListener('DOMContentLoaded', function () {

    // Typed.js for the hero section
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Data Scientist', 'AI Automation Engineer', 'Data Engineer', 'Problem Solver'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            smartBackspace: true
        });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
