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
}