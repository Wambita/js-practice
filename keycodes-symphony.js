/*compose:
    Make it fire every time a key is pressed.
    Create a new div with the class note when a letter of the lowercase alphabet is pressed. It should have a unique background color generated using the key of the event. It should also display the corresponding pressed character.
    When Backspace is pressed, delete the last note.
    When Escape is pressed, clear all the notes.

*/

document.addEventListener("keydown", function(event) {
    compose(event);
});

export function compose(e) {

    if ( e === undefined){
        return
    }
    // Check if the pressed key is a lowercase alphabet letter
    if (e.key >= 'a' && e.key <= 'z' ) {
        // Create a new div for the note
        let div  = document.createElement("div");
        div.classList.add("note");
        
        // Generate a background color using the key's char code
        div.style.backgroundColor = `hsl(${e.key.charCodeAt(0) * 10}, 80%, 70%)`;
      
       div.innerHTML = e.key

        // Append the new note to the container
        document.body.appendChild(div);

    } 
    else if (e.key === "Backspace") {
        // Delete the last note if Backspace is pressed
       let notes = document.getElementsByClassName("note")
       if (notes.length > 0) {
       notes[notes.length - 1].remove()
       }

    } 
    else if (e.key === "Escape") {
        let notes = document.getElementsByClassName("note")
        while(notes.length > 0){
            notes[0].remove()
        } 
    }
}