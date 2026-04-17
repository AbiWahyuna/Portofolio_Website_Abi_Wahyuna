// ===== PROJECT DATA =====
// Edit bagian ini untuk mengisi detail setiap project kamu
const projectsData = {
    zippoint: {
        title: "ZipPoint Star",
        tag: "UNITY 2D GAME",
        category: "Game Development",
        year: "2025",
        role: "Game Developer",
        desc: "ZipPoint Star adalah puzzle game 2D yang dikembangkan menggunakan Unity Engine. Player harus menyelesaikan berbagai level dengan cara melontarkan karakter ke titik-titik tertentu menggunakan mekanik zip point yang unik dan inovatif.",
        img: "images/project_2.jpg",
        screenshots: [
            "images/project_2.jpg",
            "images/project_4.jpg",
            "images/project_5.jpg"
        ],
        tech: ["Unity", "C#", "2D Physics", "Aseprite"],
        link: "projects/game/project_detail_ZipPoint.html",
        hasDemo: true
    },
    wanderly: {
        title: "Wanderly",
        tag: "UI/UX DESIGN",
        category: "UI/UX Design",
        year: "2025",
        role: "UI/UX Designer",
        desc: "Wanderly adalah konsep desain UI/UX untuk platform travel modern. Fokus pada pengalaman pengguna yang intuitif dengan visual yang bersih, membantu traveler merencanakan perjalanan dengan mudah dan menyenangkan.",
        img: "images/project_1.jpg",
        screenshots: [
            "images/project_1.jpg",
            "images/project_3.jpg"
        ],
        tech: ["Figma", "Prototyping", "User Research", "Design System"],
        link: "#",
        hasDemo: false
    },
    magictype: {
        title: "MagicType",
        tag: "UNITY 2D GAME",
        category: "Game Development",
        year: "2024",
        role: "Game Developer",
        desc: "MagicType adalah isometric game 2D dengan elemen typing magis. Pemain memanggil mantra dengan mengetik kata-kata yang muncul di layar, mengalahkan musuh dan menyelesaikan puzzle dengan kecepatan mengetik mereka.",
        img: "images/project_4.jpg",
        screenshots: [
            "images/project_4.jpg",
            "images/project_5.jpg"
        ],
        tech: ["Unity", "C#", "Isometric Design", "Audio Integration"],
        link: "#",
        hasDemo: false
    },
    seapedia: {
        title: "Sea Pedia",
        tag: "UI/UX DESIGN",
        category: "UI/UX Design",
        year: "2025",
        role: "UI/UX Designer",
        desc: "Sea Pedia adalah platform edukasi interaktif tentang kehidupan laut. Dirancang untuk membuat informasi kelautan lebih mudah diakses dan menarik bagi semua kalangan, dengan pendekatan visual yang immersif dan informatif.",
        img: "images/project_7.jpg",
        screenshots: [
            "images/project_7.jpg"
        ],
        tech: ["Figma", "Illustration", "Motion Design", "Prototyping"],
        link: "#",
        hasDemo: false
    },
    magictype2: {
        title: "MagicType V2",
        tag: "UNITY 2D GAME",
        category: "Game Development",
        year: "2025",
        role: "Game Developer",
        desc: "Versi kedua dari MagicType dengan tambahan konten level baru, sistem skor yang lebih baik, dan visual yang diperbarui. Menghadirkan pengalaman bermain yang lebih halus dan mechanic typing yang lebih responsif.",
        img: "images/project_5.jpg",
        screenshots: [
            "images/project_5.jpg",
            "images/project_4.jpg"
        ],
        tech: ["Unity", "C#", "Shader Graph", "DOTween"],
        link: "#",
        hasDemo: false
    },
    dunianara: {
        title: "Dunia Nara",
        tag: "UNITY 2D GAME",
        category: "Game Development",
        year: "2024",
        role: "Game Developer & Designer",
        desc: "Dunia Nara adalah game platformer 2D dengan cerita petualangan yang kaya. Menampilkan berbagai mini puzzle unik di setiap level, visual hand-drawn yang memukau, dan soundtrack yang menghidupkan dunia Nara.",
        img: "images/project_6.jpg",
        screenshots: [
            "images/project_6.jpg"
        ],
        tech: ["Unity", "C#", "2D Animation", "Tilemaps"],
        link: "#",
        hasDemo: false
    },
    triploka: {
        title: "TripLoka",
        tag: "UI/UX DESIGN",
        category: "UI/UX Design",
        year: "2025",
        role: "UI/UX Designer",
        desc: "TripLoka adalah antarmuka panduan perjalanan dan pemesanan yang dirancang untuk memudahkan wisatawan lokal menemukan destinasi tersembunyi di Indonesia. Menggabungkan tampilan peta interaktif dengan sistem booking yang seamless.",
        img: "images/project_3.jpg",
        screenshots: [
            "images/project_3.jpg",
            "images/project_1.jpg"
        ],
        tech: ["Figma", "Maps Integration", "Booking Flow", "Design System"],
        link: "#",
        hasDemo: false
    }
};


// ===== ENHANCED LOADER =====
let loadProgress = 0;
const loaderPercentage = document.getElementById('loaderPercentage');

const loaderParticlesEl = document.getElementById('loaderParticles');
for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'loader-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (2 + Math.random() * 2) + 's';
    loaderParticlesEl.appendChild(particle);
}

const loadInterval = setInterval(() => {
    loadProgress += Math.random() * 15;
    if (loadProgress >= 100) {
        loadProgress = 100;
        clearInterval(loadInterval);
    }
    if (loaderPercentage) loaderPercentage.textContent = Math.floor(loadProgress) + '%';
}, 100);

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) loader.classList.add('hidden');
    }, 2500);
});


// ===== GENERATE STARS =====
function generateStars(layer, count, sizeRange) {
    const container = document.getElementById(`starsLayer${layer}`);
    if (!container) return;
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
    const container = document.getElementById('shootingStars');
    if (container) container.appendChild(shootingStar);
    setTimeout(() => shootingStar.remove(), 5000);
}

setInterval(createShootingStar, 5000);
for (let i = 0; i < 2; i++) {
    setTimeout(createShootingStar, i * 2000);
}


// ===== SCROLL PROGRESS =====
window.addEventListener('scroll', () => {
    const scrollBar = document.getElementById('scrollProgressBar');
    if (!scrollBar) return;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY / scrollHeight;
    scrollBar.style.transform = `scaleX(${scrolled})`;
});


// ===== STAR PARALLAX =====
let lastScrollY = 0;
let ticking = false;

function updateParallax(scrollY) {
    const layer1 = document.getElementById('starsLayer1');
    if (layer1) layer1.style.transform = `translateY(${scrollY * 0.2}px)`;
    const layer2 = document.getElementById('starsLayer2');
    if (layer2) layer2.style.transform = `translateY(${scrollY * 0.4}px)`;
    const layer3 = document.getElementById('starsLayer3');
    if (layer3) layer3.style.transform = `translateY(${scrollY * 0.6}px)`;

    document.querySelectorAll('.shape').forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translateY(${scrollY * speed}px)`;
    });

    document.querySelectorAll('.gradient-orb').forEach((orb, index) => {
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

function updateHoverElements() {
    const hoverElements = document.querySelectorAll('a, button, .bento-item, .skill-card, .p-card, .stat-box, .timeline-content, .image-wrapper, .filter-btn, .modal-screenshot-thumb');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'));
    });
}
updateHoverElements();


// ===== NAVBAR =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (nav) {
        if (window.scrollY > 100) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});


// ===== PARALLAX CARDS =====
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
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});


// ===== INTERSECTION OBSERVER =====
const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' };

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
                    setTimeout(() => { progress.style.width = width; }, 100);
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
        bentoItems.forEach((other, i) => {
            if (i !== index && !other.classList.contains('hidden')) {
                other.style.opacity = '0.5';
                other.style.filter = 'blur(2px)';
            }
        });
    });
    item.addEventListener('mouseleave', () => {
        bentoItems.forEach(other => {
            other.style.opacity = '1';
            other.style.filter = 'blur(0)';
        });
    });
});


// ===== 3D TILT FOR SKILL CARDS =====
document.querySelectorAll('.skill-card').forEach(card => {
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


// ===== CONTACT FORM =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully! 🚀');
        e.target.reset();
    });
}


// ===== GLITCH ON SCROLL =====
let glitchTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(glitchTimeout);
    glitchTimeout = setTimeout(() => {
        const h1 = document.querySelector('.hero h1');
        if (h1) {
            h1.style.animation = 'none';
            setTimeout(() => { h1.style.animation = 'glitchText 5s infinite'; }, 10);
        }
    }, 100);
});


// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.submit-btn').forEach(button => {
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


// ===== PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const allBentoItems = document.querySelectorAll('.bento-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        allBentoItems.forEach(item => {
            const category = item.dataset.category;
            const matches = filter === 'all' || category === filter;

            if (matches) {
                item.classList.remove('hidden');
                // Re-observe untuk animasi masuk kembali
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(30px) scale(0.95)';
                    requestAnimationFrame(() => {
                        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0) scale(1)';
                    });
                }, 10);
            } else {
                item.classList.add('hidden');
            }
        });
    });
});


// ===== PROJECT MODAL =====
const projectModal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(projectKey) {
    const data = projectsData[projectKey];
    if (!data || !projectModal) return;

    // Isi konten modal
    const modalImg = document.getElementById('modalImg');
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalMeta = document.getElementById('modalMeta');
    const modalTech = document.getElementById('modalTech');
    const modalActions = document.getElementById('modalActions');
    const modalScreenshots = document.getElementById('modalScreenshots');

    if (modalImg) { modalImg.src = data.img; modalImg.alt = data.title; }
    if (modalTag) modalTag.textContent = data.tag;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.desc;

    // Meta info
    if (modalMeta) {
        modalMeta.innerHTML = `
            <div class="modal-meta-item">
                <div class="modal-meta-label">Category</div>
                <div class="modal-meta-value">${data.category}</div>
            </div>
            <div class="modal-meta-item">
                <div class="modal-meta-label">Year</div>
                <div class="modal-meta-value">${data.year}</div>
            </div>
            <div class="modal-meta-item">
                <div class="modal-meta-label">My Role</div>
                <div class="modal-meta-value">${data.role}</div>
            </div>
            <div class="modal-meta-item">
                <div class="modal-meta-label">Status</div>
                <div class="modal-meta-value">${data.hasDemo ? '✅ Live' : '🔒 Private'}</div>
            </div>
        `;
    }

    // Tech stack
    if (modalTech) {
        modalTech.innerHTML = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    }

    // Buttons
    if (modalActions) {
        let btns = '';
        if (data.hasDemo && data.link !== '#') {
            btns += `<a href="${data.link}" class="modal-btn modal-btn-primary">View Project →</a>`;
        }
        btns += `<button class="modal-btn modal-btn-secondary" onclick="closeModal()">Close ✕</button>`;
        modalActions.innerHTML = btns;

        // Re-apply cursor none on new buttons
        modalActions.querySelectorAll('button, a').forEach(el => {
            el.style.cursor = 'none';
            el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'));
        });
    }

    // Screenshots thumbnail
    if (modalScreenshots) {
        if (data.screenshots && data.screenshots.length > 1) {
            modalScreenshots.innerHTML = data.screenshots.map((src, i) => `
                <div class="modal-screenshot-thumb ${i === 0 ? 'active' : ''}" onclick="switchModalImage('${src}', this)">
                    <img src="${src}" alt="Screenshot ${i + 1}">
                </div>
            `).join('');
        } else {
            modalScreenshots.innerHTML = '';
        }
    }

    // Tampilkan modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Update hover elements untuk elemen baru di modal
    updateHoverElements();
}

function switchModalImage(src, thumbEl) {
    const modalImg = document.getElementById('modalImg');
    if (modalImg) {
        modalImg.style.opacity = '0';
        setTimeout(() => {
            modalImg.src = src;
            modalImg.style.opacity = '1';
        }, 200);
    }
    document.querySelectorAll('.modal-screenshot-thumb').forEach(t => t.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
}

function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Pasang event ke semua bento-item
document.querySelectorAll('.bento-item[data-project]').forEach(item => {
    item.addEventListener('click', () => {
        const key = item.dataset.project;
        openModal(key);
    });
});

// Tutup modal
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
if (modalClose) modalClose.addEventListener('click', closeModal);

// Tutup dengan tombol Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
        closeModal();
    }
});

// Expose switchModalImage ke global (dipanggil dari onclick HTML)
window.switchModalImage = switchModalImage;
window.closeModal = closeModal;