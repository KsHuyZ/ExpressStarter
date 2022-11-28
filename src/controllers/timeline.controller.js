const RequestModel = require("../models/request.file.model");
const PendingModel = require("../models/pending.model");
const ProgressModel = require("../models/progress.model");
const UpdateModel = require("../models/update.model");
const DoneModel = require("../models/done.model");

const timeLineCtrl = {
  createTimeLine: async (req, res) => {
    const {
      nameCard,
      idDepartment,
      descriptionCard,
      startDate,
      endDate,
      owner,
      img,
      status,
      attackFile,
    } = req.body;

    try {
      const timeLine = new RequestModel({
        nameCard,
        idDepartment,
        descriptionCard,
        startDate,
        endDate,
        owner,
        img,
        status,
        attackFile,
      });
      await timeLine.save();
      return res.status(200).json({ success: true, msg: "success" });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListRequest: async (req, res) => {
    try {
      const data = await RequestModel.find({
        idDepartment: req.params.idDepartment,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListPending: async (req, res) => {
    try {
      const data = await PendingModel.find({
        idDepartment: req.params.idDepartment,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListProgress: async (req, res) => {
    try {
      const data = await ProgressModel.find({
        idDepartment: req.params.idDepartment,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListUpdate: async (req, res) => {
    try {
      const data = await UpdateModel.find({
        idDepartment: req.params.idDepartment,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListDone: async (req, res) => {
    try {
      const data = await DoneModel.find({
        idDepartment: req.params.idDepartment,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },

  showListRequestDetail: async (req, res) => {
    try {
      const data = await RequestModel.findOne({
        _id: req.params.id,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListPendingDetail: async (req, res) => {
    try {
      const data = await PendingModel.findOne({
        _id: req.params.id,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListProgressDetail: async (req, res) => {
    try {
      const data = await ProgressModel.findOne({
        _id: req.params.id,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListUpdateDetail: async (req, res) => {
    try {
      const data = await UpdateModel.findOne({
        _id: req.params.id,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showListDoneDetail: async (req, res) => {
    try {
      const data = await DoneModel.findOne({
        _id: req.params.id,
      });

      if (data) {
        return res.status(200).json({
          success: true,
          data,
        });
      } else {
        return res.status(400).json({
          success: false,
          msg: "fails",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
};

module.exports = timeLineCtrl;
