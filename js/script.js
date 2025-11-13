// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const mobileHeader = document.querySelector('.mobile-header');
    
    if (window.scrollY > 100) {
        header.style.display = 'none';
        mobileHeader.style.transform = 'translateY(0)';
    } else {
        header.style.display = 'block';
        mobileHeader.style.transform = 'translateY(-100%)';
    }
});

// Tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado pelo seu contato! Retornaremos em breve.');
            contactForm.reset();
        });
    }
    
    // Intersection Observer for animations
    const animatedElements = document.querySelectorAll('.section-header, .definition-box, .component-item, .comparison-item, .stat-highlight, .benefit-item, .tab-btn, .tab-content, .application-visual-item, .advantages-box, .esg-item, .ecosystem-diagram, .eco-component, .use-case-item, .case-study-item, .timeline-item, .roi-chart, .roi-details, .next-steps-item, .conclusion-content, .vision-box, .cta-box, .contact-item, .contact-form');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;
    
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
    }
});

// Fade in animations on scroll
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkFade);
    checkFade();
});

// Fix para tabs funcionarem
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Esconder todos
            tabContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Mostrar clicado
            this.classList.add('active');
            const targetId = this.getAttribute('data-tab');
            const target = document.getElementById(targetId);
            if (target) {
                target.style.display = 'block';
                target.classList.add('active');
            }
        });
    });
    
    // Mostrar primeira tab
    const firstTab = document.querySelector('.tab-content.active');
    if (firstTab) firstTab.style.display = 'block';
});
