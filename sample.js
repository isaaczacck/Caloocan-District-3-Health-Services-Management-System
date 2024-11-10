    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
                alert('Please fill in all fields');
                return;
            }

            // Here you would typically send the login data to a server
            console.log('Login attempted with:', emailInput.value, passwordInput.value);
            alert('Login functionality would be implemented here.');
        });

        const googleLoginButton = document.querySelector('.google-login');
        googleLoginButton.addEventListener('click', function() {
            alert('Google login functionality would be implemented here.');
        });

        const playButton = document.querySelector('.play-button');
        playButton.addEventListener('click', function() {
            alert('Video playback functionality would be implemented here.');
        });
    });
