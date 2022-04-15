const router = require("express").Router();
const controller = require("./controller.js");



router.get("/", controller.isAuth, controller.index);

router.get("/profile", controller.auth, controller.getProfile);

router.get("/login", controller.getLogin)

router.get("/remind_password", controller.getRemaindPassword)

router.post("/login", controller.postLogin);

router.post("/registration", controller.postRegistration)

router.post("/remind_password", controller.postRemindPassword)

router.get("/log_out", controller.auth, controller.logOut);

router.get("/get_user", controller.auth, controller.getUser);

router.get("/registration", controller.getRegistration);

module.exports = router; 