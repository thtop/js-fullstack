let http = require('http');

let app = http.createServer(function(req, res) {
    //console.log(req.url);
    if (req.url == '/') {
        res.end('Hello, and welcome to our website');
    }

    if (req.url == '/about') {
        res.end('Thank you for the interst in our company');
    }

    res.end('We cannot find the page you are looking for.')
});



app.listen(3000);