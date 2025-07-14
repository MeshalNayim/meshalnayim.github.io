document.addEventListener('DOMContentLoaded', function () {

    // Typed.js for the hero section
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Data Scientist', 'AI Engineer', 'Problem Solver', 'Cloud Specialist'],
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
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade-in animation on scroll
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
