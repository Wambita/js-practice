import { readdir } from 'fs/promises';

// Function to retrieve a list of attendees from a specified directory
async function getAttendees(folderPath) {
  try {
    // Read all filenames from the directory
    const filenames = await readdir(folderPath);
    
    // Create an array of promises that split and format filenames into "LastName FirstName"
    const attendeePromises = filenames.map(async (filename) => {
      const [firstName, lastName] = filename.split('_'); // Split by underscore
      return `${lastName.slice(0, -5)} ${firstName}`; // Remove the last 5 characters from the lastName part
    });

    // Wait for all promises to resolve and sort attendees alphabetically
    const attendees = await Promise.all(attendeePromises);
    
    return attendees.sort((a, b) => a.localeCompare(b)); // Sort by alphabetical order
  } catch (err) {
    // Handle any errors that occur during directory reading
    console.error('Error reading directory:', err);
    return [];
  }
}

// display the list of attendees in a numbered format
async function displayAttendees(folderPath) {
  const attendees = await getAttendees(folderPath); // Get the list of attendees
  
  // Log each attendee with its index starting from 1
  attendees.forEach((attendee, index) => {
    console.log(`${index + 1}. ${attendee}`);
  });
}


const folderPath = process.argv[2];

// Ensure a directory path was provided
if (!folderPath) {
  console.error('Please provide a directory.');
} else {
  // Display the list of attendees if the folder path is valid
  displayAttendees(folderPath);
}
