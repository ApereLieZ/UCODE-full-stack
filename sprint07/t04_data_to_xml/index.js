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
