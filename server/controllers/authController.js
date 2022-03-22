const User = require("../models/user");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const user = await User.findOne({
               email: req.body.email
           })
           if (user) {
               return res.status(422).json('email is existe')
           }
       } catch (error) {
           return res.status(500).json(error)
       }
   
     
       try {
           const salt = await bcryptjs.genSalt(15)
           const passwordCrypter = await bcryptjs.hash(req.body.password, salt)
           console.log('passwordCrypter', passwordCrypter)
           const newUser = new User({
               lastName: req.body.lastName,
               firstName: req.body.firstName,
               email: req.body.email,
               password: passwordCrypter,
               phone: req.body.phone,
           });
         const savedUser = await newUser.save();
         return res.status(201).json(savedUser);
       } catch (err) {
         return res.status(500).json(err);
       }
  };

const login = async (req, res) => {
    try {
        const user = await User.findOne({
               email: req.body.email,

           })
           if (!user) {
               return res.status(401).json('wrong email or password')
           }
        const isPasswordValide = await bcryptjs.compare(req.body.password, user.password)
        if (!isPasswordValide) {
            return res.status(401).json('wrong email or password')
        }
        const token = jwt.sign({_id:user._id, email: user.email}, process.env.TOKEN_KEY, { expiresIn: '3 days'})
        return res.status(200).json({Token : token, User : user})
       } catch (error) {
           return res.status(500).json(error)
       }
   
}

  module.exports.register = register;
  module.exports.login = login;