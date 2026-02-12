// ===================================
// SMOOTH SCROLL & NAVIGATION
// ===================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Smooth scroll navigation and active link highlighting
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
        
        // Get target section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-container')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===================================
// BUTTON INTERACTIONS
// ===================================

// View Projects Button
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Download Resume Button
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
        // Create a placeholder alert - Replace this path with your actual resume PDF
        alert('Resume download feature:\n\n1. Place your resume PDF in the assets folder\n2. Replace the path in the JavaScript\n3. Uncomment the window.location.href line below');
        
        // Uncomment this line and replace with your actual resume path:
        // window.location.href = 'assets/resume/Mohanapriya_S_Resume.pdf';
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

// Function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Apply fade-in animations on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Trigger animations on scroll and on page load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initial animation trigger
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// ===================================
// SMOOTH SCROLL BEHAVIOR
// ===================================

// Ensure smooth scroll on all browsers
if (!CSS || !CSS.supports('scroll-behavior', 'smooth')) {
    // Fallback for browsers that don't support smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'auto' });
                }
            }
        });
    });
}

// ===================================
// PARALLAX EFFECT (Optional)
// ===================================

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

// ===================================
// TYPING ANIMATION (Optional enhancement)
// ===================================

// Function to create typing animation for the hero title
function typeAnimation(element, text, speed = 50) {
    let index = 0;
    element.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing animation to hero subtitle on page load
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        // Uncomment the line below to enable typing animation
        // typeAnimation(heroSubtitle, originalText, 100);
    }
});

// ===================================
// PROJECT LINK HOVER EFFECTS
// ===================================

const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ===================================
// CONTACT LINK INTERACTIONS
// ===================================

const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (!this.href.includes('mailto:') && !this.href.includes('tel:')) {
            e.preventDefault();
            window.open(this.href, '_blank');
        }
    });
});

// ===================================
// FORM VALIDATION FOR FUTURE USE
// ===================================

// This is a placeholder function for future contact form implementation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// ===================================
// RESPONSIVE IMAGE LOADING
// ===================================

// Lazy load images for better performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// SCROLL TO TOP BUTTON (Optional)
// ===================================

// Function to show/hide scroll to top button
function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
}

window.addEventListener('scroll', toggleScrollToTopButton);

// ===================================
// THEME TOGGLE (Optional - for dark mode)
// ===================================

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Optional: Add theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
}

// ===================================
// CONSOLE MESSAGE (Fun!)
// ===================================

console.log('%cWelcome to Mohanapriya S Portfolio!', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%cFeeling curious? Check out the code!', 'color: #2ecc71; font-size: 14px;');
console.log('%cGitHub: https://github.com/priyak-2004', 'color: #e74c3c; font-size: 12px;');
