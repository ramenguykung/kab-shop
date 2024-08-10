document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate username
    if (username === '') {
        showError('usernameError', 'Username is required');
        isValid = false;
    }

    // Validate email
    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format');
        isValid = false;
    }

    // Validate password
    if (password === '') {
        showError('passwordError', 'Password is required');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        // Here you can handle the form submission, e.g., send data to a server
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.textContent = '');
}
