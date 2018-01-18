var http = require('http');
var port = 3000;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var body = ' \
        <html> \
            <head> \
                <meta charset="utf-8"> \
                <title>Welcome to Heroku</title> \
            </head> \
            <body> \
                <h4>Welcome to Heroku App !</h4> \
                <H1>我就庄新凯 大神！！！</H1>\
                <h2>欢迎开启HeroKu之旅！</h2> \
            </body> \
        </html> \
    ';
    res.write(body);
    res.end();
}).listen(port);
