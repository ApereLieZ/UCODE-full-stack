const express = require("express");
const expressThymeleaf = require("express-thymeleaf");
const {TemplateEngine} = require("thymeleaf");
const session = require("express-session");
const XMLHttpRequest = require('xhr2');

const PORT = 3000;

const app = express();
const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname+'/');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.use(session({
    secret: "cookie_secret",
    resave: true,
    saveUninitialized: true
}));

app.listen(PORT, () => console.log("Server started localhost:"+PORT));



app.get('/', (req, res) => {
    let xhr = new XMLHttpRequest();
    if(req.session.content){
        xhr.open("GET", req.session.content, true);
        xhr.onload = async function() {
        if (xhr.readyState == XMLHttpRequest.DONE /* DONE */) {
            let str = xhr.responseText;

            //50ml+$100

            str = str.split('</body>')[0]; // 50ml
            str = str.split('<body>')[1]; // $100

            res.render("index1.html", {
                content: str
            })
        }
    }
    xhr.send();
    }
        else{
            res.render("index1.html");
        }
    
})

app.post('/send', (req, res) => {
    
    req.session.content = req.body.content;
    res.redirect('/');
})
