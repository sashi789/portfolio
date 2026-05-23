document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    const typed = new Typed('.typing', {
        strings: [
            'SDET',
            'AI Automation Engineer',
            'QA Automation Engineer',
            'LLM & RAG Tester'
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    document.addEventListener('mousedown', function() {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });

    document.addEventListener('mouseup', function() {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Active navigation on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Header scroll effect
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
        }

        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Back to top button click
    const backToTop = document.querySelector('.back-to-top');
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form will still submit to Formspree
            // This just shows a message to the user
            setTimeout(function() {
                alert('Thank you for your message! I will get back to you soon.');
            }, 1000);
        });
    }

    // Add smooth reveal animations
    const revealElements = document.querySelectorAll('.section-title, .about-content, .timeline-item, .project-card, .resume-content, .contact-content');
    
    const revealOnScroll = function() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run on load
    revealOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Skills sphere animation (testing & AI tools)
    const createDataTools = () => {
        const sphere = document.getElementById('dataSphere');
        
        // Clear any existing content first
        sphere.innerHTML = '';
        
        const tools = [
            { icon: 'fab fa-python', name: 'Python / pytest' },
            { icon: 'fab fa-js', name: 'Playwright / TS' },
            { icon: 'fas fa-vial', name: 'Selenium' },
            { icon: 'fas fa-robot', name: 'LLM Testing' },
            { icon: 'fas fa-shield-alt', name: 'AI Guardrails' },
            { icon: 'fas fa-project-diagram', name: 'RAG' },
            { icon: 'fas fa-tasks', name: 'Jira / Zephyr' },
            { icon: 'fas fa-plug', name: 'API Testing' },
            { icon: 'fab fa-aws', name: 'AWS Bedrock' },
            { icon: 'fab fa-microsoft', name: 'Azure' },
            { icon: 'fas fa-database', name: 'SQL / Snowflake' },
            { icon: 'fab fa-docker', name: 'Docker' },
            { icon: 'fab fa-github', name: 'GitHub Actions' },
            { icon: 'fas fa-cloud', name: 'Terraform' },
            { icon: 'fas fa-chart-pie', name: 'Power BI' }
        ];
        
        // Calculate positions in a grid layout
        const columns = 5;
        const rows = Math.ceil(tools.length / columns);
        const cellWidth = sphere.offsetWidth / columns;
        const cellHeight = sphere.offsetHeight / rows;
        
        tools.forEach((tool, index) => {
            // Calculate grid position
            const row = Math.floor(index / columns);
            const col = index % columns;
            
            // Calculate x and y position
            const x = col * cellWidth + (cellWidth / 2) - 30; // 30 is half the tool width
            const y = row * cellHeight + (cellHeight / 2) - 30; // 30 is half the tool height
            
            // Create tool element
            const toolElement = document.createElement('div');
            toolElement.className = 'data-tool';
            toolElement.innerHTML = `<i class="${tool.icon}" title="${tool.name}"></i>`;
            
            // Position in grid
            toolElement.style.left = `${x}px`;
            toolElement.style.top = `${y}px`;
            
            // Add to container
            sphere.appendChild(toolElement);
            
            // Add falling animation with delay based on index
            setTimeout(() => {
                toolElement.style.animation = `fallDown 1s ease forwards`;
                toolElement.style.animationDelay = `${index * 0.1}s`;
                toolElement.style.opacity = '1';
            }, 500); // Start after page load
        });
    };
    
    // Check if about section is visible on load or scroll
    const aboutSection = document.getElementById('about');
    const checkAboutVisibility = () => {
        if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
            
            if (isVisible && !aboutSection.classList.contains('tools-loaded')) {
                createDataTools();
                aboutSection.classList.add('tools-loaded');
            }
        }
    };
    
    // Check on load
    checkAboutVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkAboutVisibility);
    
});