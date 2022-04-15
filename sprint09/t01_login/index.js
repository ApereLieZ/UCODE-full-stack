const express = require("express");
const {join} = require("path");
const User = require("./models/user.js");
const cookieParser = require("cookie-parser");
const PORT = 3000;
const jwt = require("jsonwebtoken");

const secureKey = "eb686e3c7e34ecc1a1f0d5efa40dabc7549d5624ef9e2b65521a1d688101f470d1de246e7147ab3fe5591b19637521b8";



let userDB = new User();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

function isAuth(req, res, next) {
    try{
        if(req.cookies.token){        
            const decoded = jwt.verify(req.cookies.token, secureKey);
            res.user = decoded;
        }
        next();
    }
    catch(e){
        console.log(e);
        return res.status(403).json({message: e});
    }
       
}

function auth(req, res, next) {
    try{
        if(!req.cookies.token){
            return res.status(403).json({message: "Not autorize"});
        }else{
            const decoded = jwt.verify(req.cookies.token, secureKey);
            res.user = decoded;
        }
        next();
    }
    catch(e){
        console.log(e);
        return res.status(403).json({message: e});
    }
       
}

function start(){
    try {
        app.listen(PORT, () => console.log("Server started localhost:"+PORT));
    } catch (error) {
      console.log(error);  
    }
}

app.get("/", isAuth, async (req, res) =>{
    if(res.user)
        res.redirect("/profile");
    else{
        res.redirect("/login");
    }
})

app.get("/profile", auth, async (req, res) => {
    res.sendFile(join(__dirname, "public/profile.html"));
})

app.get("/login", (req, res) => {
    res.sendFile( join(__dirname, "public/login.html"));
})

app.post("/login", async (req, res) => {
    const {login, password} = req.body;
    let user = await userDB.getUser(login);
    if(!user){
        res.json({status: false, message: "user not found"})
    }
    else if(user.password == password){
        let token = jwt.sign(user, secureKey);
        res.cookie("token", token);
        res.json({status: true});

    }
    else{
        res.json({status: false, message: "incorrect password"})
    }
})

app.get("/log_out", auth ,(req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
})

app.get("/get_user", auth, (req, res) => {
    res.json(res.user);
})

start();

