/*jslint browser: true*/
/*global  window, localStorage, $*/
"use strict";
var postFunction = function (url, input, callback) {
        $.ajax({
            type: 'POST',
            url: url,
            data: input,
            success: function (output) {
                if (callback) {
                    callback(output);
                }
            }
        });
    },
    urls = require('./modules/urls').urls,
    mainLayoutRouter = require('./modules/mainLayoutRouter').mainLayoutRouter(urls, window, postFunction),
    constants = require('./modules/constants').constants,
    initializeLayout =  function () {
        var loginControl = require('./modules/loginControl').loginControl(mainLayoutRouter),
            mainMenu = require('./modules/mainMenu').mainMenu(urls),
            layout = require("./modules/layout").layout(loginControl, mainMenu);
        window.mainlayout = layout;
    },
    initializeHome = function () {
        window.home = require('./modules/home').home(urls, constants, mainLayoutRouter);
    },
    initialize = function () {
        initializeLayout();
        initializeHome();
    };
initialize();


