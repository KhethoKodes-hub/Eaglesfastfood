// Scroll reveal animations
const scrollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

// Reveal elements
scrollReveal.reveal('.hero-content', { delay: 300, origin: 'left' });
scrollReveal.reveal('.about-video', { delay: 300, origin: 'left' });
scrollReveal.reveal('.about-text', { delay: 500, origin: 'right' });
scrollReveal.reveal('.menu-item', { interval: 200 });
scrollReveal.reveal('.catering-text', { delay: 300, origin: 'left' });
scrollReveal.reveal('.catering-gallery', { delay: 500, origin: 'right' });
scrollReveal.reveal('.vision-text', { delay: 300, origin: 'left' });
scrollReveal.reveal('.vision-timeline', { delay: 500, origin: 'right' });
scrollReveal.reveal('.contact-form', { delay: 300, origin: 'left' });
scrollReveal.reveal('.contact-info', { delay: 500, origin: 'right' });

// Add scroll event for navbar background
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(29, 53, 87, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Active section highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
});