const http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins, or specify an origin instead of '*'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Specify allowed HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Specify allowed headers

  // Open file on server
  fs.readFile("db.json", function(err, data) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.write("Error reading file");
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
    }
    return res.end();
  });

}).listen(3000);