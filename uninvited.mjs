import fs from 'fs/promises';  
import http from 'http';        
import path from 'path';       
const port = 5000;             
const guest_dir = 'guests';     

// Create an HTTP server
const server = http.createServer(async (req, res) => {
    // Handle POST requests only
    if (req.method === 'POST') {
        let body = '';

        // Collect the incoming data
        req.on('data', chunk => {
            body += chunk.toString();  // Append data to body
        });

        // Once all data is received, process it
        req.on('end', async () => {
            try {
                // Extract guest name from the URL
                let guest_name = req.url.slice(1);  // Remove leading slash from the URL
                const filepath = path.join(guest_dir, `${guest_name}.json`);  // Set file path

                // Write the received data to the file
                await fs.writeFile(filepath, body);

                // Respond with 201 Created and return the saved data
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(body);
            } catch (e) {
                console.log(e);  // Log any server errors

                // Respond with 500 Internal Server Error if something goes wrong
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
});


server.listen(port, () => {
    console.log(`Listening on port ${port}`);  
});
