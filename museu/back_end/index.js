let counterTicket = 16;

const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

app.listen(3001, function () {
    console.log("Server is running")    
});

app.get("/ticket", function (req, res) {
    res.json(counterTicket)
})

app.post("/", function (req, res) {
    const { name, cpf, email } = req.body;
    if (counterTicket > 0) {
        counterTicket--;
    }
    else
        console.log("valor zero")

    //atualizar json
})