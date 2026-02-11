// ===== ENHANCED LOADER =====
let loadProgress = 0;
const loaderPercentage = document.getElementById('loaderPercentage');

// Generate loader particles
const loaderParticles = document.getElementById('loaderParticles');
for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'loader-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (2 + Math.random() * 2) + 's';
    loaderParticles.appendChild(particle);
}

// Simulate loading progress
const loadInterval = setInterval(() => {
    loadProgress += Math.random() * 15;
    if (loadProgress >= 100) {
        loadProgress = 100;
        clearInterval(loadInterval);
    }
    loaderPercentage.textContent = Math.floor(loadProgress) + '%';
}, 100);

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 2500);
});

// ===== GENERATE STARS WITH LAYERS (REDUCED COUNT) =====
function generateStars(layer, count, sizeRange) {
    const container = document.getElementById(`starsLayer${layer}`);
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * sizeRange[1] + sizeRange[0];
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(star);
    }
}

// Generate different layers with reduced counts
generateStars(1, 40, [1, 2]);
generateStars(2, 20, [2, 3]);
generateStars(3, 10, [2, 4]);

// ===== SHOOTING STARS =====
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = Math.random() * 50 + '%';
    shootingStar.style.top = Math.random() * 50 + '%';
    shootingStar.style.animationDelay = Math.random() * 2 + 's';
    shootingStar.style.animationDuration = (2 + Math.random()) + 's';
    document.getElementById('shootingStars').appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 5000);
}

// Create shooting stars periodically
setInterval(createShootingStar, 5000);
for (let i = 0; i < 2; i++) {
    setTimeout(createShootingStar, i * 2000);
}

// ===== SCROLL PROGRESS BAR =====
window.addEventListener('scroll', () => {
    const scrollBar = document.getElementById('scrollProgressBar');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY / scrollHeight;
    scrollBar.style.transform = `scaleX(${scrolled})`;
});

// ===== ENHANCED PARALLAX FOR STARS =====
let lastScrollY = 0;
let ticking = false;

function updateParallax(scrollY) {
    // Layer 1 - slowest
    const layer1 = document.getElementById('starsLayer1');
    if (layer1) layer1.style.transform = `translateY(${scrollY * 0.2}px)`;

    // Layer 2 - medium speed
    const layer2 = document.getElementById('starsLayer2');
    if (layer2) layer2.style.transform = `translateY(${scrollY * 0.4}px)`;

    // Layer 3 - fastest
    const layer3 = document.getElementById('starsLayer3');
    if (layer3) layer3.style.transform = `translateY(${scrollY * 0.6}px)`;

    // Parallax for shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // Parallax for gradient orbs
    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.3;
        orb.style.transform = `translate(${scrollY * speed * 0.1}px, ${scrollY * speed}px)`;
    });
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax(lastScrollY);
            ticking = false;
        });
        ticking = true;
    }
});

// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor');
const cursorGlow = document.querySelector('.cursor-glow');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;

    if (cursor) cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    if (cursorGlow) cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .bento-item, .skill-card, .p-card, .stat-box, .timeline-content, .image-wrapper');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'));
});

// ===== NAVBAR SCROLL EFFECT =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== PARALLAX EFFECT FOR CARDS =====
const cards = document.querySelectorAll('.p-card');
document.addEventListener('mousemove', (e) => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        if (e.target.closest('.p-card') === card) {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px)`;
        } else {
            card.style.transform = '';
        }
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.classList.contains('skill-card')) {
                const progress = entry.target.querySelector('.skill-progress');
                if (progress) {
                    const width = progress.style.width;
                    progress.style.width = '0';
                    setTimeout(() => {
                        progress.style.width = width;
                    }, 100);
                }
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.p-card, .bento-item, .skill-card, .section-header, .stat-box, .timeline-content, .about-me-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// ===== BENTO GRID HOVER EFFECT =====
const bentoItems = document.querySelectorAll('.bento-item');
bentoItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        bentoItems.forEach((otherItem, otherIndex) => {
            if (otherIndex !== index) {
                otherItem.style.opacity = '0.5';
                otherItem.style.filter = 'blur(2px)';
            }
        });
    });
    
    item.addEventListener('mouseleave', () => {
        bentoItems.forEach(otherItem => {
            otherItem.style.opacity = '1';
            otherItem.style.filter = 'blur(0)';
        });
    });
});

// ===== 3D TILT FOR SKILL CARDS =====
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 5;
        const rotateY = (centerX - x) / 5;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== FORM SUBMISSION =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully! 🚀');
        e.target.reset();
    });
}

// ===== GLITCH EFFECT ON SCROLL =====
let glitchTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(glitchTimeout);
    glitchTimeout = setTimeout(() => {
        const h1 = document.querySelector('.hero h1');
        if (h1) {
            h1.style.animation = 'none';
            setTimeout(() => {
                h1.style.animation = 'glitchText 5s infinite';
            }, 10);
        }
    }, 100);
});

// ===== MAGNETIC EFFECT FOR BUTTONS =====
const buttons = document.querySelectorAll('.submit-btn');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});