const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

router.get('/login', (req, res) => {
   console.log(req.query)
   res.send('login works fine')
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