/*pronoun that accepts a string parameter. T
his function returns an object that will have all the personal pronouns, present in the string, as keys.
 Each key will have a sub object with the first word after each of the personal pronouns found in the string.
you must also a count property to the sub object, with the amount of occurrences of the pronoun.*/

function pronoun(str){
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];

    // Split the string into words
    const words = str.toLowerCase().split(/\s+/);
  
    // Create an object to store the pronouns information
    const result = {};
  
    // Iterate through the words
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
  
      // If the word is a pronoun
      if (pronouns.includes(word)) {
        // Initialize the object for the pronoun if not done already
        if (!result[word]) {
          result[word] = { word: [], count: 0 };
        }
  
        // Increment the count for the pronoun
        result[word].count++;
  
        // Check if the next word exists and is not a pronoun
        if (words[i + 1] && !pronouns.includes(words[i + 1])) {
          result[word].word.push(words[i + 1]);
        }
      }
    }
  
    return result;
  }
  
//   // Example usage:
//   const ex1 = 'Using Array Destructuring, you you can iterate through objects easily.';
//   console.log(pronoun(ex1));
  