const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false, // this is for not sending password in queries
    },

    bio: {
        type: String,
        maxlength: 200,
        default: '',
    },

    skillsToTeach: [
        {
            skillName: { type: String, trim: true },
            experienceLevel: {
                type: String,
                enum: ['beginner', 'intermediate', 'expert'],
                default: 'beginner',
            },
        },
    ],

    skillsToLearn: [
        {
            type: String,
            trim: true,
        },
    ],

    location: {
        type: String,
        default: '',
    },
    portfolio: {
        type: String,
        trim: true,
        default: '',
    },
    profilePic: {
        type: String,
        default:
            'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // default avatar
    },
      profileCompleted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

},
    { timestamps: true }
);



module.exports = mongoose.model('User', userSchema);