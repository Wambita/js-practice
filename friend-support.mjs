import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Helper function to send JSON responses
const sendJsonResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

// Create the HTTP server
const server = createServer(async (req, res) => {
    // Handle GET requests
    if (req.method === 'GET') {
        // Extract guest name from the URL
        const guestName = req.url.slice(1);
        
        // Check if guestName is provided
        if (guestName) {
            // Construct the file path for the guest's JSON file
            const filePath = join(process.cwd(), 'guests', `${guestName}.json`);
            
            try {
                // Read and parse the JSON file content
                const fileContent = await readFile(filePath, 'utf-8');
                const guestData = JSON.parse(fileContent);
                
                // Send the guest data as JSON response
                sendJsonResponse(res, 200, guestData);
            } catch (error) {
                // Handle file not found error
                if (error.code === 'ENOENT') {
                    sendJsonResponse(res, 404, { error: 'guest not found' });
                } else {
                    // Handle other server errors
                    sendJsonResponse(res, 500, { error: 'server failed' });
                }
            }
        } else {
            // Handle cases where guestName is not provided
            sendJsonResponse(res, 404, { error: 'guest not found' });
        }
    } else {
        // Handle non-GET requests
        sendJsonResponse(res, 405, { error: 'Method Not Allowed' });
    }
});

// Define the port and start the server
const port = 5000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
