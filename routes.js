'use strict';
function initialize(app) {
	function getUser(req) {
        return req.session.user || {};
    }
    app.get('/', function (req, res) {
        res.render('home', {user: getUser(req)});
    });
    app.post('/login', function (req, res) {
        var username, user;
        req.session.user = null;
        username = req.param('username');
        user = { username : username };
        user.isAdmin = username === 'bob';
        req.session.user = user;
        res.send(req.session.user);
    });
    app.post('/logout', function (req, res) {
        req.session.user = null;
        res.send(req.session.user);
    });
}
exports.initialize = initialize;