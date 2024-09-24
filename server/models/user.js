const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true }, // Store Firebase UID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  scores: {
    round1: {
      score: { type: Number, default: null }, // Initially null (no score if unattempted)
      time: { type: Number, default: null },  // Time is also null until round is attempted
    },
    round2: {
      score: { type: Number, default: null },
      time: { type: Number, default: null },
    },
    round3: {
      score: { type: Number, default: null },
      time: { type: Number, default: null },
    }
  }
});

module.exports = mongoose.model('User', userSchema);
