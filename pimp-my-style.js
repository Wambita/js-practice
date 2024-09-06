// Import the styles array from the provided data file
import { styles } from './pimp-my-style.data.js';

// Select the button element from the HTML
const button = document.querySelector('.button');

// Initialize a variable to track the current index in the styles array
let currentIndex = 0;
let addingClasses = true; // Tracks if we are adding or removing classes

// Function to handle the "pimp" logic
function pimp() {
    // If we are in the process of adding classes
    if (addingClasses) {
        // Add the current style to the button's class list
        button.classList.add(styles[currentIndex]);

        // Move to the next class in the array
        currentIndex++;

        // If we've reached the end of the styles array, start removing classes
        if (currentIndex === styles.length) {
            addingClasses = false;
            button.classList.add('unpimp'); // Toggle 'unpimp' on
        }
    } 
    // If we are in the process of removing classes
    else {
        // Decrease the currentIndex to remove classes in reverse order
        currentIndex--;

        // Remove the last class from the button's class list
        button.classList.remove(styles[currentIndex]);

        // If all classes have been removed, switch back to adding mode
        if (currentIndex === 0) {
            addingClasses = true;
            button.classList.remove('unpimp'); // Toggle 'unpimp' off
        }
    }
}

// Add the click event listener to the button to trigger the pimp function
document.addEventListener('click', pimp);
