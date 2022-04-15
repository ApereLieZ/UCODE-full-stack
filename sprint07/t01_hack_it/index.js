const express = require('express');
const app = express();
const session = require('express-session');
//const bodyParser = require('body-parser');;

const PORT = process.env.PORT || 3000;



app.use(express.json());

const router = require('./router.js');
app.use(express.urlencoded({extended: true}));
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: "cookie_secret",
    resave: true,
    saveUninitialized: true
}));

app.use(router);
app.use(express.static(__dirname));


async function start() {
    try{
        app.listen(PORT, () => {
            console.log("Server has been started...")
        })
        console.log("localhost:"+PORT);
    }catch(e){
        console.log(e);
    }
}

start();