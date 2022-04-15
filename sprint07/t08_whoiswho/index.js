const fs = require("fs");
const {parse} = require("csv-parse");

const {join} = require("path");
const express = require("express");
const expressThymeleaf = require("express-thymeleaf");
const {TemplateEngine} = require("thymeleaf");
const PORT = 3000;

const app = express();
const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname+'/');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(PORT, () => console.log("Server started localhost:"+PORT));

let CSVData = [];



function CSVToHTML(CSVData){
    let html = `<style>
    .head{
        background: gray;
        color: white;
    }
    td{
        baclground: ;
    }
</style>`;
    html += "<table>";
    html += "<tr class='head'>";

        html += "<th>"; 
        let row = CSVData[0][0].split(',');
        for(let j =0; j < row.length ; j++){
            if(row[j] != '');
                html += `<td>${row[j]}</td>`;
        }
        html += "/<th>"; 


    html += "</tr>";

    for(let i = 1 ; i < CSVData.length; i++){
        html += "<tr>"; 
        html += `<td></td>`;
        let row = CSVData[i][0].split(',');
        for(let j =0; j < row.length ; j++){
            html += `<td>${row[j]}</td>`;
        }
        html += "/<tr>"; 
    }

    html += "</table>";
    return html;
}

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render("index.html");
})

app.post('/send', (req, res) => {
    let fileName = req.body.file;
    fs.createReadStream(join(__dirname, fileName))
    .pipe(parse({delimiter: ":"}))
    .on('data', (csvrow) => {
        CSVData.push(csvrow);
    })
    .on('end', () => {
        
        let html = CSVToHTML(CSVData);
        res.send(html);
    })

})

