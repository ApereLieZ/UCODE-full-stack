const http = require("http");
const path = require('path');
const os = require('os');
let address;
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    address = add;
  })


http.createServer((req, response) => {
    req.setEncoding('utf-8');
    if(req.url === "/"){
        console.log(
            `a name of file of the executed script: ${path.basename(__filename)}\n` +
            `arguments passed to the script: ${process.argv.slice(2)}\n` +
            `IP address of the server ${address}\n` +
            `a name of host that invokes the current script: ${os.hostname()}\n` +
            `a name and a version of the information protocol: ${os.version()}\n` +
            `a query method: ${req.method}\n` +
            //`User-Agent information: ${req.get('user-agent')}\n` +
            `IP address of the client: ${req.headers['x-forwarded-for']?.split(',').shift()
            || req.socket?.remoteAddress}\n` +
            `a list of parameters passed by URL: ${req.url.slice(1)}`
        )
        
    }
      
    
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));