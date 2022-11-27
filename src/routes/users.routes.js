const router = require("express").Router();
const userCtrl = require("../controllers/users.controller");
/* GET users listing. */
router.post("/create-user", userCtrl.createUser);
router.post("/sign-in", userCtrl.signIn);
router.get("/all-user", userCtrl.allUser);
router.get("/:id", userCtrl.showUserById);
router.get("/search/:q", userCtrl.searchByEmail);

module.exports = router;
