// Import the styles array from the provided data file
import { styles } from './pimp-my-style.data.js';
let count  = 0

export function pimp() {
const button = document.querySelector(".button")
    if (!button.classList.contains("unpimp")) {
        // Add the current style to the button's class list
        button.classList.add(styles[count]);
        // Move to the next class in the array
   count++

        // If we've reached the end of the styles array, start removing classes
        if (count=== styles.length) {
            button.classList.add('unpimp'); // Toggle 'unpimp' on
        }
    }  else {
        // Decrease the currentIndex to remove classes in reverse order
    count--

        // Remove the last class from the button's class list
        button.classList.remove(styles[count]);
        // If all classes have been removed, switch back to adding mode
        if (count === 0) {
            button.classList.toggle('unpimp'); // Toggle 'unpimp' off
        }
    }
}
