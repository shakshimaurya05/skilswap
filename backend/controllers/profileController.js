const User = require('../models/User');
const completeProfile = async (req, res) => {
    try {
        const userId = req.user._id; 
        const {
            bio,
            skillsToTeach,
            skillsToLearn,
            location,
            portfolio,
            profilePic
        } = req.body;

        const user = await User.findByIdAndUpdate(
            userId,
            {
                bio,
                skillsToTeach,
                skillsToLearn,
                location,
                portfolio,
                profilePic,
                profileCompleted: true
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Profile completed successfully!",
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { completeProfile };
