// Function to show login error modal
const showLoginErrorModal = () => {
    $('#loginErrorModal').modal('show');
};

// Function to show signup error modal
const showSignupErrorModal = () => {
    $('#signupErrorModal').modal('show');
};

// Login event handler
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const login = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (login.ok) {
            document.location.replace('/');
        } else {
            // Show login error modal
            showLoginErrorModal();
        }
    }
};

// Signup event handler
const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            // Show signup error modal
            showSignupErrorModal();
        }
    }
};

// Event listener for login button
document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);

// Event listener for sign up button
document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);