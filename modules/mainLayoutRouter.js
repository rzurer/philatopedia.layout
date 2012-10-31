"use strict";
exports.mainLayoutRouter = function (urls, window, postFunction) {
    return {
        home : function () {
            window.location = urls.home;
        },
        sandbox : function () {
            window.location = urls.sandbox;
        },
        usercollection : function () {
            window.location = urls.usercollection;
        },
        add : function () {
            window.location = urls.add;
        },
        login : function (username, callback) {
            postFunction(urls.login, { username: username }, callback);
        },
        logout : function (callback) {
            postFunction(urls.logout, {}, callback);
        }
    };
};