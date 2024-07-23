// Import required modules
const http = require('http');



// Define server hostname and port
const hostname = '127.0.0.1';
const port = 3000;


// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body "Hello World"
    res.end('Hello World\n');
});





// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
