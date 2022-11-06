const userModel = require("../models/userModel");
const getUsers = async (req, res) => {
  const data = await userModel.find();
  try {
    res
      .status(200)
      .json({ success: true, msg: "User Data Extracted", data: data });
  } catch (error) {
    res.json({ msg: "Error" });
  }
};
const registerUser = (req, res) => {
  // const { name, email, password } = req.body;
  // userModel.findOne({ email: email }, (err, user) => {
  //   if (user) {
  //     res.status(500).json({
  //       success: false,
  //       message: "User Already registered. Please use another email",
  //     });
  //   } else {
  //     const user = new userModel({
  //       name,
  //       email,
  //       password,
  //     });
  //     user.save((err) => {
  //       if (err) {
  //         res.status(500).json({ err: err, msg: err.message });
  //       } else {
  //         res
  //           .status(201)
  //           .json({ success: true, message: "User Created Successfully" });
  //       }
  //     });
  //   }
  // });
  const register = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  register
    .save()
    .then(() => {
      res.json({ msg: " User has been created" });
    })
    .catch((err) => {
      res.status(500).json({ msg: err });
    });
};
const loginUser = (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.status(200).json({ success: true, msg: "Login Successfull" });
      } else {
        res.status(404).json({ success: false, msg: "Invalid Credentials" });
      }
    } else {
      res.status(404).json({
        success: false,
        msg: "This email is not registered. Please Register your Email first",
      });
    }
  });
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await userModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, msg: "User Deleted Successfully", data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };

    const result = await userModel.findByIdAndUpdate(id, updateData, options);
    res.status(201).json({
      success: true,
      msg: "User Data has been updated",
      updatedData: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
module.exports = { registerUser, loginUser, getUsers, deleteUser, updateUser };
