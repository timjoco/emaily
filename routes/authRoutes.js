const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email'] // Specifies to google what access we want - in this case, profile and email - from a users account
        })
    );

    app.get(
      '/auth/google/callback', 
      passport.authenticate('google'),
      (req, res) => {
        res.redirect('/surveys');
      } 
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};