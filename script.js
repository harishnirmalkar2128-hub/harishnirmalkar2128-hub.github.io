// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

if (cursor && follower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    // Hover effect on clickable elements
    document.querySelectorAll('a, button, .btn, .project-card, .skill-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    });
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') 
            ? '☀️ Light Mode' 
            : '🌙 Dark Mode';
    });
}

// Typing Animation - Sirf "MCA Student"
const typingElement = document.getElementById('typing');
const words = ['MCA Student'];  // Sirf ek word rakha
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (!typingElement) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Sirf ek word hai isliye wordIndex reset ki zaroorat nahi
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

if (typingElement) {
    type();
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Active link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Glitch effect for name
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    glitchText.setAttribute('data-text', glitchText.textContent);
}

// Skills Data
const skillsData = [
    // Languages
    { name: 'Python', icon: '🐍', level: 85, category: 'language' },
    { name: 'JavaScript', icon: '⚡', level: 60, category: 'language' },
    { name: 'HTML5', icon: '🌐', level: 75, category: 'language' },
    { name: 'CSS3', icon: '🎨', level: 70, category: 'language' },
    
    // Libraries
    { name: 'Tkinter', icon: '🖼️', level: 80, category: 'library' },
    { name: 'PyPDF2', icon: '📄', level: 75, category: 'library' },
    { name: 'Matplotlib', icon: '📊', level: 65, category: 'library' },
    { name: 'SpeechRecognition', icon: '🎤', level: 70, category: 'library' },
    { name: 'Pillow', icon: '🖼️', level: 70, category: 'library' },
    { name: 'CustomTkinter', icon: '🎯', level: 75, category: 'library' },
    
    // Tools
    { name: 'Git', icon: '📦', level: 70, category: 'tool' },
    { name: 'VS Code', icon: '💻', level: 85, category: 'tool' },
    { name: 'MySQL', icon: '🗄️', level: 65, category: 'tool' },
    { name: 'GitHub', icon: '🐙', level: 75, category: 'tool' },
    { name: 'JSON', icon: '📋', level: 70, category: 'tool' }
];

// Projects Data
const projectsData = [
    {
        icon: '🧮',
        title: 'Modern Calculator',
        description: 'GUI calculator with dark mode, keyboard support, and history tracking.',
        tech: ['Python', 'Tkinter'],
        demo: '#',
        code: '#'
    },
    {
        icon: '📚',
        title: 'PDF Master Pro',
        description: 'All-in-one PDF tool: merge, split, compress, and password protect.',
        tech: ['Python', 'PyPDF2', 'Pillow'],
        demo: '#',
        code: '#'
    },
    {
        icon: '🎤',
        title: 'Voice to Text',
        description: 'Real-time speech recognition with Hindi/English support.',
        tech: ['Python', 'SpeechRecognition'],
        demo: '#',
        code: '#'
    },
    {
        icon: '🔐',
        title: 'Password Generator',
        description: 'Secure password generator with strength meter and history.',
        tech: ['Python', 'CustomTkinter'],
        demo: '#',
        code: '#'
    },
    {
        icon: '🏦',
        title: 'Bank System',
        description: 'Bank management system with account creation and transactions.',
        tech: ['Python', 'JSON'],
        demo: '#',
        code: '#'
    },
    {
        icon: '📱',
        title: 'Contact Book',
        description: 'Digital contact book with search, update, and backup features.',
        tech: ['Python', 'JSON'],
        demo: '#',
        code: '#'
    }
];

// Load Skills
const skillsGrid = document.querySelector('.skills-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function loadSkills(category = 'all') {
    if (!skillsGrid) return;
    
    const filtered = category === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === category);
    
    skillsGrid.innerHTML = filtered.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
            <span class="skill-percent">${skill.level}%</span>
        </div>
    `).join('');
}

// Load Projects
const projectsGrid = document.querySelector('.projects-grid');

function loadProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-icon">${project.icon}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demo}" class="project-link" target="_blank">Live Demo →</a>
                <a href="${project.code}" class="project-link" target="_blank">GitHub →</a>
            </div>
        </div>
    `).join('');
}

// Initialize skills and projects
loadSkills('all');
loadProjects();

// Skills filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        loadSkills(filter);
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for reaching out! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
// Certificate Data
const certificatesData = [
    {
        title: "Python Programming Fundamentals",
        issuer: "Coursera",
        image: "assets/certificates/python-programming.jpeg",
        date: "March 2025",
        tags: ["Python", "Programming", "Coursera"],
        description: "A comprehensive introduction to Python programming, covering syntax, data structures, and problem-solving.",
        verify: "https://coursera.org/verify/python-programming"
    },
    {
        title: "Linux Foundations",
        issuer: "Coursera",
        image: "assets/certificates/linux-foundations.jpeg",
        date: "February 2025",
        tags: ["Linux", "Operating System", "Coursera"],
        description: "Fundamentals of Linux OS, command line, and system management.",
        verify: ""
    },
    {
        title: "Foundations of AI and Machine Learning",
        issuer: "Coursera",
        image: "assets/certificates/ai-ml-foundations.jpeg",
        date: "January 2025",
        tags: ["AI", "Machine Learning", "Coursera"],
        description: "Core concepts of artificial intelligence and machine learning, including supervised and unsupervised learning.",
        verify: ""
    },
    {
        title: "Database Structures and Management with MySQL",
        issuer: "Coursera",
        image: "assets/certificates/mysql-database.jpeg",
        date: "December 2024",
        tags: ["MySQL", "Database", "Coursera"],
        description: "Relational database design, SQL queries, and MySQL database management.",
        verify: ""
    }
];

// Load Certificates

const certificatesGrid = document.getElementById('certificatesGrid');

function renderCertificates() {
    if (!certificatesGrid) return;
    certificatesGrid.innerHTML = certificatesData.map((cert, idx) => {
        const imgPath = cert.image.endsWith('.jpg') ? cert.image : cert.image.replace('.jpg', '.jpeg');
        return `
        <div class="certificate-card" tabindex="0" role="button" aria-label="Preview certificate: ${cert.title}" data-idx="${idx}">
            <div class="certificate-image">
                <img src="${imgPath}" alt="${cert.title}" loading="lazy" onerror="this.onerror=null; this.src='${cert.image.replace('.jpeg', '.jpg')}'">
            </div>
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p>${cert.issuer}</p>
                <div class="certificate-tags-row">${cert.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}</div>
                <span class="certificate-date">📅 ${cert.date}</span>
            </div>
        </div>
    `}).join('');
    // Add click and keyboard accessibility for cards
    certificatesGrid.querySelectorAll('.certificate-card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset.idx));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                openModal(card.dataset.idx);
            }
        });
        // Scroll reveal animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + Math.random()*200);
    });
}

function loadCertificates() {
    renderCertificates();
    console.log("Certificates loaded:", certificatesData.length);
}

// Call function when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCertificates();
    console.log("Page loaded, certificates should appear...");
});

// Modal Functions
const modal = document.getElementById('certModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalIssuer = document.getElementById('modalIssuer');
const modalDownload = document.getElementById('modalDownload');
const closeBtn = document.querySelector('.modal-close');

function openModal(index) {
    const cert = certificatesData[index];
    modalImage.src = cert.image;
    modalImage.alt = cert.title + ' certificate';
    modalTitle.textContent = cert.title;
    modalIssuer.textContent = cert.issuer;
    // Tags
    const modalTags = document.getElementById('modalTags');
    if (modalTags) {
        modalTags.innerHTML = cert.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('');
    }
    // Description
    const modalDescription = document.getElementById('modalDescription');
    if (modalDescription) {
        modalDescription.textContent = cert.description || '';
    }
    // Download
    const ext = cert.image.split('.').pop();
    modalDownload.href = cert.image;
    modalDownload.setAttribute('download', `${cert.title.replace(/\s+/g, '_')}.${ext}`);
    // Full view
    const modalFullView = document.getElementById('modalFullView');
    if (modalFullView) {
        modalFullView.href = cert.image;
    }
    // Verify
    const modalVerify = document.getElementById('modalVerify');
    if (modalVerify) {
        if (cert.verify) {
            modalVerify.href = cert.verify;
            modalVerify.style.display = '';
        } else {
            modalVerify.style.display = 'none';
        }
    }
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus close button for accessibility
    if (closeBtn) closeBtn.focus();
}

function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Close button
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Load certificates when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadCertificates();
});

