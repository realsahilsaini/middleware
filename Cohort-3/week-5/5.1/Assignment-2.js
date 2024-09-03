/*
Assignment #2 - Create a middleware function that logs each incoming request’s HTTP method, URL, host name, and timestamp to the console.
*/

const express = require('express');


const app = express();


function requestLogger(req, res, next) {

    /*
    console.log(req.protocol);
    console.log(req.host);
    console.log(req.url);
    console.log(req.originalUrl);
    */
   // Log the HTTP method, Complete URL, and timestamp to the console
   console.clear();
   console.log("Method: ", req.method);
    console.log("Host: ", req.hostname);
   console.log("Route: ", req.url);
   console.log(`Protocol: ${req.protocol}`);
   console.log("OriginalUrl: ", req.protocol + '://' + req.get('host') + req.originalUrl);
    
    console.log(new Date());

    // Pass control to the next middleware function
    next();
}

// Use the middleware in the app
app.use(requestLogger);

// Create a route that responds to GET requests
app.get('*', (req, res) => {
    res.send("Hi there!");
});

// Create a route that responds to POST requests
app.post('*', (req, res) => {
    res.send("Hello!");
});

// Create a route that responds to PUT requests
app.put('*', (req, res) => {
    res.send("Welcome!");
});

// Create a route that responds to DELETE requests
app.delete('*', (req, res) => {
    res.send("Goodbye!");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});