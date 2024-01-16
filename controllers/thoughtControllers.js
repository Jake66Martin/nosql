const User = require("../models/User");
const Thought = require("../models/Thought");

module.exports = {

    async getAllThoughts(req, res) {
        console.log('hello')
        try {
          const thoughts = await Thought.find();
          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async getThoughtById(req, res) {
        try {
          const thoughts = await Thought.findOne({ _id: req.params.thoughtId })
          if (!thoughts) {
            return res.status(404).json({ message: 'No thoughts with that ID' });
          }
          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },
}