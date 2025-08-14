        // Typing animation
        const texts = [
            "Java Developer",
            "Spring Boot Developer", 
            "Banking Systems Developer",
            "Microservices Architecture",
            "Full Stack Engineer"
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typedTextElement = document.getElementById('typed-text');
        
        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = 100;
            
            if (isDeleting) {
                typeSpeed = 50;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Wait at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; // Wait before next text
            }
            
            setTimeout(typeText, typeSpeed);
        }
        
        typeText();
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
        
        // Smooth scrolling for navigation links
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
        
        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 23, 42, 0.98)';
            } else {
                header.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        });

        // Add stagger effect to experience cards
        const cards = document.querySelectorAll('.experience-card, .skill-category');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Add parallax effect to hero and floating code
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const floatingCodes = document.querySelectorAll('.floating-code');
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            
            // Parallax effect for floating code elements
            floatingCodes.forEach((code, index) => {
                const speed = 0.1 + (index * 0.02);
                code.style.transform += ` translateY(${scrolled * speed}px)`;
            });
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });