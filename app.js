'use strict';
var application,
    express = require('express'),
    jade = require('jade'),
	flash = require('connect-flash'),
	browserify = require('browserify'),
    routes = require('./routes'),
    config = require('./config'),
    app = module.exports = express();
config.configure(app, express, flash, browserify);
routes.initialize(app);
application = app.listen(3333);
console.log('Express service listening on port %d, environment: %s', application.address().port, app.settings.env);
