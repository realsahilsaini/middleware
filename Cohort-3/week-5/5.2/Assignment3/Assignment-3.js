/*
Write an HTML file, that hits the backend server using fetch API
*/

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/sum', function(req, res) {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  res.status(200).json({ result: num1 + num2 });
});

app.listen(3000, ()=>{
  console.log('Server is running on http://localhost:3000');
})