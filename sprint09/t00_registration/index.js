const express = require("express");
const {join} = require("path");
const User = require("./models/user.js");
const PORT = 3000;

let user = new User();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

function start(){
    try {
        app.listen(PORT, () => console.log("Server started localhost:"+PORT));
    } catch (error) {
      console.log(error);  
    }
}

app.get("/", (req, res) =>{
    res.sendFile( join(__dirname, "public/registration.html"));
})

app.post("/register",async (req, res) => {
    if(await user.save(req.body)){
        res.send("uers created");
    }else{
        res.send("User already exist");
    }
})

start();

