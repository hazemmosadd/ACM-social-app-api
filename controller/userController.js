const User = require("../models/user");

const createUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const user = await new User({ name: userName, email, password }).save();
    res.send(user);
  } catch (e) {
    res.send("Duplicate Found");
  }
};

const findUsers = async (req, res) => {
  const users = await User.find({});

  res.send(users);
};

const findUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.send(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  res.send(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { name, password },
    { new: true }
  );

  res.send(user);
};

const updateUserFields = async (req, res) => {
  const updates = Object.keys(req.body);
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createUser,
  findUsers,
  findUser,
  deleteUser,
  updateUser,
  updateUserFields,
};
