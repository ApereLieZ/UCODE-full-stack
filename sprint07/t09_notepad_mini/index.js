const {join} = require("path");
const express = require("express");
const Note = require("./Note");
const NotePad = require("./NotePad");

const PORT = 3000;

const app = express();

app.set('views', __dirname+'/');
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(PORT, () => console.log("Server started localhost:"+PORT));


app.get("/", (req, res) =>{
    res.sendFile(join(__dirname,"index.html"));
})

app.get("/update", (req, res) => {
    let data = new NotePad().getHTMLList();
    res.send(data);
})

app.get("/info", (req, res) => {
    let data = Note.findNote(req.query.name);
    res.send(data);
})

app.get("/delete", (req, res) => {
    Note.deleteNote(req.query.name);
    res.redirect("/");
})

app.post("/send", (req, res) => {
    let note = new Note(req.body);
    res.redirect("/");        
})

app.use(express.static(__dirname));