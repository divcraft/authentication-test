const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const authenticationRoute = require('./routes/authentication');

const strategy = passportLocal.Strategy;
const app = express();

// MIDDLEWARES

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
   credentials: true
}));
app.use(expressSession({
   secret: 'secretcode',
   resave: true,
   saveUninitialized: true,
}))
app.use(cookieParser('secretcode'))

// ROUTES

app.use('/authentication', authenticationRoute)


app.listen(4000, () => {
   console.log('App is listning at http://localhost:4000');
});
