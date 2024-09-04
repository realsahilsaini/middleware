const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


app.post("/sum", (req, res) => {

    const { num1, num2 } = req.body

    res.send({
        result: parseInt(num1) + parseInt(num2),
    });
});

app.post("/subtract", (req, res) => {

    const { num1, num2 } = req.body

    res.send({
        result: parseInt(num1) - parseInt(num2),
    });
});

app.post("/multiply", (req, res) => {

    const { num1, num2 } = req.body

    res.send({
        result: parseInt(num1) * parseInt(num2),
    });
});

app.post("/divide", (req, res) => {

    const { num1, num2 } = req.body

    res.send({
        result: parseInt(num1) / parseInt(num2),
    });
});


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
} );
