const User = require('../models/user.js');

// Create or get user
exports.createOrUpdateUser = async (req, res) => {
  const { firebaseId, email, name } = req.body;

  try {
    let user = await User.findOne({ firebaseId });
    if (!user) {
      user = new User({ firebaseId, email, name });
      await user.save();
    }
    res.status(200).json({ message: 'User data saved successfully', user });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
