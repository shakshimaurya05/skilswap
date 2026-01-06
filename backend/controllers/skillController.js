// controllers/skillController.js
const User = require("../models/User");

const getAllSkills = async (req, res) => {
  try {
    const users = await User.find({}, "skillsToTeach"); // get only skillsToTeach
    let skills = [];

    users.forEach(user => {
      if (Array.isArray(user.skillsToTeach)) {
        user.skillsToTeach.forEach(s => skills.push(s.skillName));
      }
    });

    skills = [...new Set(skills)]; 
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


const getUsersBySkill = async (req, res) => {
  const skillName = req.params.skill;
  try {
   
    const users = await User.find({
      $or: [
        { "skillsToTeach.skillName": skillName },
        { skillsToLearn: skillName }
      ]
    });

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllSkills, getUsersBySkill };
