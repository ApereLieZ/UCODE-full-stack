const express = require("express");
const {join} = require("path");
const User = require("./models/user.js");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const PORT = 3000;



const secureKey = "eb686e3c7e34ecc1a1f0d5efa40dabc7549d5624ef9e2b65521a1d688101f470d1de246e7147ab3fe5591b19637521b8";

async function FogetPassword(email, password) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: 'nodejsyivanov@gmail.com',
          pass: '1qaZXCVB'
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'yivanov <nodejsyivanov@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "yivanov", // Subject line
      text: "Foget password ?", // plain text body
      html: `<b>Your password: ${password}</b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

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
    res.sendFile(join(__dirname, "views/profile.html"));
})

app.get("/login", (req, res) => {
    res.sendFile( join(__dirname, "views/login.html"));
})

app.get("/remind_password", (req, res) => {
    res.sendFile(join(__dirname, "views/remind_password.html"));
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

app.post("/remind_password", async (req, res) => {
    const {login} = req.body;
    let user = await userDB.getUser(login);
    if(!user){
        res.json({status: false, message: "user not found"});
    }
    else{
        let {email, password} = user;

        await FogetPassword(email, password);
        res.json({status: true, message: "check your email for the password"});
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

