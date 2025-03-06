document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const guestsInput = document.getElementById("guests");

    // Helper function to display error messages
    const displayError = (input, message) => {
        const error = document.createElement("span");
        error.textContent = message;
        error.className = "error-message";
        error.style.color = "red";
        error.style.fontSize = "0.9rem";
        error.style.marginTop = "5px";
        input.classList.add("error");
        input.parentElement.appendChild(error);
    };

    // Clear previous errors
    const clearErrors = () => {
        document.querySelectorAll(".error-message").forEach((msg) => msg.remove());
        document.querySelectorAll(".error").forEach((input) => input.classList.remove("error"));
    };

    // Event listener for form submission
    bookingForm.addEventListener("submit", (event) => {
        clearErrors();

        let isValid = true;

        // Validate inputs
        if (!nameInput.value.trim()) {
            displayError(nameInput, "Name is required.");
            isValid = false;
        }
        if (!dateInput.value.trim()) {
            displayError(dateInput, "Date is required.");
            isValid = false;
        }
        if (!timeInput.value.trim()) {
            displayError(timeInput, "Time is required.");
            isValid = false;
        }
        if (!guestsInput.value.trim() || guestsInput.value <= 0) {
            displayError(guestsInput, "Number of guests must be at least 1.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
            return;
        }

        // Confirmation dialog
        const confirmBooking = confirm(
            `Please confirm your booking:\n\n` +
            `Name: ${nameInput.value.trim()}\n` +
            `Date: ${dateInput.value.trim()}\n` +
            `Time: ${timeInput.value.trim()}\n` +
            `Guests: ${guestsInput.value.trim()}`
        );

        if (!confirmBooking) {
            event.preventDefault(); // Prevent form submission if user cancels
        }
    });

    // Create a reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Form";
    resetButton.style.marginTop = "20px";
    resetButton.style.backgroundColor = "#ff7e67"; // Orange color
    resetButton.style.color = "#fff";
    resetButton.style.border = "none";
    resetButton.style.padding = "0.8rem 1.5rem";
    resetButton.style.borderRadius = "50px";
    resetButton.style.cursor = "pointer";
    resetButton.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    resetButton.type = "button";

    // Add hover effects
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
            bookingForm.reset();
            clearErrors(); // Clear any displayed error messages
        }
    });

    // Append the reset button to the form
    bookingForm.appendChild(resetButton);
});
