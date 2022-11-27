const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    first_name: {
      type: String,
      require: [true, "Please enter name"],
    },
    last_name: {
      type: String,
      require: [true, "Please enter name"],
    },
    password: {
      type: String,
      require: [true, "Please enter name"],
    },
    avatar: {
      type: String,
      require: [true, "Please enter name"],
      default: "../public/images/avt-default.jpg",
    },
    email: {
      type: String,
      require: [true, "Please enter name"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
