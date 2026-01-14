document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Infinite Scroll Cloning
    const scrollTrack = document.getElementById('scroll-track');
    const images = scrollTrack.innerHTML;
    // Clone images twice to ensure no gap in the loop
    scrollTrack.innerHTML = images + images + images;

    // 2. Smooth Internal Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Form Handling Logic
    const enrollmentForm = document.getElementById('enrollment-form');
    enrollmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple visual feedback
        const btn = document.querySelector('.submit-btn');
        btn.innerText = 'Request Sent, Macha!';
        btn.style.backgroundColor = '#E2725B';
        
        // Collect Data
        const formData = new FormData(enrollmentForm);
        console.log('New Lead Received for Viyaan:', Object.fromEntries(formData));
        
        // Clear form after delay
        setTimeout(() => {
            enrollmentForm.reset();
            btn.innerText = 'Request Vision Tour';
            btn.style.backgroundColor = '#2E473B';
        }, 3000);
    });
});