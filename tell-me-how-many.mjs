#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

async function getTotalFilesInDirectory(dirPath) {
    try {
        const files = await fs.readdir(dirPath);
        console.log(`${files.length}`);
    } catch (err) {
        console.error('Failed to read directory:', err.message);
        process.exit(1);
    }
}

// Get the directory path from command line argument or default to the current directory
const dirPath = process.argv[2] || '.';

// Convert the provided path to an absolute path
const resolvedPath = path.resolve(dirPath);

getTotalFilesInDirectory(resolvedPath);
