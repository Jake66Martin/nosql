const User = require("../models/User");
const Thought = require("../models/Thought");

module.exports = {
  async getAllThoughts(req, res) {
    console.log("hello");
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getThoughtById(req, res) {
    try {
      const thoughts = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thoughts) {
        return res.status(404).json({ message: "No thoughts with that ID" });
      }
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "Thought created, but found no user with that ID" });
      }

      res.json("Created the thought");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thoughts = await Thought.findOneAndUpdate(
        { _id: req.body.thoughtId },
        { thoughtText: req.body.thoughtText },
        { new: true }
      );
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

    
      res.json(thought)
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
