const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    res.send("Hello Msg from Node Server!")
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// app.get('/msg',(req, res) => {
//     console.log("Hello");
//     res.end("<h1>I've got nothing</h1>");
// });

// app.get('/sample',(req, res) => {
//     res.render('sample');
// });

app.get('*', (req, res) => {
    res.render('accessDenied');
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000")
});