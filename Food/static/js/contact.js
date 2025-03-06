document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageTextarea = document.getElementById("message");

    /**
     * Validate form fields and show error messages.
     * @returns {boolean} - Returns true if all fields are valid, otherwise false.
     */
    function validateForm() {
        let isValid = true;

        // Clear previous error messages
        clearErrors();

        // Validate name
        if (!nameInput.value.trim()) {
            displayError(nameInput, "Name is required.");
            isValid = false;
        }

        // Validate email
        if (!emailInput.value.trim()) {
            displayError(emailInput, "Email is required.");
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            displayError(emailInput, "Please enter a valid email address.");
            isValid = false;
        }

        // Validate phone
        if (!phoneInput.value.trim()) {
            displayError(phoneInput, "Phone number is required.");
            isValid = false;
        }

        // Validate message
        if (!messageTextarea.value.trim()) {
            displayError(messageTextarea, "Message cannot be empty.");
            isValid = false;
        }

        return isValid;
    }

    /**
     * Display error messages near the input fields.
     * @param {HTMLElement} input - The input field to display the error for.
     * @param {string} message - The error message to display.
     */
    function displayError(input, message) {
        const error = document.createElement("span");
        error.textContent = message;
        error.style.color = "red";
        error.style.fontSize = "0.9rem";
        error.style.marginTop = "5px";
        error.classList.add("error-message");

        input.classList.add("error");
        input.parentElement.appendChild(error);
    }

    /**
     * Clear all previous error messages and styles.
     */
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach((error) => error.remove());
        document.querySelectorAll(".error").forEach((input) => input.classList.remove("error"));
    }

    /**
     * Validate email format using a regex.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - Returns true if the email is valid, otherwise false.
     */
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handle form submission
    contactForm.addEventListener("submit", (event) => {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
            return;
        }

        // Show confirmation dialog
        const confirmSubmission = confirm("Are you sure you want to send your message?");
        if (!confirmSubmission) {
            event.preventDefault();
        } else {
            alert("Message sent successfully! Thank you for contacting us.");
        }
    });

    // Add reset button functionality
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Form";
    resetButton.type = "button";
    resetButton.style.marginTop = "10px";
    resetButton.style.width = "100%";
    resetButton.style.padding = "1rem";
    resetButton.style.backgroundColor = "#ff7e67"; // Orange color
    resetButton.style.color = "#fff";
    resetButton.style.border = "none";
    resetButton.style.borderRadius = "50px";
    resetButton.style.cursor = "pointer";
    resetButton.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    // Hover effects for reset button
    resetButton.addEventListener("mouseover", () => {
        resetButton.style.transform = "scale(1.05)";
        resetButton.style.boxShadow = "0 8px 20px rgba(255, 126, 103, 0.5)";
    });

    resetButton.addEventListener("mouseout", () => {
        resetButton.style.transform = "scale(1)";
        resetButton.style.boxShadow = "none";
    });

    // Reset form on click
    resetButton.addEventListener("click", () => {
        if (confirm("Do you want to clear all fields?")) {
            contactForm.reset();
            clearErrors(); // Clear any displayed error messages
        }
    });

    // Append the reset button to the form
    contactForm.appendChild(resetButton);
});
