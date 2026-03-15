// Shared lead form functionality
class LeadForm {
    constructor(formId, messageId) {
        this.form = document.getElementById(formId);
        this.messageDiv = document.getElementById(messageId);
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        data.timestamp = new Date().toISOString();
        
        this.messageDiv.style.color = '#2563eb';
        this.messageDiv.innerHTML = '⏳ Sending your request...';
        
        try {
            const response = await fetch('https://api.page2lead.in/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                this.messageDiv.style.color = '#16a34a';
                this.messageDiv.innerHTML = '✅ Thank you! Technicians will call within 15 minutes.';
                this.form.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            this.messageDiv.style.color = '#dc2626';
            this.messageDiv.innerHTML = '❌ Error. Please try again or call us.';
        }
    }
}

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('leadCaptureForm')) {
        new LeadForm('leadCaptureForm', 'formMessage');
    }
    if (document.getElementById('secondLeadForm')) {
        new LeadForm('secondLeadForm', 'formMessage2');
    }
});