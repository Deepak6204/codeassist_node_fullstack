const User = require('../models/user');

const updateScore = async (req, res) => {
  const { firebaseId, round, score, time } = req.body;

  if (!firebaseId || !round || score === undefined || time === undefined) {
    return res.status(400).json({ message: 'Invalid input. Please provide firebaseId, round, score, and time.' });
  }

  try {
    // Find the user by Firebase ID
    const user = await User.findOne({ firebaseId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the score for the round has already been set
    if (user.scores[`round${round}`].score !== null) {
      return res.status(400).json({ message: `Score for round ${round} has already been submitted. Only one attempt is allowed.` });
    }

    // Update score and time for the specified round if it's the first attempt
    user.scores[`round${round}`].score = score;
    user.scores[`round${round}`].time = time;

    // Save updated user data
    await user.save();

    res.status(200).json({
      message: `Score and time for round ${round} updated successfully`,
      scores: user.scores,
    });
  } catch (error) {
    console.error('Error updating score and time:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { updateScore };
