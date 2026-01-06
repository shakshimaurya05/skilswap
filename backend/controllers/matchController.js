const User = require("../models/User");
const mongoose = require("mongoose");

const getMatches = async (req, res) => {
  try {
    const userId = req.params.userId.trim();

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const allUsers = await User.find({ _id: { $ne: currentUser._id } });

    const matches = [];

   allUsers.forEach(user => {
  if (
    !Array.isArray(currentUser.skillsToTeach) ||
    !Array.isArray(currentUser.skillsToLearn) ||
    !Array.isArray(user.skillsToTeach) ||
    !Array.isArray(user.skillsToLearn)
  ) return;

  const currentTeachSkills = currentUser.skillsToTeach.map(
    s => s.skillName
  );

  const otherTeachSkills = user.skillsToTeach.map(
    s => s.skillName
  );

  const skillMatch =
    currentTeachSkills.some(skill =>
      user.skillsToLearn.includes(skill)
    ) &&
    otherTeachSkills.some(skill =>
      currentUser.skillsToLearn.includes(skill)
    );

  if (!skillMatch) return;

  let score = 80;
  if (currentUser.location === user.location) score += 20;

  matches.push({
    user: {
      _id: user._id,
      name: user.name,
      skillsToTeach: user.skillsToTeach,
      skillsToLearn: user.skillsToLearn,
      location: user.location,
      profilePic: user.profilePic,
      bio: user.bio, 
    portfolio: user.portfolio 
    },
    score
  });
});


    matches.sort((a, b) => b.score - a.score);

    res.json(matches);

  } catch (error) {
    console.error("MATCH ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getMatches };
