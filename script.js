// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.hero-parallax');
    let scrollPosition = window.pageYOffset;
    if (parallax) {
        parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Intersection Observer for Scroll Animations
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add a small delay for staggered effect
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100); 
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(el => {
    observer.observe(el);
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Star Rating System
const stars = document.querySelectorAll('.star-btn');
const ratingInput = document.getElementById('ratingValue');

if (stars.length > 0) {
    // Initial active state for 5 stars
    stars.forEach(s => s.classList.add('active'));

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            ratingInput.value = rating;
            
            stars.forEach(s => {
                if (s.getAttribute('data-rating') <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('mouseenter', () => {
            const rating = star.getAttribute('data-rating');
            stars.forEach(s => {
                if (s.getAttribute('data-rating') <= rating) {
                    s.classList.add('hover');
                }
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
}

// Review Form Submission (Mock)
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = reviewForm.querySelector('.submit-btn');
        btn.innerText = 'Posting...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your feedback! Your review has been submitted for moderation.');
            btn.innerText = 'Post Review';
            btn.disabled = false;
            reviewForm.reset();
            // Reset stars to 5
            stars.forEach(s => s.classList.add('active'));
            ratingInput.value = 5;
        }, 1500);
    });
}

// Form Submission (Mock)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.submit-btn');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! Our team will contact you shortly.');
            btn.innerText = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 2000);
    });
}
