document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can handle the login logic, like sending data to your server
    if (email && password) {
        alert("Login successful!");
        // Redirect or further logic can be implemented here
    } else {
        alert("Please fill in all fields.");
    }
});
