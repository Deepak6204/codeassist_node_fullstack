const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true }, // Store Firebase UID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  scores: {
    round1: { type: Number, default: 0 },
    round2: { type: Number, default: 0 },
    round3: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('User', userSchema);
