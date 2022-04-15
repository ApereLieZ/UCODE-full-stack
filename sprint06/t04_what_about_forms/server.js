const http = require("http");
const fs = require("fs");
 
http.createServer((request, response) => {
    // получаем путь после слеша
    const filePath = request.url.substr(1);
    fs.readFile(filePath, function(error, data){
              
        if(error){
                  
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
        }
    });
      
     if (request.url === "/user") {
         
        let data = "";
        request.on("data", chunk => {
            data += chunk;
        });
        request.on("end", () => {
            
            if(data == "true")
                response.end("Yeah, it`s true");
            else
                response.end("Shame on you! Go and watch Avengers!")
        });
    }
    else{
        
        fs.readFile("index.html", (error, data) => {
            if(error){}
            response.end(data)
        });
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));