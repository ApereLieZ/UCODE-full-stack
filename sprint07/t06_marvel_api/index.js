const express = require("express");
const expressThymeleaf = require("express-thymeleaf");
const {TemplateEngine} = require("thymeleaf");
const XMLHttpRequest = require('xhr2');
const crypto = require('crypto');


const PORT = 3000;

const app = express();
const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname+'/');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const privateKey = "f78ac7b2a9300624f7e845e3750494b099001dd7";
const publicKey = "2ad8b38f2d802fdcd33fe7b04b35159c";

app.listen(PORT, () => console.log("Server started localhost:"+PORT));

function RenderHTML(obj, html){
    for(let item in obj){
        if( typeof obj[item] === 'object'){
            
            html += `<div class="data-container"><span>${item}:</span>`;
            html = RenderHTML(obj[item], html);
            html += "</div>";
        }
        else if(Array.isArray(obj[item])){
            for(let i = 0; i < item.length; i++){
                html += `<div class="data-container"><span>${i}:</span>`;
                html = RenderHTML(obj[item], html);
                html += "</div>";
            }
        }
        else{
            html += `<p class="item">${item}: ${obj[item]}</p>`;
        }
    }
    return html;
}

app.get('/', (req, res) => {
    res.render("index1.html");
})

app.post('/send', (req, res) =>{
    let xhr = new XMLHttpRequest();
    let html = "";
    //"http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150"
    let timeStamp = Date.now();
    xhr.open("GET", `https://gateway.marvel.com:/v1/public/characters?ts=${timeStamp}&apikey=2ad8b38f2d802fdcd33fe7b04b35159c&hash=${crypto.createHash('md5').update(timeStamp+privateKey+publicKey).digest("hex")}`, true);
    xhr.onload = async function() {
        if (xhr.readyState == XMLHttpRequest.DONE /* DONE */) {
            let str = JSON.parse(xhr.response);
            html = RenderHTML(str, html);
            res.send(html);
        }
    }
    xhr.send();
})

app.use(express.static(__dirname));