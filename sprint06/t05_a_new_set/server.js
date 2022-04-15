const http = require("http");
const fs = require("fs");
const { join } = require("path");
 
http.createServer((request, response) => {
    // получаем путь после слеша
    request.setEncoding('utf-8');
    if(request.url === "/"){
        fs.readFile(join(__dirname, "index.html"), function(error, data){
              
            if(error){
                      
                response.statusCode = 404;
                response.end("Resourse not found!");
            }   
            else{
                response.end(data);
            }
        });
        
    }
      
    else if (request.url === "/send") {
         
        let body = "";
        request.on('data', (chunk) => {
            body+= chunk;
        }).on('end', () => {
           console.log(JSON.parse(body));
           response.end(body);
          // at this point, `body` has the entire request body stored in it as a string
        });

        
    }
    else{
        response.end("404")
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));