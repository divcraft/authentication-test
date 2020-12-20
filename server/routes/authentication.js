const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const passport = require('passport');

const router = express.Router();

router.post('/login', (req, res, next) => {
   passport.authenticate('local', (err, user) => {
      if (err) throw err;
      if (user) {
         res.send('Cannot log in, check you username and password')
      } else {
         req.logIn(user, err => {
            if (err) throw err;
            res.send('Authentication has been processed!')
         })
      }
   })(req, res, next)
})

router.post('/register', (req, res) => {
   const { username, password } = req.body.body
   User.findOne({ username }, async (err, data) => {
      if (err) throw err;
      if (data) res.send('User already exists!');
      if (!data) {
         const hashedPassword = await bcrypt.hash(password, 10);
         newUser = new User({
            username,
            password: hashedPassword,
         })
         await newUser.save()
         res.send('User has been created successfully!')
      }
   })
})

module.exports = router;