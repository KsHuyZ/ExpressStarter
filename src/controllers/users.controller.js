const User = require("../models/users.model");
const Department = require("../models/department.model");

const userCtrl = {
  createUser: async (req, res) => {
    const {
      email,
      password,
      name,
      avatar,
      role,
      position,
      gender,
      address,
      birthday,
      idDepartment,
    } = req.body;
    try {
      const existEmail = await User.findOne({ email: email });
      if (existEmail) {
        return res.status(400).json({ success: true, msg: "Has exits" });
      } else {
        const user = new User({
          email,
          name: name,
          password,
          avatar: avatar,
          role,
          gender,
          position,
          birthday,
          address,
          idDepartment,
        });
        await user.save();

        return res.status(200).json({ success: true, msg: "success" });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
  updateUser: async (req, res) => {
    const {
      email,
      password,
      name,
      avatar,
      role,
      position,
      gender,
      address,
      birthday,
      idDepartment,
    } = req.body;

    try {
      const user = await User.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          email,
          password,
          name,
          avatar,
          role,
          position,
          gender,
          address,
          birthday,
          idDepartment,
        }
      );

      return res.status(200).json({ success: true, msg: "success" });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      const existEmail = await User.findOne({ email: email });
      console.log(existEmail);
    } catch (error) {}
  },
  allUser: async (req, res) => {
    try {
      const users = await User.find().populate("idDepartment");
      return res.status(200).json(users);
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showUserById: async (req, res) => {
    try {
      const data = await User.findOne(
        { _id: req.params.id },
        "email name avatar role gender address position password"
      )
        .populate("idDepartment")
        .exec();
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  searchByEmail: async (req, res) => {
    try {
      const data = await User.findOne(
        { email: req.params.q },
        "email firstName lastName avatar role gender address"
      )
        .exec()
        .populate("idDepartment");
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  removeUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showUserBelongToDepartment: async (req, res) => {
    const q = req.params.idDepartment;
    try {
      const data = await User.find({
        idDepartment: q,
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
  showUserNotDepartment: async (req, res) => {
    try {
      const users = await User.find();
      if (users) {
        const data = users.filter((item) => !item.idDepartment);
        return res.status(200).json(data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  },
};

module.exports = userCtrl;
