document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('feedback');

    // Simple validation
    if (name && email && message) {
        feedback.style.display = 'block';
        feedback.innerHTML = `<div class="alert alert-success">Thank you, ${name}! Your message has been sent.</div>`;
        
        // Reset form
        this.reset();
    } else {
        feedback.style.display = 'block';
        feedback.innerHTML = `<div class="alert alert-danger">Please fill out all fields.</div>`;
    }
});
