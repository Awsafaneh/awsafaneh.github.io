// Add any JavaScript functionality here, e.g.:
// - Interactive elements (like image carousels)
// - Form validation
// - Dynamic content loading

console.log('Script loaded.');

// Basic smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        try {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        } catch (error) {
            console.error('Smooth scroll target not found:', this.getAttribute('href'));
        }
    });
});

// Simple Contact Form Handler Placeholder (Does not actually send email)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Basic validation example (check if fields are empty)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            formStatus.textContent = 'يرجى ملء جميع الحقول المطلوبة.';
            formStatus.style.color = 'red';
            return; 
        }

        // Simulate sending data (replace with actual AJAX call to backend/service later)
        formStatus.textContent = 'جارٍ إرسال الرسالة...';
        formStatus.style.color = 'orange';
        
        setTimeout(() => {
            // Simulate success
            formStatus.textContent = 'تم إرسال رسالتك بنجاح!';
            formStatus.style.color = 'green';
            contactForm.reset(); // Clear the form

            // Optionally hide the message after a few seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);

        }, 1500); // Simulate network delay
    });
} 
