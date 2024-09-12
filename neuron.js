
"use strict";

function neuron(data) {
    // Initialize an empty object to store the processed results
    const results = {};

    // Iterate over each sentence in the array
    data.forEach(sentence => {
        // Split the sentence into the part before ' - Response: ' and the response part
        const [firstPart, response] = sentence.split(" - Response: ");

        // Extract the key type (e.g., 'Questions', 'Orders') and convert to lowercase
        const firstKey = firstPart.slice(0, firstPart.indexOf(":")).toLowerCase();

        // Extract the statement or description part
        const firstValue = firstPart.slice(firstPart.indexOf(":") + 2);

        // Create a normalized key from the statement, replacing spaces with underscores and converting to lowercase
        let firstValueKey = "";
        for (let i = 0; i < firstValue.length; i++) {
            if (firstValue.charCodeAt(i) === 32) firstValueKey += "_"; // Replace spaces with underscores
            if (firstValue.toLowerCase().charCodeAt(i) >= 97 && firstValue.toLowerCase().charCodeAt(i) <= 122) {
                firstValueKey += firstValue.charAt(i).toLowerCase(); // Append alphabetic characters in lowercase
            }
        }

        // Ensure the main type (e.g., 'questions', 'orders') exists in the results object
        if (!results[firstKey]) results[firstKey] = {};

        // Ensure the specific statement key (e.g., 'what_is_ounces') exists within the type
        if (!results[firstKey][firstValueKey]) {
            results[firstKey][firstValueKey] = {};
            results[firstKey][firstValueKey][firstKey.slice(0, -1)] = firstValue; // Set the statement or description
        }

        // Ensure the 'responses' array exists within the specific statement key
        if (!results[firstKey][firstValueKey]["responses"]) results[firstKey][firstValueKey]["responses"] = [];

        // Add the response to the 'responses' array
        results[firstKey][firstValueKey]["responses"].push(response);
    });

    // Return the results object
    return results;
}

// const input = [
//     'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//     'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//     'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//     'Orders: shutdown! - Response: Yes Sr!',
//     'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
//   ]
//   console.log(neuron(input));
// console.log( neuron(['Orders: shutdown please! - Response: no!'])
// )