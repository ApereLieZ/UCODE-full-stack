const express = require("express");
const expressThymeleaf = require("express-thymeleaf");
const {TemplateEngine} = require("thymeleaf");
const {join} = require("path");
const File = require('./File');
const FileList = require('./FileList');
const fs = require("fs");

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
    let files = new FileList();
    res.render('main.html', {
        files: JSON.stringify(files.getList()),
    })
})

app.post('/create' , (req, res) => {
    let file = new File(req.body.fileName);
    file.write(req.body.content);
    res.redirect("/");
})

app.post('/delete', (req, res) => {
    try{
        fs.unlinkSync(join(__dirname ,"tmp" ,req.body.fileName));
    }catch(e){
        console.log(e);
    }
    res.redirect('/');
    

})
