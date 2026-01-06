const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: 'User already exists' });
        const newUser = new User({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        res.status(201).json({ message: 'Signup successful!', success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};


const login = async (req, res) => {
    try {
        
    console.log("🔹 LOGIN API HIT");
    console.log("🔹 Request body:", req.body);
        const {email, password } = req.body;
        const existingUser = await User.findOne({ email }).select('+password');;
         console.log("🔹 User found in DB:", existingUser);
        if (!existingUser)

            return res.status(403).json({ message: 'Authentication failed! Email or password is incorrect', success: false });
       const isPasswordEqual = await bcrypt.compare(password, existingUser.password)
        console.log("🔹 Password match:", isPasswordEqual);

       if(!isPasswordEqual){
        return res.status(403).json({ message: 'Authentication failed! Email or password is incorrect', success: false });
       }
       console.log("🔹 User ID before sending:", existingUser._id);


       const jwtToken = jwt.sign(
        {email: existingUser.email, _id: existingUser._id},
        process.env.JWT_SECRET,
        {expiresIn: '24h'}
       ) 


      res.status(201).json({ message: 'login successful!', success: true, jwtToken, email, name: existingUser.name, _id: existingUser._id});
    } catch (error) {
        console.log("login error" ,error);
        res.status(500).json({ message: error.message, success: false });
    }
}






module.exports = { signup, login };
