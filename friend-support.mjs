import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Main function to handle encoding/decoding
const main = () => {
    const filePath = process.argv[2];  // File path to read
    const action = process.argv[3];    // Action: encode or decode
    const outputFileName = process.argv[4] || null;  // Optional output file

    // Validate arguments
    if (!filePath || !action) {
        console.error("Usage: node tell-it-cypher.mjs <file-path> <encode or decode> [output-file]");
        process.exit(1);  // Exit if arguments are missing
    }

    const resolvedFilePath = resolve(filePath);  // Resolve file path
    const outputFile = outputFileName || (action === 'encode' ? 'cypher.txt' : 'clear.txt');

    try {
        // Read input file content
        const fileContent = readFileSync(resolvedFilePath, 'utf-8');

        let result;

        // Perform the specified action
        if (action === 'encode') {
            result = Buffer.from(fileContent, 'utf-8').toString('base64');  // Encode to base64
        } else if (action === 'decode') {
            result = Buffer.from(fileContent, 'base64').toString('utf-8');  // Decode from base64
        } else {
            console.error("Invalid action. Use 'encode' or 'decode'.");
            process.exit(1);  // Exit on invalid action
        }

        // Write result to the output file
        writeFileSync(resolve(outputFile), result, 'utf-8');
        console.log(`Operation successful. Output written to ${outputFile}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);  // Exit on file read/write error
    }
};

main();
