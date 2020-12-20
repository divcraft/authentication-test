const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

module.exports = () => {
   passport.use(
      new localStrategy((username, password, done) => {
         User.findOne({ username }, (err, user) => {
            if (err) throw err;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
               if (err) throw err;
               if (result) {
                  return done(null, user)
               } else {
                  return done(null, false)
               }
            })
         })
      })
   )
   passport.serializeUser((user, done) => {
      done(null, user.id);
   });

   passport.deserializeUser((id, done) => {
      User.findById({ id }, (err, user) => {
         done(err, user);
      })
   });
}

