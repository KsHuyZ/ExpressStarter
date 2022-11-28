const router = require("express").Router();
const timeLineCtrl = require("../controllers/timeline.controller");
/* GET users listing. */
router.post("/create-time-line", timeLineCtrl.createTimeLine);
router.get("/request/:idDepartment", timeLineCtrl.showListRequest);
router.get("/pending/:idDepartment", timeLineCtrl.showListPending);
router.get("/progress/:idDepartment", timeLineCtrl.showListProgress);
router.get("/update/:idDepartment", timeLineCtrl.showListUpdate);
router.get("/done/:idDepartment", timeLineCtrl.showListDone);

// detail

router.get("/request-detail/:id", timeLineCtrl.showListRequestDetail);
router.get("/pending-detail/:id", timeLineCtrl.showListPendingDetail);
router.get("/progress-detail/:id", timeLineCtrl.showListProgressDetail);
router.get("/update-detail/:id", timeLineCtrl.showListUpdateDetail);
router.get("/done-detail/:id", timeLineCtrl.showListDoneDetail);

module.exports = router;
