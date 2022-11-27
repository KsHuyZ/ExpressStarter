const User = require("../models/users.model");
const userCtrl = {
  signUp: async (req, res) => {
    const { email, password, firstName, lastName, avatar } = req.body;
    try {
      const user = new User({
        email,
        first_name: firstName,
        last_name: lastName,
        password,
        avatar: avatar,
      });
      await user.save();

      return res.status(200).json({ success: true, msg: "Sign Up success" });
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
};

module.exports = userCtrl;
