const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
const { join } = require("path");

const normal = require('./normal-router')
const quantum = require('./quantum-router')

// let html = ejs.render(data, {
//     year: time.years(),
//     month: time.months(),
//     day: time.days()
// })

http.createServer((request, response) => {
    // получаем путь после слеша
    request.setEncoding('utf-8');
    if(request.url === "/"){
        fs.readFile(join(__dirname, "/views/startView.ejs"), 'utf8', function(error, data){

            if(error){
                console.log(error);
                response.statusCode = 404;
                response.end("Resourse not found!");
            }   
            else{
                let time = normal.calculateTime();
                let html = ejs.render(data)
                response.end(html);
            }
        });
        
    }
      
    else if (request.url === "/normal") {
         
        fs.readFile(join(__dirname, "/views/normalView.ejs"), 'utf8', function(error, data){

            if(error){
                console.log(error);
                response.statusCode = 404;
                response.end("Resourse not found!");
            }   
            else{
                let time = normal.calculateTime();
                let html = ejs.render(data, {
                    year: time.years(),
                    month: time.months(),
                    day: time.days()
                })
                response.end(html);
            }
        });

        
    }

    else if(request.url = "/quantum"){
        fs.readFile(join(__dirname, "/views/quantumView.ejs"), 'utf8', function(error, data){

            if(error){
                console.log(error);
                response.statusCode = 404;
                response.end("Resourse not found!");
            }   
            else{
                let time = quantum.calculateTime();
                let html = ejs.render(data, {
                    year: time[0],
                    month: time[1],
                    day: time[2]
                })
                response.end(html);
            }
        });
    }
    else{
        response.end("404")
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));