const http = require('http');
const fs = require('fs');
var args = require('minimist')(process.argv.slice(2));
console.log(args);

const hostname = '127.0.0.1';
const port = args.port || 3000;

const server = http.createServer((req, res) => {
	        res.statusCode = 200;
	        res.setHeader('Content-Type', 'text/html');
	        fs.readFile('./public/index.html', 'utf8', (err, data) => {
			  if (err) {
				      console.error(err);
				      return;
				    }
			  res.end(data);
		});
});

server.listen(port, hostname, () => {
	        console.log(`Server running on port ${port}`);
});
