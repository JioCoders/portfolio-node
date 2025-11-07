"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as express from "express";
// import * as path from "path";
var express = require("express");
var path = require("path");
var app = express();
var port = parseInt(process.env.PORT) || process.argv[3] || 3000;
var viewsDirs = [
    path.join(__dirname, 'views'),
    path.join(process.cwd(), 'views'),
];
var staticDirs = [
    path.join(__dirname, 'public'),
    path.join(process.cwd(), 'public'),
];
staticDirs.forEach(function (dir) { return app.use(express.static(dir)); });
app.set('views', viewsDirs).set('view engine', 'ejs');
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
// Export app for serverless (Vercel) and start server locally
exports.default = app;
if (!process.env.VERCEL) {
    app.listen(port, function () {
        console.log("\uD83D\uDE80 Server listening on http://localhost:".concat(port));
    });
}
//# sourceMappingURL=index.js.map