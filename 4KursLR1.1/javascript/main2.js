function togglePasswordVisibility(passwordId, toggleId, img1, img2) {
    const passwordField = document.getElementById(passwordId);
    const toggleElement = document.getElementById(toggleId);

    toggleElement.addEventListener('click', function () {

        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleElement.src = img2;
        } else {
            passwordField.type = 'password';
            toggleElement.src = img1;
        }
    });
}

togglePasswordVisibility('password', 'togglePassword', 'Screenshot_6.jpg', 'Screenshot_7.jpg');
togglePasswordVisibility('confirmPassword', 'toggleConfirmPassword', 'Screenshot_6.jpg', 'Screenshot_7.jpg');