// Selecting the display element
const display = document.getElementById('display');

// Function to update the display with the provided value
function updateDisplay(value) {
    display.textContent = value;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const button = event.target;
    const buttonText = button.textContent;

    // Check which button was clicked
    switch(buttonText) {
        case 'C':
            // Clear the display
            updateDisplay('0');
            break;
        case '+/-':
            // Toggle the sign of the number
            // For simplicity, let's assume the displayed number is always positive
            // You can implement this function based on your calculator logic
            break;
        // Add other cases for handling different buttons
        default:
            // Append the button text to the display
            if (display.textContent === '0') {
                updateDisplay(buttonText);
            } else {
                updateDisplay(display.textContent + buttonText);
            }
    }
}

// Adding event listeners to all buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
