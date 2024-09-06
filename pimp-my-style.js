//pimp function adds and removes classes bases on clicks and toggling the unpim class at appropriate times

import {styles} from  '/pimp-my-style.data.js'

//select the button elem from the html 
const button = document.querySelector('.button')

//initailize a counter to track no of clicks
let clickCount = 0

//func to add / remove styles from the button
export function  pimp (){
    //get styles in the array
    const ttlStyles = styles.length

    //calculate current index based on the click counter
    const index = clickCount %(2*ttlStyles)

    //add styles 
    if (button.classList.contains('unpimp')) {
        button.classList.toggle('unpimp');
    }

    if (index < totalStyles) {
        // Add classes in the order.
        button.classList.add(styles[index]);
    } else {
        // Toggle the 'unpimp' class when starting to remove styles.
        button.classList.toggle('unpimp');

        // Remove classes in a LIFO fashion.
        button.classList.remove(styles[2 * totalStyles - index - 1]);
    }

    // Increment the clickCounter for the next click.
    clickCounter++;
}

// Attach the function to the button's click event.
document.addEventListener('click', pimp);
