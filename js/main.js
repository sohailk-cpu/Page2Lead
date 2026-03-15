// ========================================
// Page2Lead - Master JavaScript File
// Handles ALL pages - Mobile menu, Forms, API
// ========================================

// ---------- Mobile Menu Toggle ----------
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu button to navbar if not exists
    const navbar = document.querySelector('.navbar .container');
    if (navbar && !document.querySelector('.mobile-menu-btn')) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute('aria-label', 'Toggle menu');
        navbar.appendChild(menuBtn);
        
        const navLinks = document.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            menuBtn.innerHTML = navLinks.classList.contains('show') ? '✕' : '☰';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target) && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                menuBtn.innerHTML = '☰';
            }
        });
        
        // Close menu when window resizes to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('show');
                menuBtn.innerHTML = '☰';
            }
        });
    }
});

// ---------- Lead Form Handler ----------
class LeadForm {
    constructor(formElement) {
        this.form = formElement;
        this.messageDiv = this.form.querySelector('.form-message') || this.createMessageDiv();
        this.apiUrl = this.getApiUrl();
        this.init();
    }
    
    createMessageDiv() {
        const div = document.createElement('div');
        div.className = 'form-message';
        this.form.appendChild(div);
        return div;
    }
    
    getApiUrl() {
        // Use relative URL for production, fallback to localhost for development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return 'http://localhost:5000/api/lead';
        }
        return '/api/lead'; // Production - relative path
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    validateForm(data) {
        if (!data.name || data.name.trim().length < 2) {
            throw new Error('Please enter your full name');
        }
        if (!data.phone || data.phone.trim().length < 10) {
            throw new Error('Please enter a valid 10-digit phone number');
        }
        if (!data.service) {
            throw new Error('Please select a service');
        }
        return true;
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Add page info
        data.page = document.title || window.location.pathname;
        data.timestamp = new Date().toISOString();
        
        // Validate
        try {
            this.validateForm(data);
        } catch (error) {
            this.showMessage(error.message, 'error');
            return;
        }
        
        // Show loading
        this.showMessage('⏳ Processing your request...', 'info');
        
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                this.showMessage('✅ Thank you! Service providers near you will call within 15 minutes.', 'success');
                this.form.reset();
            } else {
                throw new Error(result.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('❌ ' + error.message + '. Please try again or call us directly.', 'error');
        }
    }
    
    showMessage(text, type) {
        this.messageDiv.textContent = text;
        this.messageDiv.className = 'form-message';
        
        switch(type) {
            case 'success':
                this.messageDiv.style.color = '#16a34a';
                break;
            case 'error':
                this.messageDiv.style.color = '#dc2626';
                break;
            case 'info':
                this.messageDiv.style.color = '#2563eb';
                break;
        }
        
        // Auto hide after 5 seconds for success messages
        if (type === 'success') {
            setTimeout(() => {
                this.messageDiv.textContent = '';
            }, 5000);
        }
    }
}

// ---------- Initialize All Forms ----------
document.addEventListener('DOMContentLoaded', function() {
    // Find all lead forms on the page
    const forms = document.querySelectorAll('.lead-form form');
    forms.forEach(form => {
        new LeadForm(form);
    });
});

// ---------- Smooth Scroll for Anchor Links ----------
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                    const menuBtn = document.querySelector('.mobile-menu-btn');
                    if (menuBtn) menuBtn.innerHTML = '☰';
                }
            }
        });
    });
});

// ---------- Lazy Loading Images (if any) ----------
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ---------- Track Outbound Links (for analytics) ----------
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname) {
        // Outbound link - can send to analytics
        console.log('Outbound link:', link.href);
    }
});

// ---------- Page Load Performance ----------
window.addEventListener('load', function() {
    // Remove any loading classes
    document.body.classList.add('loaded');
    
    // Log performance (optional)
    if (window.performance) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
});