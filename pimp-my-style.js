//pimp function adds and removes classes bases on clicks and toggling the unpim class at appropriate times

import { styles } from './pimp-my-style.data.js';

//select the button elem from the html 
const button = document.querySelector('.button')

//initailize a counter to track no of clicks
let clickCount = 0
let adding = true

//func to add / remove styles from the button
export function  pimp (){
    //get styles in the array
    const ttlStyles = styles.length

    //calculate current index based on the click counter
    const index = clickCount % ttlStyles

    //add styles 
    if (adding) {
        // Add the next class in the styles array.
        button.classList.add(styles[index]);

        // If we've added all classes, start removing them on the next click.
        if (index === totalStyles - 1) {
            adding = false;
            button.classList.add('unpimp'); // Toggle 'unpimp' on when done adding
        }
    } else {
        // Remove the classes in reverse order (LIFO).
        button.classList.remove(styles[ttlStyles - index - 1]);

        // When all classes have been removed, start adding them again.
        if (index === ttlStyles - 1) {
            adding = true;
            button.classList.remove('unpimp'); // Toggle 'unpimp' off when done removing
        }
    }
    // Increment the clickCounter for the next click.
    clickCounter++;
}

// Attach the function to the button's click event.
document.addEventListener('click', pimp);
