'use strict';

var gulp = require('gulp');
var http = require('http');
var express = require('express');
var embedlr = require('gulp-embedlr');
var livereload = require('connect-livereload');
var compress = require('compression');

var config = require('./config');

// Set up an express server (not starting it yet)
var middleware = express();
// Compression gzip
middleware.use(compress());
// Live reload
middleware.use(livereload({
  port: config.livereloadport
}));
// Use our 'dist' folder as rootfolder
middleware.use(express.static('./dist'));
// Push State implementation
middleware.all('/*', function(request, response) {
  response.sendFile('index.html', { root: 'dist' });
});
// Create HTTP Server
var server = http.createServer(middleware);

module.exports = server;
