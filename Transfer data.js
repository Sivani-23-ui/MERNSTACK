const http = require('http');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type':'application/json'});

    let data = {
        name: "John",
        course: "NodeJS"
    };

    res.end(JSON.stringify(data));

}).listen(3000);

console.log("Server running on port 3000");