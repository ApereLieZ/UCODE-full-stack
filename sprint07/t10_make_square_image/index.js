const {join} = require("path");
const express = require("express");
const fs = require("fs");



const PORT = 3000;

const app = express();

app.set('views', __dirname+'/');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(PORT, () => console.log("Server started localhost:"+PORT));


app.get("/", (req, res) =>{
    res.sendFile(join(__dirname,"index.html"));
})


app.use(express.static(__dirname));