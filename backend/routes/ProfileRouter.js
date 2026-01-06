
const express = require('express');
const { completeProfile } = require('../controllers/profileController');
const { getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const Router = express.Router();

Router.post('/complete-profile', authMiddleware, completeProfile);
Router.get('/profile', authMiddleware, getUserProfile);
module.exports = Router;
