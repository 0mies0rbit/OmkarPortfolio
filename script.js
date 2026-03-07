// ============================================
// Theme Toggle
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
if (savedTheme === 'light-mode') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.textContent = '🌙';
    }
});

// ============================================
// Active Navigation Link
// ============================================
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and other elements
document.querySelectorAll('.project-card, .research-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Scroll-triggered navbar background
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 217, 255, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 217, 255, 0.1)';
    }
});

// ============================================
// Project Links - Replace with your actual URLs
// ============================================
document.querySelectorAll('.project-card').forEach(card => {
    const links = card.querySelectorAll('.link-btn');
    links.forEach(link => {
        // These will be filled in when you add your projects
        if (link.textContent.includes('GitHub')) {
            link.href = 'https://github.com/yourusername';
        } else {
            link.href = '#projects';
        }
    });
});

// ============================================
// Research Links - Interactive Simulations
// ============================================
document.querySelectorAll('.research-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // You can replace this with actual simulation pages or embeds
        alert('Interactive simulation coming soon! Add your simulation or visualization link here.');
    });
});

// ============================================
// Animate counters (optional)
// ============================================
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;

    const counters = document.querySelectorAll('.research-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 30;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current).toString().padStart(2, '0');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toString().padStart(2, '0');
                countersAnimated = true;
            }
        };

        updateCounter();
    });
}

// Trigger counter animation when research section comes into view
const researchSection = document.querySelector('#research');
if (researchSection) {
    const researchObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                animateCounters();
            }
        });
    });
    researchObserver.observe(researchSection);
}

// ============================================
// Add scroll to top button functionality
// ============================================
window.addEventListener('scroll', () => {
    // You can add a "scroll to top" button here if desired
    if (window.scrollY > 300) {
        // Button would be shown here
    }
});

console.log('Portfolio loaded successfully! 🌌');
