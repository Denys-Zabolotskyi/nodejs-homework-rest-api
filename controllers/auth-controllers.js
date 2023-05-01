const bcrypt = require("bcryptjs");

const { ctrlWrapper } = require("../utils");

const { User } = require("../models/user");

const { HttpError } = require("../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassoword = await bcrypt.hash(password, 10);

  const result = await User.create({ ...req.body, password: hashPassoword });
  res.status(201).json({
    name: result.name,
    email: result.email,
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
