var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
// var api = require('./api');
var cookieParser = require('cookie-parser');


var app = express();

var clientPath = path.join(__dirname,'../client');

app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use('/api', api);

app.get('*', function(req, res, next) {
    if (utils.isAsset(req.url)) {
        return next();
    } else {
        res.sendFile(path.join(clientPath, 'index.html'));
    }
});
app.listen(process.env.PORT || 3000);
console.log("Sitar is listening");