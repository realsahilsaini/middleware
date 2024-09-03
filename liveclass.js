// const express = require('express');

// const app = express();

// function loggerMiddleware(req, res, next) {
//   console.log('Method is:' + req.method);
//   console.log('Host is:' + req.hostname);
//   console.log('Route is:' + req.url);
//   console.log('Time is:' + new Date());

//   next();
// }

// app.use(loggerMiddleware);

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.listen(3000, () => {  
//   console.log('Server is running on http://localhost:3000');
// }
// );





















const express = require('express');
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Define a POST route to handle JSON data
app.post('/data', (req, res) => {
  // Access the parsed JSON data from req.body
  const data = req.body.title;
  console.log('Received data:', data);

  // Send a response
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});