'use strict';
var application,
    express = require('express'),
    jade = require('jade'),
	flash = require('connect-flash'),
	browserify = require('browserify'),
    config = require('./config'),
    urls = require('./modules/urls').urls,
    routes = require('./modules/routes').routes(urls),
    app = module.exports = express();
config.configure(app, express, flash, browserify);
routes.initialize(app);
application = app.listen(3333);
console.log('Express service listening on port %d, environment: %s', application.address().port, app.settings.env);
