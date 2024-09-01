const express = require('express');
const app = express();

// Middleware function
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(401).json({msg: 'You must be 14 or older to enter'});
  }
}

//This will run the middleware for all the routes below it.
// app.use(isOldEnoughMiddleware);

app.get('/ride1', isOldEnoughMiddleware,  (req, res) => {

    res.json({msg: 'Ride completed'});

});

app.get('/ride2', isOldEnoughMiddleware,(req, res) => {

    res.json({msg: 'Ride 2 completed'});

});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});