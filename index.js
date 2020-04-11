const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        accessToken => {
            console.log(accessToken)
        }
    )
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email'] // Specifies to google what access we want - in this case, profile and email - from a users account
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


