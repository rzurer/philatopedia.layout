"use strict";
exports.routes = function (urls) {
    var clearSession = function (req) {
            req.session.user = null;
        },
        getUser = function (req) {
            return req.session.user || {};
        },
        goHome = function (res) {
            res.redirect('/');
        },
        loadUser = function (req, res, next) {
            var user = getUser(req);
            if (user) {
                next();
            } else {
                goHome(res);
            }
        },
        loadAdminUser = function (req, res, next) {
            var user = getUser(req);
            if (user && user.isAdmin) {
                next();
            } else {
                goHome(res);
            }
        },
        getUserFake = function (username) {
            if (username === 'bob') {
                return { username : username, isAdmin : true };
            }
            if (username === 'bzurer') {
                return { username : username, isAdmin : false };
            }
            return null;
        };
    return {
        initialize : function (app) {
            app.get(urls.home, function (req, res) {
                res.render('home', { user: getUser(req)});
            });
            app.get(urls.sandbox, loadUser, function (req, res) {
                res.render('dummy', {view : 'sandbox', user: getUser(req)});
            });
            app.get(urls.usercollection, loadUser, function (req, res) {
                res.render('dummy', {view : 'usercollection', user: getUser(req)});
            });
            app.get(urls.add, loadUser, function (req, res) {
                res.render('dummy', {view : 'add', user: getUser(req)});
            });
            app.get(urls.admin, loadAdminUser, function (req, res) {
                res.render('dummy', {view : 'admin', user: getUser(req)});
            });
            app.post(urls.login, function (req, res) {
                var username, user;
                clearSession(req);
                username = req.param('username');
                user = getUserFake(username);
                req.session.user = user;
                res.send(req.session.user);
            });
            app.post(urls.logout, function (req, res) {
                clearSession(req);
                res.send(req.session.user);
            });
        }
    };
};