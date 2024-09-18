import fs from 'fs';

// Helper function to print the help message
const printHelp = () => {
    console.log('Commands:');
    console.log('- create: takes a filename as argument and create it (should have `.json` extension specified)');
    console.log('- delete: takes a filename as argument and delete it');
    console.log('- add: takes a filename, adds an entry to the list with an optional quantity');
    console.log('- rm: takes a filename, removes an entry from the list with an optional quantity');
    console.log('- ls: lists all entries in the list');
    console.log('- help: prints this help message');
};

// Function to read the shopping list
const readList = (filename) => {
    if (!fs.existsSync(filename)) return {};
    const data = fs.readFileSync(filename);
    return JSON.parse(data);
};

// Function to write the shopping list
const writeList = (filename, list) => {
    fs.writeFileSync(filename, JSON.stringify(list, null, 2));
};

// Command line arguments
const [filename, command, ...args] = process.argv.slice(2);

// Handle commands
switch (command) {
    case 'create':
        fs.writeFileSync(filename, JSON.stringify({}));
        console.log(`Created file: ${filename}`);
        break;

    case 'delete':
        fs.unlinkSync(filename);
        console.log(`Deleted file: ${filename}`);
        break;

    case 'add': {
        const entry = args[0];
        const quantity = isNaN(args[1]) ? 1 : Number(args[1]);

        if (!entry) {
            console.log('No elem specified..');
            break;
        }

        const list = readList(filename);
        list[entry] = (list[entry] || 0) + quantity;

        writeList(filename, list);
        console.log(`Added ${quantity} of "${entry}" to the list.`);
        break;
    }

    case 'rm': {
        const entry = args[0];
        const quantity = isNaN(args[1]) ? null : Number(args[1]);

        if (!entry) {
            console.log('No elem specified..');
            break;
        }

        const list = readList(filename);
        if (!list[entry]) break;

        if (quantity === null) {
            delete list[entry];
            console.log(`Removed "${entry}" from the list.`);
        } else if (quantity > 0) {
            list[entry] -= quantity;
            if (list[entry] <= 0) {
                delete list[entry];
                console.log(`Removed "${entry}" from the list as its quantity dropped to zero.`);
            } else {
                console.log(`Reduced "${entry}" by ${quantity}.`);
            }
        } else {
            list[entry] = (list[entry] || 0) - quantity;
            if (list[entry] <= 0) {
                delete list[entry];
                console.log(`Removed "${entry}" from the list as its quantity dropped to zero.`);
            } else {
                console.log(`Increased "${entry}" by ${-quantity}.`);
            }
        }

        writeList(filename, list);
        break;
    }

    case 'ls': {
        const list = readList(filename);
        if (Object.keys(list).length === 0) {
            console.log('Empty list..');
        } else {
            for (const [item, count] of Object.entries(list)) {
                console.log(`- ${item} (${count})`);
            }
        }
        break;
    }

    case 'help':
        printHelp();
        break;

    default:
        printHelp();
        break;
}
