/**
 * Created by balank on 21/12/2016.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));
console.log('__dirname:' + __dirname);

app.get('/', function (req, res) {
    console.log("app.get(/*) =========== " + req.url);
    if (req.url === '') {
        req.url = 'index';
    }
    res.sendFile(__dirname + '/public/' + req.url + '.html');
});

app.listen(2010, function () {
    console.log('Example app listening on port 2010!');
});
