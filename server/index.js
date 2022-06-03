const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/',(req, res) => {
    res.send("Hello Msg form Server!")
})
app.get('/user',(req, res) => {
    console.log("Hello");
    res.end("I've got shit!");
})

app.listen(5000, () => {
    console.log("Server Running on Port 5000")
})