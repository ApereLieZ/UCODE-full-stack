const express = require("express");
const expressThymeleaf = require("express-thymeleaf");
const {TemplateEngine} = require("thymeleaf");
const iconv = require("iconv-lite");

const PORT = 3000;

const app = express();
const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname+'/');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.listen(PORT, () => console.log("Server started localhost:"+PORT));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/charset', (req, res) => {
    console.log(req.body);
    let str = req.body.string;
    let arr = req.body.charsets;
    let utf = (arr.includes('UTF-8')) ? str : '';
    let iso = (arr.includes('ISO-8859-1')) ? iconv.encode(iconv.decode(str, 'utf8'), 'iso-8859-1').toString() : '';
    let win = (arr.includes('Windows-1252')) ? iconv.encode(iconv.decode(str, 'utf8'), 'cp1252').toString() : '';
    
    res.render('index', { input: str, utf: utf, iso: iso, win: win});
})