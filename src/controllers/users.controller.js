const User = require("../models/users.model");
const userCtrl = {
  createUser: async (req, res) => {
    const {
      email,
      password,
      name,
      avatar,
      role,
      gender,
      address,
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
  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      const existEmail = await User.findOne({ email: email });
      console.log(existEmail);
    } catch (error) {}
  },
  allUser: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      console.log("error: ", error);
    }
  },
  showUserById: async (req, res) => {
    try {
      const data = await User.findOne(
        { _id: req.params.id },
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
};

module.exports = userCtrl;
