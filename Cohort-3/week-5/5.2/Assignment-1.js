/*
Assignment #1 - Try converting the calculator assignment to use POST endpoints. Check if it works with/without the express.json middleware
*/

const express = require('express');
const app = express();

// Use express.json() middleware to parse JSON bodies (this is required for POST requests) 
//This is in-built middleware in express
//This middleware will parse the JSON data from the request body and make it available in req.body


app.post('/sum', (req, res) => {
  // const { num1, num2 } = req.body;
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.send({
    result: parseInt(num1) + parseInt(num2),
  });
});

app.post('/subtract', (req, res) => {
  // const { num1, num2 } = req.body;
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.send({
    result: parseInt(num1) - parseInt(num2),
  });
});

app.post('/multiply', (req, res) => {
  // const { num1, num2 } = req.body;
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.send({
    result: parseInt(num1) * parseInt(num2),
  });
});

app.post('/divide', (req, res) => {
  // const { num1, num2 } = req.body;
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.send({
    result: parseInt(num1) / parseInt(num2),
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});