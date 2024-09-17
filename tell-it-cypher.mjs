import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Main function to handle encoding/decoding
const main = () => {
    const filePath = process.argv[2];   // Input file path
    const action = process.argv[3];     // Action: encode or decode
    const outputFileName = process.argv[4] || null;  // Optional output file name

    // Validate command-line arguments
    if (!filePath || !action) {
        console.error("Usage: node tell-it-cypher.mjs <file-path> <encode or decode> [output-file]");
        process.exit(1);
    }

    const resolvedFilePath = resolve(filePath);  // Resolve the input file path

    try {
        const fileContent = readFileSync(resolvedFilePath, 'utf-8'); // Read input file content
        let result;
        let outputFile;

        // Perform encoding or decoding based on the action
        if (action === 'encode') {
            result = Buffer.from(fileContent, 'utf-8').toString('base64');  // Encode to base64
            outputFile = outputFileName || 'cypher.txt';   // Default output file for encoding
        } else if (action === 'decode') {
            result = Buffer.from(fileContent, 'base64').toString('utf-8');  // Decode base64
            outputFile = outputFileName || 'clear.txt';    // Default output file for decoding
        } else {
            console.error("Invalid action. Use 'encode' or 'decode'.");
            process.exit(1);  // Exit if the action is invalid
        }

        // Write the result to the output file
        writeFileSync(resolve(outputFile), result, 'utf-8');
        console.log(`Operation successful. Output written to ${outputFile}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);  // Exit if any error occurs
    }
};


main();
