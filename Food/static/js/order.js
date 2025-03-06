document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const itemsTextarea = document.getElementById("items");
    const addressTextarea = document.getElementById("address");

    /**
     * Validate form fields.
     * @returns {boolean} - Returns true if all fields are valid, otherwise false.
     */
    function validateForm() {
        if (!nameInput.value.trim()) {
            showAlert("Name is required.", nameInput);
            return false;
        }
        if (!validateEmail(emailInput.value.trim())) {
            showAlert("Please enter a valid email address.", emailInput);
            return false;
        }
        if (!phoneInput.value.trim()) {
            showAlert("Phone number is required.", phoneInput);
            return false;
        }
        if (!itemsTextarea.value.trim()) {
            showAlert("Order items are required.", itemsTextarea);
            return false;
        }
        if (!addressTextarea.value.trim()) {
            showAlert("Delivery address is required.", addressTextarea);
            return false;
        }
        return true;
    }

    /**
     * Validate email format using a regular expression.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - Returns true if the email is valid, otherwise false.
     */
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Display an alert and focus on the invalid input field.
     * @param {string} message - The alert message.
     * @param {HTMLElement} element - The input field to focus on.
     */
    function showAlert(message, element) {
        alert(message);
        element.focus();
    }

    /**
     * Add event listener for form submission.
     */
    form.addEventListener("submit", (event) => {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails.
            return;
        }

        // Show confirmation dialog.
        const confirmSubmission = confirm("Are you sure you want to submit your order?");
        if (!confirmSubmission) {
            event.preventDefault();
        } else {
            alert("Order submitted successfully!");
        }
    });

    /**
     * Reset button functionality.
     */
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Form";
    resetButton.type = "button";
    resetButton.style.marginTop = "20px";
    resetButton.style.width = "100%";
    resetButton.style.padding = "0.8rem";
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
            form.reset();
        }
    });

    // Append the reset button to the form
    form.appendChild(resetButton);
});
