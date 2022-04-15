const {Router, response} = require('express');
const session = require('express-session');
const router = Router();
const crypto = require("crypto");
const { read } = require('fs');

const algorithm = "aes-256-cbc";
const Securitykey = crypto.randomBytes(32);
const initVector = crypto.randomBytes(16);

function encriptPassword(password, salt){
    const message = password+salt;
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedData = cipher.update(message, "utf-8", "hex");

    encryptedData += cipher.final("hex");
    console.log("Encrypted message: " + encryptedData);
    return encryptedData;
}

router.get('/', (req, res) => {
    if(req.session.finish){
        res.sendFile(__dirname +'/index.html');
    }
    else if(req.session.content){
        res.sendFile(__dirname +'/check.html');
    }else
        res.sendFile(__dirname +'/index.html');
});

router.post('/send', (req, res) =>{
    req.session.password = req.body.password;
    req.session.salt = req.body.salt;
    req.session.content = true;
    res.cookie('hash', encriptPassword(req.body.password, req.body.salt))
    res.redirect('/');
})

router.post('/check', (req, res) => {
    if(req.session.password == req.body.password){
        req.session.password = null;
        req.session.content = false;
        req.session.salt = null;
        console.log("YEEEEEEEEE");
        res.cookie('finish', true);
        res.redirect('/');
    }
        
    else{
        console.log("Noooooo")
        res.end("false");
    }
    
})

router.post('/reset', (req, res) => {
    req.session.destroy();
    res.status(200);
    res.end(' ');
})


module.exports = router;