"use strict";
// import * as express from "express";
// import * as path from "path";
var express = require("express");
var path = require("path");
var app = express();
var port = parseInt(process.env.PORT) || process.argv[3] || 3000;
// For Vercel, views should be relative to the built file location
var viewsDirs = [
    path.join(__dirname, 'views'),
    path.join(process.cwd(), 'views'),
    path.join(process.cwd(), 'dist', 'views'),
];
// Only use express.static locally, Vercel serves static files automatically
if (!process.env.VERCEL && !process.env.VERCEL_ENV) {
    var staticDirs = [
        path.join(__dirname, 'public'),
        path.join(process.cwd(), 'public'),
    ];
    staticDirs.forEach(function (dir) { return app.use(express.static(dir)); });
}
// Set view engine - ensure ejs is available
app.set('views', viewsDirs);
app.set('view engine', 'ejs');
// Routes
app.get('/', function (req, res) {
    console.log('Index page called');
    res.render('index');
    console.log('Index page rendered');
});
app.get('/api', function (req, res) {
    console.log('API call initiated');
    res.json({ msg: 'Helloo world' });
    console.log('API call completed');
});
if (!process.env.VERCEL && !process.env.VERCEL_ENV) {
    app.listen(port, function () {
        console.log("\uD83D\uDE80 Server listening on http://localhost:".concat(port));
    });
}
module.exports = app;
//# sourceMappingURL=index.js.map