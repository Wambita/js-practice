/*pronoun that accepts a string parameter. T
his function returns an object that will have all the personal pronouns, present in the string, as keys.
 Each key will have a sub object with the first word after each of the personal pronouns found in the string.
you must also a count property to the sub object, with the amount of occurrences of the pronoun.*/

function pronoun(str){
    const pronouns = ['I', 'you', 'he', 'she', 'it', 'we', 'they'];
    const result = {};

    for (let i = 0; i < pronouns.length; i++) {
        const pronoun = pronouns[i];
        const index = str.indexOf(pronoun);

        if (index !== -1) {
            const nextWord = str.substring(index + pronoun.length).trim().split(' ')[0];

            if (!result[pronoun]) {
                result[pronoun] = { count: 0 };
            }

            result[pronoun][nextWord] = (result[pronoun][nextWord] || 0) + 1;
            result[pronoun].count++;
        }
    }

    return result;
}