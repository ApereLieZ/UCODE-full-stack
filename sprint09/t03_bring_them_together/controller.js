const { join } = require("path");
const jwt = require("jsonwebtoken");
const User = require("./models/user.js");
const secureKey = "eb686e3c7e34ecc1a1f0d5efa40dabc7549d5624ef9e2b65521a1d688101f470d1de246e7147ab3fe5591b19637521b8";

let userDB = new User();

exports.isAuth = function (req, res, next) {
    try {
        if (req.cookies.token) {
            const decoded = jwt.verify(req.cookies.token, secureKey);
            res.user = decoded;
        }
        next();
    }
    catch (e) {
        console.log(e);
        return res.status(403).json({ message: e });
    }

}
exports.auth = function (req, res, next) {
    try {
        if (!req.cookies.token) {
            return res.status(403).json({ message: "Not autorize" });
        } else {
            const decoded = jwt.verify(req.cookies.token, secureKey);
            res.user = decoded;
        }
        next();
    }
    catch (e) {
        console.log(e);
        return res.status(403).json({ message: e });
    }
}

exports.index = function (req, res) {
    if (res.user)
        res.redirect("/profile");
    else {
        res.redirect("/login");
    }
}

exports.getProfile = function (req, res) {
    res.sendFile(join(__dirname, "./views/profile.html"));
}

exports.getLogin = function (req, res) {
    res.sendFile(join(__dirname, "./views/login.html"));
}

exports.getRemaindPassword = function (req, res) {
    res.sendFile(join(__dirname, "./views/remind_password.html"));
}

exports.postLogin = async function (req, res) {
    const { login, password } = req.body;
    let user = await userDB.getUser(login);
    if (!user) {
        res.json({ status: false, message: "user not found" })
    }
    else if (user.password == password) {
        let token = jwt.sign(user, secureKey);
        res.cookie("token", token);
        res.json({ status: true });

    }
    else {
        res.json({ status: false, message: "incorrect password" })
    }
}

exports.postRegistration = async function (req, res) {
    if (await userDB.save(req.body)) {
        let user = await userDB.getUser(req.body.login);
        let token = jwt.sign(user, secureKey);
        res.cookie("token", token);
        res.json({ status: true, message: "User created" });
    } else {
        res.json({ status: false, message: "User already exist" });
    }
}

exports.postRemindPassword = async function (req, res) {
    const { login } = req.body;
    let user = await userDB.getUser(login);
    if (!user) {
        res.json({ status: false, message: "user not found" });
    }
    else {
        let { email, password } = user;
        const mailSender = require("./mailSender");
        await mailSender(email, password);
        res.json({ status: true, message: "check your email for the password" });
    }
}

exports.logOut = function (req, res) {
    res.clearCookie("token");
    res.redirect("/login");
}

exports.getUser = function (req, res) {
    res.json(res.user);
}

exports.getRegistration = function (req, res) {
    res.sendFile(join(__dirname, "./views/registration.html"));
}