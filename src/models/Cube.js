const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  difficultyLevel: { type: Number, required: true },
  accessories : [{
    type: mongoose.Types.ObjectId,
    ref:'Accessory'
  }]
});

const Cube = new mongoose.model("Cube", cubeSchema);

module.exports = Cube;
