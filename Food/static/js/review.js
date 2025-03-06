// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ratingInput = document.getElementById('rating');
    const reviewInput = document.getElementById('review');

    // Event listener for form submission
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Validate the form fields
        if (validateForm()) {
            // Confirmation alert
            alert('Thank you for your review! Redirecting to the thank you page...');
            
            // Redirect to the thank_review page
            window.location.href = '/thank_review/'; // Update this URL to match your Django route
        }
    });

    // Function to validate form inputs
    function validateForm() {
        let isValid = true;

        // Clear previous error messages
        clearErrors();

        // Validate Name
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Name is required.');
            isValid = false;
        }

        // Validate Email
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email is required.');
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate Rating
        if (!ratingInput.value) {
            showError(ratingInput, 'Please select a rating.');
            isValid = false;
        }

        // Validate Review
        if (!reviewInput.value.trim()) {
            showError(reviewInput, 'Review cannot be empty.');
            isValid = false;
        }

        return isValid;
    }

    // Helper function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to show error messages
    function showError(input, message) {
        const error = document.createElement('span');
        error.className = 'error-message';
        error.style.color = 'red';
        error.style.fontSize = '0.9rem';
        error.style.marginTop = '5px';
        error.textContent = message;

        // Append error message if not already present
        if (!input.parentElement.querySelector('.error-message')) {
            input.parentElement.appendChild(error);
        }

        input.classList.add('error');
    }

    // Helper function to clear previous error messages
    function clearErrors() {
        document.querySelectorAll('.error-message').forEach((error) => error.remove());
        document.querySelectorAll('.error').forEach((input) => input.classList.remove('error'));
    }

    // Event listener for reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Form';
    resetButton.type = 'button';
    resetButton.style.marginTop = '20px';
    resetButton.style.backgroundColor = '#ff7e67';
    resetButton.style.color = '#fff';
    resetButton.style.border = 'none';
    resetButton.style.padding = '0.8rem 1.5rem';
    resetButton.style.borderRadius = '50px';
    resetButton.style.cursor = 'pointer';
    resetButton.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

    resetButton.addEventListener('mouseover', () => {
        resetButton.style.transform = 'scale(1.05)';
        resetButton.style.boxShadow = '0 8px 20px rgba(255, 126, 103, 0.5)';
    });

    resetButton.addEventListener('mouseout', () => {
        resetButton.style.transform = 'scale(1)';
        resetButton.style.boxShadow = 'none';
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset the form?')) {
            reviewForm.reset();
            clearErrors();
        }
    });

    // Append the reset button to the form
    reviewForm.appendChild(resetButton);
});
