// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Play button functionality
    const playButtons = document.querySelectorAll('.play-button, .play-icon, .album-play, .video-play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Here you would typically integrate with a music player
            console.log('Play button clicked');
        });
    });

    // Newsletter subscription
    const subscribeButton = document.querySelector('.subscribe-button');
    const emailInput = document.querySelector('.email-input');
    
    if (subscribeButton && emailInput) {
        subscribeButton.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Here you would typically send the email to your backend
                console.log('Email subscription:', email);
                emailInput.value = '';
            } else {
                console.log('Invalid email');
            }
        });
        
        // Allow Enter key to submit
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeButton.click();
            }
        });
    }

    // Ticket buttons
    const ticketButtons = document.querySelectorAll('.tickets-button');
    ticketButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Here you would typically redirect to a ticket vendor
            console.log('Ticket button clicked');
        });
    });

    // Channel button - allow normal navigation
    const channelButton = document.querySelector('.channel-button');
    if (channelButton) {
        // Remove click handler to allow normal link behavior
        // The link will work normally with target="_blank"
    }

    // Streaming platform icons
    const streamingIcons = document.querySelectorAll('.streaming-icons i');
    streamingIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const platform = this.classList.contains('fa-spotify') ? 'Spotify' :
                           this.classList.contains('fa-apple') ? 'Apple Music' :
                           this.classList.contains('fa-youtube') ? 'YouTube' : 'Plataforma';
            
            console.log(`Opening ${platform}...`);
        });
    });

    // Social media links - allow normal navigation
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        // Remove any existing click handlers and let the links work normally
        link.addEventListener('click', function(e) {
            // Allow normal link behavior - no preventDefault needed
            // Links will open in new tab due to target="_blank"
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(19, 67, 130, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(19, 67, 130, 0.95)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.album-card, .tour-date, .track');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.album-card, .tour-date');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
