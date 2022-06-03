var express = require('express');
var app = express();
var PORT = 3005;

app.set('Title','My Node Server');
app.engine('html', require('ejs').renderFile)
app.set('View Engine', 'ejs');

app.get('/', (req, res) => {
        res.send(app.get('Title'));
});

app.get('/user', (req, res) => {
    // res.send(app.get('View Engine'));
    // res.send("<h1>User EJS</h1>");
    res.render('sample');
})

app.listen(PORT, function(err){
    if(err) console.log("Error In Server Setup")
    console.log("Server Listening on ", PORT);
});