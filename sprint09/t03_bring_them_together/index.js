const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./router.js");
const PORT = 3000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(router);

function start() {
    try {
        app.listen(PORT, () => console.log("Server started localhost:" + PORT));
    } catch (error) {
        console.log(error);
    }
}


start();

