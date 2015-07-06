var express = require('express');
var app = express();
var http = require('http');
var path = require('path'); 

app.set("view engine", "html");
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/To-Do', function (req, res) {
    res.render("index");
});

http.createServer(app).listen(5000);
