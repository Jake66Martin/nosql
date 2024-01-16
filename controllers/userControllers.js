const User = require("../models/User");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      ;
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
