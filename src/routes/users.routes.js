const router = require("express").Router();
const userCtrl = require("../controllers/users.controller");
/* GET users listing. */
router.post("/sign-up", userCtrl.signUp);
router.post("/sign-in", userCtrl.signIn);
router.get("/all-user", userCtrl.allUser);

module.exports = router;
